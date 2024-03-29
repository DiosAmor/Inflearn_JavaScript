import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { User } from 'src/users/decorator/user.decorator';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PaginatePostDto } from './dto/paginate-post.dto';
import { PostsModel } from './entity/posts.entity';
import { UsersModel } from 'src/users/entity/users.entity';
import { ImageModelType } from 'src/common/entity/image.entity';
import { DataSource, QueryRunner as QR } from 'typeorm';
import { PostsImagesService } from './image/images.service';
import { LogInterceptor } from 'src/common/interceptor/log.interceptor';
import { TransactionInterceptor } from 'src/common/interceptor/transaction.interceptor';
import { QueryRunner } from 'src/common/decorator/query-runner.decorator';
import { HttpExceptionFilter } from 'src/common/exception-filter/http.exception-filter';
import { RolesEnum } from 'src/users/const/roles.const';
import { Roles } from 'src/users/decorator/roles.decorator';
import { IsPublic } from 'src/common/decorator/is-public.decorator';
import { IsPublicEnum } from 'src/common/const/is-public.const';
import { IsPostMineOrAdminGuard } from './guard/is-post-mine-or-admin.guard';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly postsImagesService: PostsImagesService,
    private readonly dataSource: DataSource,
  ) {}

  // 1) GET /posts

  @Get()
  @IsPublic(IsPublicEnum.ISPUBLIC)
  @UseInterceptors(LogInterceptor)
  @UseFilters(HttpExceptionFilter)
  getPosts(@Query() query: PaginatePostDto) {
    return this.postsService.paginatePosts(query);
  }

  @Post('random')
  async postPostRandom(@User() user: UsersModel): Promise<boolean> {
    await this.postsService.generatePosts(user.id);

    return true;
  }

  // 2) GET /posts/:id
  @Get(':id')
  @IsPublic(IsPublicEnum.ISPUBLIC)
  getPost(@Param('id', ParseIntPipe) id: number): Promise<PostsModel> {
    return this.postsService.getPostById(id);
  }

  // 3) POST /posts
  @Post()
  @UseInterceptors(TransactionInterceptor)
  async postPosts(
    @User('id') authorId: number,
    @Body() body: CreatePostDto,
    @QueryRunner() qr: QR,
    // @Body('authorId') authorId: number,
    // @Body('title') title: string,
    // @Body('content') content: string,
    // @Body('isPublic', new DefaultValuePipe(true)) isPublic: boolean,
  ) {
    // const authorId = req.user.id;

    // Transaction과 관련된 모든 쿼리를 담당함
    // 쿼리 러너를 생성

    // 로직 실행
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
    return this.postsService.getPostById(post.id, qr);
  }

  // 4) PATCH /posts/:id
  @Patch(':postId')
  @UseGuards(IsPostMineOrAdminGuard)
  patchPost(
    @Param('postId', ParseIntPipe) id: number,
    @Body() body: UpdatePostDto,
    // @Body('title') title?: string,
    // @Body('content') content?: string,
  ): Promise<PostsModel> {
    return this.postsService.updatePost(id, body);
  }

  // 5) DELETE /posts/:id
  @Delete(':id')
  @Roles(RolesEnum.ADMIN)
  deletePost(@Param('id', ParseIntPipe) id: number): Promise<number> {
    return this.postsService.deletePost(id);
  }

  // RBAC -> Role Based Access Control
}
