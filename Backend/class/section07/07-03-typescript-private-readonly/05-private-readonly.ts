// class가 빡세진 느낌? c++이랑 비슷해진 듯 하다.

class Monster24 {
  // power = 10; => public, private, protected, readonly 중 1개라도 있으면 생략 가능

  constructor(private readonly power) {
    // this.power = power; => public, private, protected, readonly 중 1개라도 있으면 생략 가능
  }

  attack1 = () => {
    console.log("공격!");
    console.log("내 공격력은 " + this.power + "이야!!");
  };
}

class skyMonster24 extends Monster24 {
  attack2 = () => {
    console.log("공격!");
    console.log("내 공격력은 " + this.power + "이야!!");
  };
}

const myMonster24 = new skyMonster24(20);
myMonster24.attack1();
myMonster24.attack2();
console.log(myMonster24.power);
myMonster24.power = 10;
