import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { ProfileModel } from './profile.entity';
import { PostModel } from './post.entity';

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity()
export class UserModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  // @Column({
  //   // 데이터베이스에서 인지하는 칼럼 타입
  //   // 기본적으로는 자동 유추 됨.
  //   type: 'varchar',

  //   // 데이터베이스 칼럼 이름
  //   // 프로퍼티 이름으로 자동 유추됨.
  //   name: 'title',

  //   // 길이
  //   length: 300,

  //   // null이 가능한지
  //   nullable: true,

  //   // false면 처음 저장할때만 값 지정 가능
  //   update: true,

  //   // find()를 실행할 때 기본으로 값을 불러올지
  //   // 기본값이 true
  //   select: true,

  //   // 기본 값
  //   default: 'default value',

  //   // 칼럼 중에서 유일한 값이 되어야 하는지
  //   unique: false,
  // })
  // title: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  role: Role;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // save() 함수가 몇 번 호출되었는지
  @VersionColumn()
  version: number;

  @Column()
  @Generated('uuid')
  additionalId: number;

  @OneToOne(() => ProfileModel, (profile) => profile.user, {
    // find() 실행할 때마다 항상 같이 가져올 relation
    eager: false,

    // 저장할 때 relation을 한 번에 같이 저장 가능.
    cascade: true,

    // null이 가능한지
    nullable: true,

    // 관계가 삭제됐을 때
    // no action -> 아무것도 안 함.
    // cascade -> 참조하는 Row도 같이 삭제
    // set null -> 참조하는 Row에서 참조 id를 null로 변경
    // set default -> 기본 세팅으로 설정 (테이블의 기본 세팅)
    // restrict -> 참조하고 있는 Row가 있는 경우 참조 당하는 Row 삭제 불가.
    onDelete: 'RESTRICT',
  })
  @JoinColumn()
  profile: ProfileModel;

  @OneToMany(() => PostModel, (post) => post.author)
  posts: PostModel[];

  @Column({
    default: 0,
  })
  count: number;
}
