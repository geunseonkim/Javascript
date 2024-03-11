// 모던한 자바스크립트.

// 객체 초기화 방법
let name = "noona";
let age = 17;

//let person = {name:name, age:age}
let person = {name, age};
console.log(person);

let person2 = {nameValue:name, ageValue:age};
console.log(person2);

let bts = {group: "방탄소년단", num : 7};
console.log(bts);

//let group = bts.group;
//let num = bts.num;
let {group, num} = bts; // -> 객체의 키값과 동일하게 변수 이름이 만들어진다. group, num!
console.log(group, num);

// -> but 변수의 이름을 객체의 키값과 다르게 하고 싶다면 옛날 문법을 써야 한다.
//let groupValue = bts.group;
//let numValue = bts.num;
let {groupValue, numValue} = bts;
console.log(groupValue, numValue); // undefined undefined

let named = "noona";
let aged = 18;
console.log("제 이름은" + named, "입니다. 제 나이는" + aged + "입니다.");
console.log(`제 이름은 ${named}입니다. 제 나이는 ${aged}입니다`);

let array = [1, 2, 3];
//let a = array[0];
//let b = array[1];
//let c = array[2];
//let [a, b, c] = array;
//console.log(a, b, c);

let [a,...rest] = array;
console.log(a);
console.log(rest);
