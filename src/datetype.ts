let str : string|null  = "123"


let arr1 : Array<number | string>  = [1,2,3,'6']

console.log(arr1)

let compute: (x: number, y: number) => number
compute = (a,b) => a + b

console.log(compute(1,2));

let obj: {x:number, y:number} = {x:1, y:2}
obj.x = 100;
console.log(obj);

str = null;

console.log(str);

interface StringArr {
  [index: number]: string
}
let chars: StringArr = ['A', 'B'];
console.log(chars);

interface Names {
  [x: string]: any;
  [z: number]: string
}

 
