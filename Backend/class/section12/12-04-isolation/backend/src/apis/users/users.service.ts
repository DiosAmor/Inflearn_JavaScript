import { ConflictException, Injectable, Scope } from '@nestjs/common';
import {
  IUserServiceFindOneByEmail,
  IUsersServiceCreate,
} from './interfaces/users-service.interface';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

// 인젝션 스코프
// 1. 싱글톤 (default)
// 2. request 스코프 (매 요청마다 new)
// 3. Transient 스코프 (매 주입마다 new)
@Injectable({ scope: Scope.DEFAULT })
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  findOneByEmail({ email }: IUserServiceFindOneByEmail): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async create({
    email,
    password,
    name,
    age,
  }: IUsersServiceCreate): Promise<User> {
    const user = await this.findOneByEmail({ email });
    if (user) throw new ConflictException('이미 등록된 이메일입니다.');

    const hashedPassword = await bcrypt.hash(password, 10);

    return this.usersRepository.save({
      email,
      password: hashedPassword,
      name,
      age,
    });
  }
}
