/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 *
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 */

let original = "안녕하세요";
let clone = original;

console.log(original);
console.log(clone);

clone += " 안유진 입니다.";
console.log("------------------");
console.log(original);
console.log(clone);

let originalObj = {
  name: "안유진",
  group: "아이브",
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

cloneObj.name = "장원영";

console.log(originalObj);
console.log(cloneObj);
