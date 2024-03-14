/**
 * Type Inference
 *
 * 타입 추론
 */
const constStringType = "const string";
const constBooleanType = true;

let yuJin = {
  name: "안유진",
  age: 2003,
};

const yuJin2 = {
  name: "안유진",
  age: 2003,
};

yuJin2.name = "코드팩토리";
console.log(yuJin2);

// const 타입으로 casting 해버림.
const yuJin3 = {
  name: "안유진" as const,
  age: 2003 as const,
};

// yuJin3.name = '코드팩토리';
console.log(yuJin3.name);
console.log(yuJin2.name);

/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, 2, 3, "4", "5", "6"];

// numbers.push('6');
const number = numbers[0];
const nos = numbersAndString[0];
// 길이가 넘는 것도 가져올 수도 있음.
const nos2 = numbersAndString[100];

// tuple
const twoNumbers = [1, 3] as const;

// twoNumbers[0] = 10;
// twoNumbers.push(100);
const first = twoNumbers[0];
const first2 = twoNumbers[3];
