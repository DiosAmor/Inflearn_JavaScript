/**
 * 타입 단언
 */
type Person = {
  name: string;
  age: number;
};

let person: Person = {} as Person;

let person2 = {
  name: "test",
  age: 10,
  nationality: "",
} as Person;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함.
 */

let num = 10 as unknown as string;

/**
 * const 단언
 */

let num4 = 10 as const;

// readonly로 만들기
let cat = {
  name: "야옹",
  color: "yellow",
} as const;

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "diosamor",
};

const len: number = post.author!.length;
