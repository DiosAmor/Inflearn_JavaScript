/**
 * Prototype
 */
const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티다.
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__);

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}
console.log("안유진", 2003);

// 너무 자연스럽게 써왔던 것이 왜 가능한지 알게 된다.
console.log(yuJin.toString());
console.log(Object.prototype.toString());

/**
 *  prototype 고찰
 */
function IdolModel2(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `${this.name}이 인사를 합니다.`;
  };
}

const yuJin2 = new IdolModel2("안유진", 2003);
const wonYoung2 = new IdolModel2("장원영", 2002);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());

// 이것은 다르다
console.log(yuJin2.sayHello === wonYoung2.sayHello);
console.log(yuJin2.hasOwnProperty("sayHello"));

function IdolModel3(name, year) {
  this.name = name;
  this.year = year;
}

IdolModel3.prototype.sayHello = function () {
  return `${this.name}이 인사를 합니다.`;
};

const yuJin3 = new IdolModel3("안유진", 2003);
const wonYoung3 = new IdolModel3("장원영", 2004);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());

// 이것은 같아진다!!
console.log(yuJin3.sayHello === wonYoung3.sayHello);
console.log(yuJin3.hasOwnProperty("sayHello"));

// static
IdolModel3.sayStaticHello = function () {
  return "안녕하세요 저는 static method 입니다.";
};

console.log(IdolModel3.sayStaticHello());

/**
 * Overriding
 */
function IdolModel4(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return "안녕하세요 저는 인스턴스 메서드입니다!";
  };
}

IdolModel4.prototype.sayHello = function () {
  return "안녕하세요 저는 prototype 메서드입니다!";
};

const yuJin4 = new IdolModel4("안유진", 2003);

// 프로퍼티 셰도잉 - class에서 override
console.log(yuJin4.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 *
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 *
 * 아니 상속을 받고 바꾼다고???
 */
function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

IdolModel.prototype.sayHello = function () {
  return `${this.name} 인사를 합니다.`;
};

function FemaleIdolModel(name, year) {
  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name}가 춤을 춥니다.`;
  };
}

const gaEul = new IdolModel("가을", 2004);
const ray = new FemaleIdolModel("레이", 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype);

console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
// console.log(ray.sayHello());

// 아니 상속을 받고 갑자기 중간에 바꿔치기를 할 수 있네...
Object.setPrototypeOf(ray, IdolModel.prototype);
console.log(ray.sayHello());

// 원래는 이거여야함.
console.log(ray.constructor === FemaleIdolModel);
// prototype을 바꿔서 이걸로 바뀜...
console.log(ray.constructor === IdolModel);
console.log(gaEul.constructor === IdolModel);
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);

// 허허 아예 클래스의 프로토타입을 바꿔버리네
FemaleIdolModel.prototype = IdolModel.prototype;
const eSeo = new FemaleIdolModel("이서", 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);
