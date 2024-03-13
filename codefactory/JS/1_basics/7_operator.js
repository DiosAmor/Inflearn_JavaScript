/**
 * +, - 를 이용하여 type 변환
 * 단, 저장이 새롭게 되는건 아님.
 */

let sample = "99";

console.log(+sample);
console.log(typeof +sample);

console.log(-sample);
console.log(typeof -sample);

console.log(sample);
console.log(typeof sample);

sample = true;

console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

/**
 * 단축 평가 (short circuit evaluation)
 *
 * && -> 좌측이 true면 우측 값 반환
 * && -> 좌측이 false면 좌측 값 반환
 * || -> 좌측이 true면 좌측 값 반환
 * || -> 좌측이 false면 우측 값 반환
 */

console.log("---------");

console.log(true || "diosamor");
console.log(false || "diosamor");
console.log(false && "diosamor");
console.log(true && "diosamor");
console.log(true && false && "diosamor");
console.log(true && true && "diosamor");

/**
 * null 연산자
 *
 */

let name;
console.log(name);

name = name ?? "diosamor";
console.log(name);

name = name ?? "diosamor2";
console.log(name);
