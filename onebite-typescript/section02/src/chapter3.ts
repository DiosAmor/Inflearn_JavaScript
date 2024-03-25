// object
// 객체 리터럴 타입
let user: { id?: number; name: string } = {
  id: 1,
  name: "diosamor",
};

let dog: { name: string; color: string } = {
  name: "돌돌이",
  color: "brown",
};

// 구조적 타입 시스템
// Property Based Type System

user = {
  name: "홍길동",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "test",
};

// config.apiKey = "hacked";
