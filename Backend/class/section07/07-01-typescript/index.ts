// 타입 추론
let aaa = "안녕하세요";

// 타입 명시
let bbb: string = "반갑습니다";

// 타입 명시가 필요한 상황
let ccc: number | string = 1000;
ccc = "1000원";

// 배열타입
let fff: number[] = [1, 2, 3, 4, 5];
let ggg: string[] = ["철수", "영희"];
let hhh: (string | number)[] = ["철수", 10];

// 객체타입
interface IProfile {
  name: string;
  age: number | string;
  school: string;
  hobby?: string;
}

const profile: IProfile = {
  name: "철수",
  age: 8,
  school: "다람쥐초등학교",
};

// 함수타입
function add(num1: number, num2: number, unit: string): string {
  return num1 + num2 + unit;
}

const add2 = (num1: number, num2: number, unit: string): string => {
  return num1 + num2 + unit;
};

// any타입
let qqq: any = "철수";
