/**
 * Abstract class
 * JS에는 원래 없는 개념.
 * 공유되는 class 만들 때 사용하기 좋음.
 */

abstract class ModelWithId {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

// const modelWithId = new ModelWithId(123);

class Product extends ModelWithId {}

const product = new Product(1);
product.id;

abstract class ModelWithAbstractMethod {
  abstract shout(name: string): string;
}

class Person extends ModelWithAbstractMethod {
  shout(name: string): string {
    return "소리질러~";
  }
}
