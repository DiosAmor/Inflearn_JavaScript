/**
 * Class as Type and Value
 */
class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  bark() {
    return `${this.name}가 짖습니다`;
  }
}

let ori = new Dog("오리");
console.log(ori.bark());

// ori = '오리';

// 객체를 똑같은 형식으로 변경은 가능.
ori = {
  name: "별이",
  bark() {
    return `${this.name}가 짖습니다.`;
  },
};

console.log(ori);
