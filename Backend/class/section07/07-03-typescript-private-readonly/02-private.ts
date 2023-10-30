// class가 빡세진 느낌? c++이랑 비슷해진 듯 하다.

class Monster21 {
  // power = 10; => public, private, protected, readonly 중 1개라도 있으면 생략 가능

  constructor(private power) {
    // this.power = power; => public, private, protected, readonly 중 1개라도 있으면 생략 가능
  }

  attack1 = () => {
    console.log("공격!");
    console.log("내 공격력은 " + this.power + "이야!!");
  };
}

class skyMonster21 extends Monster21 {
  attack2 = () => {
    console.log("공격!");
    console.log("내 공격력은 " + this.power + "이야!!");
  };
}

const myMonster21 = new skyMonster21(20);
myMonster21.attack1();
myMonster21.attack2();
console.log(myMonster21.power);
myMonster21.power = 10;
