/**
 * Multi Dimension Array
 */

const numb2DArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

const str2DArr = [
  ["1", "2", "3"],
  ["4", "5", "6"],
];

const strAndNumbArr: (number | string)[][] = [
  [1, "2", 3],
  ["4", 5, "6"],
];

let strArrOrNumbArr: string[][] | number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

strArrOrNumbArr = [["1", "2", "3"]];

for (let arr of numb2DArr) {
  for (let item of arr) {
  }
}
