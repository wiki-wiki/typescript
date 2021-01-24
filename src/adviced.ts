interface Foo {
  bar: number
}
//let foo = {} as Foo;
let foo: Foo = {
  bar: 1
}
console.log(foo.bar);

let f = () => ({name: "Alice"})
let g = () => ({name: "Alice", location:"Beijing"})
f = g

//目标函数
function overload(a:number, b:number): number;
function overload(a:string, b:string): string;
//原函数
function overload(a:any, b:any): any {}