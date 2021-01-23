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

}
//实现接口 autoInteface
class C implements AutoInteface {
  state  = 1 //添加属性
}

class Bus extends Auto implements AutoInteface {

}