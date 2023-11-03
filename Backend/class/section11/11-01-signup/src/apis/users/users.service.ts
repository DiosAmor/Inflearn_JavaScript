import { Injectable, Scope } from '@nestjs/common';
import { IUsersServiceCreate } from './interfaces/users-service.interface';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

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

  create({ email, password, name, age }: IUsersServiceCreate): Promise<User> {
    return this.usersRepository.save({
      email,
      password,
      name,
      age,
    });
  }
}
