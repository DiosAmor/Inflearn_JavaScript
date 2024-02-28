import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from './entity/user.entity';
import { ILike, LessThan, Like, Not, Repository } from 'typeorm';
import { ProfileModel } from './entity/profile.entity';
import { PostModel } from './entity/post.entity';
import { TagModel } from './entity/tag.entity';

@Controller()
export class AppController {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
    @InjectRepository(ProfileModel)
    private readonly profileRepository: Repository<ProfileModel>,
    @InjectRepository(PostModel)
    private readonly postRepository: Repository<PostModel>,
    @InjectRepository(TagModel)
    private readonly tagRepository: Repository<TagModel>,
  ) {}

  @Post('sample')
  async sample() {
    // 모델에 해당되는 객체 생성 - 저장은 안 함.
    const user1 = this.userRepository.create({
      email: 'test@gmail.com',
    });

    // 저장
    const user2 = this.userRepository.save({
      email: 'test@gmail.com',
    });

    // preload
    // 입력된 값을 기반으로 데이터베이스에 있는 데이터를 불러오고
    // 추가 입력된 값으로 데이터베이스에서 가져온 값들을 대체함.
    // 저장하지는 않음.
    const user3 = this.userRepository.preload({
      id: 101,
      email: 'test2@gmail.com',
    });

    // 삭제
    await this.userRepository.delete(101);

    // 2만큼 증가
    await this.userRepository.increment(
      {
        id: 1,
      },
      'count',
      2,
    );

    // 1만큼 감소
    await this.userRepository.decrement(
      {
        id: 1,
      },
      'count',
      1,
    );

    // 갯수 세기
    const count = await this.userRepository.count({
      where: {
        email: ILike('%gmail.com%'),
      },
    });

    // sum
    const sum = await this.userRepository.sum('count', {
      email: ILike('%0%'),
    });

    return user1;
  }

  @Post('users')
  async postUser() {
    for (let i = 0; i < 100; i++) {
      await this.userRepository.save({
        email: `user-${i}@gmail.com`,
      });
    }
  }

  @Get('users')
  getUsers() {
    return this.userRepository.find({
      where: {
        // 아닌 경우
        // id: Not(1),
        // 적은 경우
        // id: LessThan(30),
        // 유사값
        // email: Like('%gmail%'),
        // 대소문자 구분없이 유사값
        email: Like('%GMAIL%'),
        // 사이값
        // id: Between(10,15),
        // 해당되는 여러 개의 값
        // id: In([1,3,5,7,100])
      },

      // // 관계를 가져오는 법
      // // 관계가 설정되면 select와 where 내부에서 관련해서 더 할 수 있음.
      // // relations: {
      // //   profile: true,
      // //   posts: true,
      // // },
      // // 어떤 프로퍼티를 선택할 지
      // // 기본은 모든 프로퍼티를 가져온다.
      // // 만약에 select를 정의하지 않으면
      // // 정의하면 정의된 것만 가져온다.
      // select: {
      //   id: true,
      //   createdAt: true,
      //   version: true,
      // },
      // // 필터링할 조건을 입력하게 된다.
      // // and 조건으로 작동
      // // or 조건을 원한다면 리스트로
      // where: [
      //   {
      //     version: 1,
      //   },
      //   {
      //     id: 3,
      //   },
      // ],
      // // 오름차순 (ASC), 내림차순 (DESC)
      // order: {
      //   id: 'DESC',
      // },
      // // 처음 몇 개를 제외할지
      // skip: 0,
      // // 총 몇 개를 가져올지
      // take: 2,
    });
  }

  @Patch('users/:id')
  async patchUser(@Param('id') id: string) {
    const user = await this.userRepository.findOne({
      where: {
        id: +id,
      },
    });
    return this.userRepository.save({
      ...user,
      // title: user.title + '0',
    });
  }

  @Delete('user/profile/:id')
  async deleteProfile(@Param('id') id: string) {
    await this.profileRepository.delete(+id);
  }

  @Post('user/profile')
  async createUserAndProfile() {
    const user = await this.userRepository.save({
      email: 'diosamor@gmail.com',
      profile: {
        profileImg: 'test.jpg',
      },
    });

    // const profile = await this.profileRepository.save({
    //   profileImg: 'test.jpg',
    //   user,
    // });

    return user;
  }

  @Post('user/post')
  async createUserAndPosts() {
    const user = await this.userRepository.save({
      email: 'diosamor@gmail.com',
    });

    await this.postRepository.save({
      author: user,
      title: 'post 1',
    });

    await this.postRepository.save({
      author: user,
      title: 'post 2',
    });

    return user;
  }

  @Post('posts/tags')
  async createPostsTags() {
    const post1 = await this.postRepository.save({
      title: 'tag test 1',
    });

    const post2 = await this.postRepository.save({
      title: 'tag test 2',
    });

    const tag1 = await this.tagRepository.save({
      name: 'tag 1',
      posts: [post1, post2],
    });

    const tag2 = await this.tagRepository.save({
      name: 'tag 2',
      posts: [post1],
    });

    const post3 = await this.postRepository.save({
      title: 'tag test 2',
      tags: [tag1, tag2],
    });

    return true;
  }

  @Get('posts')
  getPosts() {
    return this.postRepository.find({
      relations: {
        tags: true,
      },
    });
  }

  @Get('tags')
  getTags() {
    return this.tagRepository.find({
      relations: {
        posts: true,
      },
    });
  }
}
