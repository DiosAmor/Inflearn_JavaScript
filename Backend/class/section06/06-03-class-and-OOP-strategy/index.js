class skyComponent {
  run = () => {
    console.log("날라서 도망가자!");
  };
}

class landComponent {
  run = () => {
    console.log("뛰어서 도망가자!");
  };
}

class Monster {
  power = 10;
  component;

  constructor(qqq) {
    this.component = qqq;
  }

  attack = () => {
    console.log("공격!");
    console.log("내 공격력은 " + this.power + "이야!!");
  };

  run = () => {
    this.component.run();
  };
}

const myMonster1 = new Monster(new skyComponent());
myMonster1.attack();
myMonster1.run();

const myMonster2 = new Monster(new landComponent());
myMonster2.attack();
myMonster2.run();
