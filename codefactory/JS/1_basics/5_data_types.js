/**
 * 6 Primitive Type
 * 1) Number
 * 2) String
 * 3) Boolean
 * 4) undefined
 * 5) null
 * 6) Symbol
 *
 * 1 Object
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */

const age = 32;

console.log(typeof age);

const infinity = Infinity;

console.log(infinity);

/**
 * null 타입
 *
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할 때 사용 된다.
 * 놀랍게도 type이 object로 나오는건 버그이나, 초창기 버그라 고치지 않고 있음.
 */
let init = null;
console.log(init);
console.log(typeof init);

/**
 * Symbol 타입
 *
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용한다.
 */
const symbol1 = Symbol("1");
const symbol2 = Symbol("2");
console.log(symbol1 === symbol2);
