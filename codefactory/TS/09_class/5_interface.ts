/**
 * Interface
 */
interface Animal {
  name: string;
  age: number;
  jump(): string;
}

// extends 상속과는 다르다.
class Dog implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  jump(): string {
    return `${this.name}이 점프를 합니다.`;
  }

  dance() {}
}

let ori: any = new Dog("오리", 3);

function instanceOfAnimal(object: any): object is Animal {
  return "jump" in object;
}

if (instanceOfAnimal(ori)) {
  ori;
}

/**
 * 다중 인터페이스 구현
 */
interface Pet {
  legsCount: number;
  bark(): void;
}

class Cat implements Animal, Pet {
  // Animal
  name: string;
  age: number;

  // Pet
  legsCount: number;

  constructor(name: string, age: number, legsCount: number) {
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }

  // Aniaml
  jump(): string {
    return `${this.name}이 점프를 합니다.`;
  }

  // Pet
  bark(): void {
    console.log("냐옹");
  }
}

type AnimalAndPet = Animal & Pet;

class Cat2 implements AnimalAndPet {
  // Animal
  name: string;
  age: number;

  // Pet
  legsCount: number;

  constructor(name: string, age: number, legsCount: number) {
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }

  // Aniaml
  jump(): string {
    return `${this.name}이 점프를 합니다.`;
  }

  // Pet
  bark(): void {
    console.log("냐옹");
  }
}

interface WrongInterface1 {
  name: string;
}

interface WrongInterface2 {
  name: number;
}

// name의 intersection이 never라서 불가능
// class Person implements WrongInterface1, WrongInterface2{
// name: number;
// name: string;
// }

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

interface IdolConstructor {
  // constructor는 new를 사용하기 때문에 new를 붙여줘야 한다.
  new (name: string, age: number): Idol;
}

function createIdol(constructor: IdolConstructor, name: string, age: number) {
  // return new Idol(name, age);
  return new constructor(name, age);
}

console.log(createIdol(Idol, "아이유", 32));
