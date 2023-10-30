// class가 빡세진 느낌? c++이랑 비슷해진 듯 하다.

class Monster22 {
  // power = 10; => public, private, protected, readonly 중 1개라도 있으면 생략 가능

  constructor(protected power) {
    // this.power = power; => public, private, protected, readonly 중 1개라도 있으면 생략 가능
  }

  attack1 = () => {
    console.log("공격!");
    console.log("내 공격력은 " + this.power + "이야!!");
  };
}

class skyMonster22 extends Monster22 {
  attack2 = () => {
    console.log("공격!");
    console.log("내 공격력은 " + this.power + "이야!!");
  };
}

const myMonster22 = new skyMonster22(20);
myMonster22.attack1();
myMonster22.attack2();
console.log(myMonster22.power);
myMonster22.power = 10;
