/**
 * 함수 타입 정의
 */

function func(a: number, b: number): number {
  return a + b;
}

function intro(name = "diosamor", age: number, tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall:${tall + 10}`);
  }
}

/**
 * 화살표 함수
 */

const add = (a: number, b: number): number => a + b;

/**
 * rest
 */

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}
