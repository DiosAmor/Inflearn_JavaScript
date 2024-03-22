// 문자열
const str: string = "hello";

// 숫자
const num: number = 10;

// 배열
let arr: Array<string> = ["abc", "test"];
let arr2: Array<number> = [1, 2, 3];
let arr3: string[] = ["hi"];

// 튜플
let address: [string, number] = ["서울", 30];
address = ["수원", 10];

// 객체
let obj: object = {};

// 타입 객체
const person: { name: string; age: number } = {
  name: "lee",
  age: 1000,
};

// boolean
let show: boolean = true;

// Enum
enum Avengers {
  Capt,
  Ironman,
  Hulk,
}
const myHero = Avengers.Capt;

// any
let a: any = "hi";
a = 20;
a = false;
