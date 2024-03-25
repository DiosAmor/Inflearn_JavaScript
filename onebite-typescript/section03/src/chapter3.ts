/**
 * 객체 타입간의 호환성
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "Giraffe",
  color: "yellow",
};

let dog: Dog = {
  name: "GoodBoy",
  color: "brown",
  breed: "Jindo",
};

animal = dog;

// 초과 프로퍼티 검사
let animal2: Animal = {
  name: "elephant",
  color: "Gray",
  // breed:"test",
};
