/**
 * Inheritance
 */
class Parent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  dance() {
    console.log(`parent: ${this.name}이 춤을 춥니다.`);
  }
}

class Child extends Parent {
  age: number;

  constructor(name: string, age: number) {
    super(name);

    this.age = age;
  }

  sing() {
    console.log(`child: ${this.name}이 노래를 부릅니다.`);
  }
}

const codefactory = new Parent("코드팩토리");
const ahri = new Child("아리", 12);

codefactory.dance();
ahri.dance();
ahri.sing();

let person: Parent;
person = codefactory;
person = ahri;

let person2: Child;
person2 = ahri;
// person2 = codefactory;

/**
 * optional property를 유의하자
 * typescript는 다른 oop와 다르게 정말 type만 보기 때문에 조심.
 */

class Child2 extends Parent {
  age?: number;

  constructor(name: string, age?: number) {
    super(name);
    this.age = age;
  }
}

const cf2 = new Parent("코드팩토리");
const ahri2 = new Child2("아리", 20);

let child: Child2;
child = ahri2;

child = cf2;
