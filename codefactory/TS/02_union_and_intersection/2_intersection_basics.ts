/**
 * Intersection
 *
 * And, 각 집합을 합집합에서 전부 포함.
 */

interface Human {
  name: string;
  age: number;
}

interface Contacts {
  phone: string;
  address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
  name: "코드팩토리",
  age: 32,
  phone: "01012341234",
  address: "서울시",
};

// primitive type과 하면 never가 된다.
type NumberAndString = number & string;
