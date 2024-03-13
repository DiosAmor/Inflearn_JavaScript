/**
 * Getter and Setter
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }

  set name(name) {
    this.name = name;
  }
}

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear);

yuJin.name = "장원영";
console.log(yuJin.name);

class IdolModel2 {
  #name;
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.name = name;
  }
}

const yuJin2 = new IdolModel2("안유진", 2003);
console.log(yuJin2.name);
