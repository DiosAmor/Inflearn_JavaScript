/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

function func(value: number | string) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
