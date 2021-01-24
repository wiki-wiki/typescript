interface Human {
  name: string;
  eat(): void;
}

//接口可以约束公有成员
class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  eat() {
    console.log("asian eat");
  }
  sleep() {}
}

interface Man extends Human {
  run(): void;
}

interface Child {
  cry(): void;
}

interface Boy extends Man,Child {}

let boy: Boy = {
  name: "",
  run() {},
  eat() {},
  cry() {}
}


class Auto {
  state = 1;
}

interface AutoInteface extends Auto {
  run(): void
}
//实现接口 autoInteface
class C implements AutoInteface {
  state  = 1 //添加属性
  run() {
    console.log("C run");
  }
}

class Bus extends Auto implements AutoInteface {
  run() {
    console.log("Bus run");
  }
}
let bus = new Bus();

console.log(bus.state);
console.log(bus.run());