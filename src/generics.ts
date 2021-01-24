function log<T>(value:T): T {
  console.log(value);
  return value;
}
log<string []>(["A","B","C"]);
log(["A","B","C"]);

// type Log = <T>(vlaue: T) => T
// let myLog: Log = log
// console.log(myLog("A"));

//约束类型
interface Log<T> {
  (value:T): T
}
let myLog: Log<number> = log
myLog(1)