// # Union 타입 문법 (|)
function logMessage(value: string | number) {
  console.log(value);
}

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// 어떤 것이 들어올지 모르는 상황이기 때문에, 공통되는걸 추려야한다.
function askSomeone(someone: Developer | Person) {
  someone.name; // O
  someone.age; // X
}

// # Intersection 타입 문법 (&)
// 무엇이 들어와도 상관 없으니까 둘 다 된다.
// 뭔가 직관적으로 생각하는 것과는 다르게 해석해야한다.
function askSomeone2(someone: Developer & Person) {
  someone.name; // O
  someone.age; // O
}
