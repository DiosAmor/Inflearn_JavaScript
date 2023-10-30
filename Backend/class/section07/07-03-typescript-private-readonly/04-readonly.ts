// class가 빡세진 느낌? c++이랑 비슷해진 듯 하다.

class Monster23 {
  // power = 10; => public, private, protected, readonly 중 1개라도 있으면 생략 가능

  constructor(readonly power) {
    // this.power = power; => public, private, protected, readonly 중 1개라도 있으면 생략 가능
  }

  attack1 = () => {
    console.log("공격!");
    console.log("내 공격력은 " + this.power + "이야!!");
  };
}

class skyMonster23 extends Monster23 {
  attack2 = () => {
    console.log("공격!");
    console.log("내 공격력은 " + this.power + "이야!!");
  };
}

const myMonster23 = new skyMonster23(20);
myMonster23.attack1();
myMonster23.attack2();
console.log(myMonster23.power);
myMonster23.power = 10;
