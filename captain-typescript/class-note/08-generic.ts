function logText<T>(text: T): T {
  console.log(text);
  return text;
}
logText<string>("하이");

// 유니온 타입과 다르게 return 값도 정해줄 수 있다는게 generic 타입은 파워풀하다.

interface Dropdown<T> {
  value: T;
  selected: boolean;
}
const test: Dropdown<number> = { value: 10, selected: false };

// 제너릭 타입 제한
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  return text;
}

logTextLength<string>(["hi", "abc"]);

// 제너릭 타입 제한 2
interface LengthType {
  length: number;
}
function logTextLength2<T extends LengthType>(text: T[]): T[] {
  console.log(text.length);
  return text;
}

logTextLength2<string>(["hi", "abc"]);

// 제너릭 타입 제한 3 - keyof: shoppingitem 중 하나가 될 것이다.
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption(10);
let a = getShoppingItemOption("stock");
