let a = 3;
console.log(a);
const c = (a) => {
  a = a + 3;
  return a;
};
console.log(a);
console.log(c(a));
