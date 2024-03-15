/**
 * Parameter Decorator
 */
class Cat {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  dance(@LogParam adj: string) {
    console.log(`${this.name}가 ${adj} 춤을 춥니다.`);
  }
}

const cat = new Cat("냥이");
cat.dance("신나게");

// target은 - static method에 데코레이팅을 할 경우 생성자 함수
//          - instance method에 데코레이팅 할경우 인스턴스의 prototype
function LogParam(target: any, propertyKey: string, paramIndex: number) {
  console.log(target);
  console.log(`${paramIndex}번째 파라미터인 ${propertyKey}가 입력됐습니다.`);
}
