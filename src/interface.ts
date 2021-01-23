//let add: (x:number, y:number) => number

// interface Add {
//   (x: number, y: number): number
// }
type Add = (x:number, y:number) => number
let add: Add = (a, b) => a+b;
console.log(add(1111,2));

interface Lib {
  (): void;
  version: string;
  doSomeString(): void;
}
let lib: Lib = (() => {}) as Lib;
lib.version = "1.0";
lib.doSomeString = () => {}