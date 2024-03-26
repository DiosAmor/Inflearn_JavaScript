/**
 * 대수 타입
 * 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number;
a = 1;
a = "hello";

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
  language: "",
};

/**
 * 2. 교집합 - Intersection 타입
 */

let variable: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  // language: "",
};
