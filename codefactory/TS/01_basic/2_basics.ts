/**
 * Types
 */

/**
 * JS
 * 7개의 primitive 타입
 */

const stringVar: string = "String";
const numberVar: number = 3;
// es2020이 되면서 추가
const bigIntVar: bigint = BigInt(999999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS에만 존재하는 타입
 */
// any - 아무 타입이나 입력 할 수 있는 치트키같은 타입
let anyVar: any;
anyVar = 100;
anyVar = "diosamor";
anyVar = true;

// 아무 타입에나 넣을 수 있게 됨.
let testNumber: number = anyVar;
let testString: string = anyVar;
let testBolean: boolean = anyVar;

// unknown - 알 수 없는타입
// 다른 타입에 넣을 수는 없음.
let unknownType: unknown;
unknownType = 100;
unknownType = "diosamor";
unknownType = true;

// never - 어떤 타입도 저장되거나 반환되지 않을 때 사용하는 타입
// 이걸 왜 쓸까?...
// let neverType: never = null;
// let neverType: never = undefined;
// let neverType: never = "test";

/**
 * 리스트 타입
 */
const koreanGirlGroup: string[] = ["아이브", "레드벨벳", "블랙핑크"];
const booleanList: boolean[] = [true, false, false, true];
