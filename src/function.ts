function add1 (x:number, y:number) {
  return x + y;
}
let add2: (x:number, y:number) => number
type add3 = (x:number, y:number) => number

let res = add1(1,20);
console.log(res);

let addTest: add3 = (x:number,y:number)=> x+y
console.log(addTest(1,2));