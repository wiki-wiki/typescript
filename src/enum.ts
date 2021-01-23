enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}

enum Message {
  Success = "成功",
  Fail = "失败"
}

enum Char {
  a,
  b = Char.a,
  c = Math.random(),
  d = 3+1,
  e = "123".length
}

const enum Month {
  Jan,
  Feb
}
let month = [Month.Jan, Month.Feb];

enum E { a, b}
enum F { a = 0, b = 0}
enum G { a = "apple", b = "banan"}

let e1 : E.a = 1;
let e2 : E.b = 2;
let e3 : E.a = 1;
e1 == e3
console.log(G.a)