/**
 * 함수 타입 표현식
 */

type Add = (c: number, d: number) => number;

const add: Add = (a, b) => a + b;

/**
 * 호출 시그니처
 * (콜 시그니처)
 */

type Operation2 = {
  (a: number, b: number): number;
};

const add2: Operation2 = (a, b) => a + b;
