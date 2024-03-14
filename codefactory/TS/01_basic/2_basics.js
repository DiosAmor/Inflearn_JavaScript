"use strict";
/**
 * Types
 */
/**
 * JS
 * 7개의 primitive 타입
 */
const stringVar = "String";
const numberVar = 3;
// es2020이 되면서 추가
const bigIntVar = BigInt(999999);
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
/**
 * TS에만 존재하는 타입
 */
// any - 아무 타입이나 입력 할 수 있는 치트키같은 타입
let anyVar;
anyVar = 100;
anyVar = "diosamor";
anyVar = true;
// 아무 타입에나 넣을 수 있게 됨.
let testNumber = anyVar;
let testString = anyVar;
let testBolean = anyVar;
// unknown - 알 수 없는타입
// 다른 타입에 넣을 수는 없음.
let unknownType;
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
const koreanGirlGroup = ["아이브", "레드벨벳", "블랙핑크"];
const booleanList = [true, false, false, true];
