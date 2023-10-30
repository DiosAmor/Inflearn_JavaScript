// class가 빡세진 느낌? c++이랑 비슷해진 듯 하다.

class Monster20 {
  // power = 10; => public, private, protected, readonly 중 1개라도 있으면 생략 가능

  constructor(public power) {
    // this.power = power; => public, private, protected, readonly 중 1개라도 있으면 생략 가능
  }

  attack1 = () => {
    console.log("공격!");
    console.log("내 공격력은 " + this.power + "이야!!");
  };
}

class skyMonster20 extends Monster20 {
  attack2 = () => {
    console.log("공격!");
    console.log("내 공격력은 " + this.power + "이야!!");
  };
}

const myMonster20 = new skyMonster20(20);
myMonster20.attack1();
myMonster20.attack2();
console.log(myMonster20.power);
myMonster20.power = 10;
