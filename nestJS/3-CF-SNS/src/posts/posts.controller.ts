import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { AccessTokenGuard } from 'src/auth/guard/bearer-token.guard';
import { User } from 'src/users/decorator/user.decorator';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PaginatePostDto } from './dto/paginate-post.dto';
import { PostsModel } from './entities/posts.entity';
import { UsersModel } from 'src/users/entities/users.entity';
import { ImageModelType } from 'src/common/entity/image.entity';
import { DataSource } from 'typeorm';
import { PostsImagesService } from './image/images.service';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly postsImagesService: PostsImagesService,
    private readonly dataSource: DataSource,
  ) {}

  // 1) GET /posts

  @Get()
  getPosts(@Query() query: PaginatePostDto) {
    return this.postsService.paginatePosts(query);
  }

  @Post('random')
  @UseGuards(AccessTokenGuard)
  async postPostRandom(@User() user: UsersModel): Promise<boolean> {
    await this.postsService.generatePosts(user.id);

    return true;
  }

  // 2) GET /posts/:id
  @Get(':id')
  getPost(@Param('id', ParseIntPipe) id: number): Promise<PostsModel> {
    return this.postsService.getPostById(id);
  }

  // 3) POST /posts
  @Post()
  @UseGuards(AccessTokenGuard)
  async postPosts(
    @User('id') authorId: number,
    @Body() body: CreatePostDto,
    // @Body('authorId') authorId: number,
    // @Body('title') title: string,
    // @Body('content') content: string,
    // @Body('isPublic', new DefaultValuePipe(true)) isPublic: boolean,
  ) {
    // const authorId = req.user.id;

    // Transaction과 관련된 모든 쿼리를 담당함
    // 쿼리 러너를 생성
    const qr = this.dataSource.createQueryRunner();

    // 쿼리 러너에 연결
    await qr.connect();

    await qr.startTransaction();

    // 로직 실행
    try {
      const post = await this.postsService.createPost(authorId, body, qr);

      for (let i = 0; i < body.images.length; i++) {
        await this.postsImagesService.createPostImage(
          {
            post,
            order: i,
            path: body.images[i],
            type: ImageModelType.POST_IMAGE,
          },
          qr,
        );
      }
      await qr.commitTransaction();

      return this.postsService.getPostById(post.id);
    } catch (e) {
      await qr.rollbackTransaction();
      await qr.release();
      throw new InternalServerErrorException(`${e}`);
    }
  }

  // 4) PATCH /posts/:id
  @Patch(':id')
  patchPost(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdatePostDto,
    // @Body('title') title?: string,
    // @Body('content') content?: string,
  ): Promise<PostsModel> {
    return this.postsService.updatePost(id, body);
  }

  // 5) DELETE /posts/:id
  @Delete(':id')
  deletePost(@Param('id', ParseIntPipe) id: number): Promise<number> {
    return this.postsService.deletePost(id);
  }
}
