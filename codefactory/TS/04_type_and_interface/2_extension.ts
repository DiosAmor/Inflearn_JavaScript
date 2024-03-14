/**
 * Extension
 */

// Interface
interface Name {
  name: string;
}

interface Idol extends Name {
  age: number;
}

const idol: Idol = {
  name: "안유진",
  age: 23,
};

console.log(idol);

// Type
type Name2 = {
  name: string;
};

type Idol2 = Name2 & { age: number };

const idol2: Idol2 = {
  name: "아이유",
  age: 29,
};

console.log(idol2);

// Type & Interface

interface Idol3 extends Name2 {
  age: number;
}

type Idol4 = Name & { age: number };

/**
 * extending multiple
 */
// Type
type DogName = {
  name: string;
};

type DogAge = {
  age: number;
};

type DogBreed = {
  breed: string;
};

type Dog = DogName & DogAge & DogBreed;

// Interface
interface CatName {
  name: string;
}
interface CatAge {
  age: number;
}
interface Cat extends CatName, CatAge {
  breed: string;
}

/**
 * Overrding
 */
// Type
type THeight = {
  height: number;
};

type TRectangle = THeight & {
  height: string;
  width: number;
};

// type이 never가 되어버림.
// const rectangle: TRectangle = {
//     height:,
//     width: 100,
// }

type TWidth = {
  width: number | string;
};
type TRectangle2 = TWidth & {
  width: number;
  height: number;
};

// type이 number가 됨.
const rectangle: TRectangle2 = {
  height: 100,
  width: 200,
};

// Interface
interface IHeight {
  height: number;
}

// interface IRectangle extends IHeight{
//     height: string;
//     width: number;
// }

interface IWidth {
  width: number | string;
}

interface IRectangle extends IWidth {
  width: number;
  height: number;
}
