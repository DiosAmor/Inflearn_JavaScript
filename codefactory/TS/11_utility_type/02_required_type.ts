/**
 * Required Type
 */
interface Dog {
  name: string;
  age?: number;
  country?: string;
}

// Optional도 필수로 만들어짐.
const requiredDog: Required<Dog> = {
  name: "모찌",
  // age: 7,
  // country: "한국",
};
