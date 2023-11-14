interface User {
  age: number;
  name: string;
}

const seho: User = { name: "hi", age: 100 };

function getUser(user: User) {
  console.log(user);
}
getUser(seho);

// 배열 인덱싱
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ["1", "2", "3"];

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface translator extends Person {
  language: string;
}

const joo: translator = { name: "joo", age: 20, language: "ts" };
