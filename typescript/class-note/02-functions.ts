function sum(a: number, b: number): number {
  return a + b;
}
sum(10, 20);

// 함수 optional parameter
function printText(text: string, type?: string) {
  console.log(text);
}
printText("hi");
