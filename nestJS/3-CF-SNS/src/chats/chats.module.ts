import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { ChatsGateway } from './chats.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatsModel } from './entity/chats.entity';
import { CommonModule } from 'src/common/common.module';
import { MessagesModel } from './messages/entity/messages.entity';
import { ChatsMessagesService } from './messages/messages.service';
import { UsersModule } from 'src/users/users.module';
import { MessagesController } from './messages/messages.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChatsModel, MessagesModel]),
    CommonModule,
    UsersModule,
  ],
  controllers: [ChatsController, MessagesController],
  // gateway는 provider
  providers: [ChatsGateway, ChatsService, ChatsMessagesService],
})
export class ChatsModule {}
