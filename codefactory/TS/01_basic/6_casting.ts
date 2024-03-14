/**
 * Casting
 *
 * TS에서 Casting을 하면 JS에서는 적용이 안 된다.
 */

let codefactory = "code factory";
let testNumber = 3;

console.log(codefactory.toUpperCase());
// console.log(testNumber.toUpperCase());

/**
 * 이미 5라는 number를 넣었기 때문에
 * JS에서는 number로 돌아가고 있음
 * TS에서는 string으로 캐스팅하여 string으로 인식했다고 해도
 * 실제로는 number로 작동해서 에러가 남.
 */
let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase());
let stringVar = sampleNumber as string;

console.log(typeof (sampleNumber as string));

let number = 5;

console.log((number as any).toUpperCase());
