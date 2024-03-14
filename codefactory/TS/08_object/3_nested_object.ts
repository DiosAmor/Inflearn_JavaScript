/**
 * Nested Object
 */

type NestedPerson = {
  identity: {
    name: string;
    age: number;
  };
  nationality: string;
};

const codefactory: NestedPerson = {
  identity: {
    name: "코드팩토리",
    age: 32,
  },
  nationality: "한국인",
};

// Nesting 했을 때, 각각 type으로 만들어두면 유지 보수하기 편하다.
type TPerson = {
  identity: TPersonIdentity;
  nationality: string;
};

type TPersonIdentity = {
  name: string;
  age: number;
};

const iu: TPerson = {
  identity: {
    name: "아이유",
    age: 32,
  },
  nationality: "한국인",
};

interface IPerson {
  identity: IPersonIdentity;
  nationality: string;
}

interface IPersonIdentity {
  name: string;
  age: number;
}

const yuJin: IPerson = {
  identity: {
    name: "안유진",
    age: 22,
  },
  nationality: "한국인",
};
