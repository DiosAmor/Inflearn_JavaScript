/**
 * Immutable Object
 */
const yuJin = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log(yuJin);

/**
 * Extensible
 *
 * 프로퍼티 삭제는 되나 추가는 불가 (에러가 나지는 않음.)
 * 내부 값 자체는 변경 가능
 */
console.log("\n------Extensible---------\n");
console.log(Object.isExtensible(yuJin));

yuJin["position"] = "vocal";

console.log(yuJin);

Object.preventExtensions(yuJin);

console.log(Object.isExtensible(yuJin));

yuJin["groupName"] = "ive";
console.log(yuJin);

yuJin["position"] = "dance";
console.log(yuJin);

delete yuJin["position"];
console.log(yuJin);

/**
 * Seal
 *
 * 프로퍼티 삭제, 추가 불가 (에러가 나지는 않음.)
 * Configurable: false인 것임
 * 내부 값 자체는 변경 가능
 */
console.log("\n------Seal---------\n");

const yuJin2 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log(yuJin2);

console.log(Object.isSealed(yuJin2));

Object.seal(yuJin2);

console.log(Object.isSealed(yuJin2));

yuJin2["groupName"] = "ive";
console.log(yuJin2);

delete yuJin2["name"];
console.log(yuJin2);

yuJin2["year"] = 2001;
console.log(yuJin2);

Object.defineProperty(yuJin2, "name", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "name"));
yuJin2["name"] = "장원영";
console.log(yuJin2);

/**
 * Freezed
 *
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */
const yuJin3 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log(Object.isFrozen(yuJin3));

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3["groupName"] = "아이브";
console.log(yuJin3);

delete yuJin3["name"];
console.log(yuJin3);

// Object.defineProperty(yuJin3, 'name', {
//     value: '코드팩토리',
// })
console.log(Object.getOwnPropertyDescriptor(yuJin3, "name"));

// 하위 객체까지 freeze되는 것은 아님.
const yuJin4 = {
  name: "안유진",
  year: 2003,
  wonYoung: {
    name: "장원영",
    year: 2002,
  },
};
Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4["wonYoung"]));
