/**
 * Class Keyword
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayName() {
    return `안녕하세요. 저는 ${this.name} 입니다.\n출생연도는 ${this.year} 입니다.`;
  }
}

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);

console.log(yuJin.sayName());
