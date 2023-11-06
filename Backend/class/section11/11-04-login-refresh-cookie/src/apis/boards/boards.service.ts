import { Injectable, Scope } from '@nestjs/common';
import { Board } from './entities/board.entity';
import { IBoardsServiceCreate } from './interfaces/boards-service.interface';

// 인젝션 스코프
// 1. 싱글톤 (default)
// 2. request 스코프 (매 요청마다 new)
// 3. Transient 스코프 (매 주입마다 new)
@Injectable({ scope: Scope.DEFAULT })
export class BoardsService {
  findAll(): Board[] {
    const result = [
      { number: 1, writer: '철수', title: '제목입니다~~', contents: '내용' },
      { number: 2, writer: '영희', title: '제목입니다~~', contents: '내용' },
      { number: 3, writer: '훈', title: '제목입니다~~', contents: '내용' },
    ];
    return result;
  }

  create({ createBoardInput }: IBoardsServiceCreate): string {
    console.log(createBoardInput.writer);
    console.log(createBoardInput.title);
    console.log(createBoardInput.contents);
    return '게시물 등록에 성공하셨습니다.';
  }
}
