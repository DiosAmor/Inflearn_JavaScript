/**
 * Super and Override
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `안녕하세요. 저는 ${this.name} 입니다. 출생연도는 ${this.year} 입니다.`;
  }
}

class FemaleIdolModel extends IdolModel {
  part;

  constructor(name, year, part) {
    super(name, year);
    this.part = part;
  }

  sayHello() {
    // <주의!> super.name이 아님.
    return `안녕하세요. 저는 ${this.name} 입니다. ${this.part}를 맡고 있습니다.`;
  }

  sayHello2() {
    return `${super.sayHello()} ${this.part}를 맡고 있습니다.`;
  }

  dance() {
    return "여자 아이돌이 춤을 춥니다.";
  }
}

const yuJin = new FemaleIdolModel("안유진", 2003, "보컬");
console.log(yuJin.sayHello());
console.log(yuJin.sayHello2());

const wonYoung = new IdolModel("장원영", 2002);
console.log(wonYoung.sayHello());
