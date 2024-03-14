/**
 * Union Basics
 *
 * 유니언은 TS에서 타입을 병햡할 수 있는 수많은 방법 중 하나이다.
 * 유니언은 각 집합에 추가적으로 더하는 개념으로 보면 됨.
 */

type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = "diosamor";
stringOrBooleanType = true;

/**
 * 리스트의 유니언
 */

type StringListOrBooleanList = string[] | boolean[];

let strListOrBooleanList: StringListOrBooleanList = [
  "아이유",
  "김고은",
  "박소담",
];

strListOrBooleanList = [true, false, false, true];

// 위의 상황에서 섞는건 불가능.
// strListOrBooleanList = [
//     true,
//     '아이유',
// ]

// 아래와 같이 설정.
type StrOrNumberList = (string | number)[];

let stringOrNumberList = [1, 2, 3, "아이유", "레드벨벳"];

/**
 * Interface로 사용하는 union
 */

interface Animal {
  name: string;
  age: number;
}

interface Human {
  name: string;
  age: number;
  address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
  name: "diosamor",
  age: 32,
  address: "대한민국",
};

// 한 타입만으로 모두 충족된다면 그 타입으로 추론
// 만약 하나를 충족하고 추가적으로 들어가는 형태면 섞인 타입으로 추론.
console.log(animalOrHuman);
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
console.log(animalOrHuman.address);

animalOrHuman = {
  name: "오리",
  age: 9,
};

console.log(animalOrHuman);

console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
// 이미 타입 추론이 animal로 되었기 때문에 에러가 남.
// console.log(animalOrHuman.address);
