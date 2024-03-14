/**
 * Property Check
 *
 * 초과 속성 검사
 */
type TName = {
  name: string;
};

type TAge = {
  age: number;
};

const iu = {
  name: "아이유",
  age: 30,
};

// 초과 속성은 리터럴로 입력될 때만 검사가 가능
// 아래와 같이 이미 만들어진 것들을 넣을 때는 어려움.
const testName: TName = iu;
console.log(testName);
const testAge: TAge = iu;
