interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// C++ 템플릿 클래스 특수화와 비슷
// 1. Partial 타입
type aaa = Partial<IProfile>;

// 2. Required 타입
type bbb = Required<IProfile>;

// 3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입
type ddd = Omit<IProfile, "school">;

// 5. Record 타입
type eee = "철수" | "영희" | "훈이"; // Union 타입
let child1: eee = "철수"; // 철수, 영희, 훈이만 됨
let child2: string = "사과"; // string 다 됨

type fff = Record<eee, IProfile>; // eee 가 키고 IProfile이 각각 타입이 됨.

// 6. 객체의 key들로 Union 타입 만들기
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby"
let myprofile: ggg = "hobby";

// 7. type vs interface 차이 => interface는 선언병합 가능
interface IProfile {
  candy: number;
}

let profile: Partial<IProfile> = {
  candy: 10,
};
