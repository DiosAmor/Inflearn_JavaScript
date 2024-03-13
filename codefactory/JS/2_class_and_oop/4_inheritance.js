/**
 * Inheritance
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class FemaleIdolModel extends IdolModel {
  dance() {
    return "여자 아이돌이 춤을 춥니다.";
  }
}

class MaleIdolModel extends IdolModel {
  sing() {
    return "남자 아이돌이 노래를 부릅니다.";
  }
}

const yuJin = new FemaleIdolModel();
