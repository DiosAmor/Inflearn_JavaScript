class Monster {
  power = 10;

  constructor(qqq) {
    this.power = qqq;
  }

  attack = () => {
    console.log("공격!");
    console.log("내 공격력은 " + this.power + "이야!!");
  };

  run = () => {
    console.log("도망가자!!");
  };
}

class skyMonster extends Monster {
  constructor(aaa) {
    super(aaa + 1);
  }
  run = () => {
    console.log("날라서 도망가자!!");
  };
}

class landMonster extends Monster {
  run = () => {
    console.log("뛰어서 도망가자!");
  };
}

const myMonster1 = new skyMonster(20);
myMonster1.attack();
myMonster1.run();

const myMonster2 = new landMonster(50);
myMonster2.attack();
myMonster2.run();
