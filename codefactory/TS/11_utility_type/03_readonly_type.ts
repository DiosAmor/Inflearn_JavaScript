/**
 * Readonly Type
 */
interface Cat {
  name: string;
  age: number;
}

const nyaong: Cat = {
  name: "냐옹이",
  age: 8,
};

nyaong.name = "코드팩토리";

// readonly는 typescript에만 있는 개념
const bori: Readonly<Cat> = {
  name: "보리",
  age: 7,
};

// bori.name = '아이유';

// javascript에서는 freeze
Object.freeze(bori);
