import { Injectable } from '@nestjs/common';

// 인젝션 스코프
// 1. 싱글톤 (default)
// 2. request 스코프 (매 요청마다 new)
// 3. Transient 스코프 (매 주입마다 new)
@Injectable()
export class BoardsService {
  qqq(): string {
    return 'Hello World!';
  }
}
