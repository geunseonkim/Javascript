// 1.
//let name = "nonna's fruit store"
//let fruits = ["banana", "apple", "mango"]
//let address = "Seoul"

// let store = {name: name, fruits: fruits, address:address}
// console.log(store);

//let store = {name, fruits, address};
//console.log(store);

// 2.
//console.log(`제 가게 이름은 ${name} 입니다. 위치는 ${address} 에 있습니다.`)

// 3.
//  function calculate(obj) {
//      return obj.a + obj.b + obj.c;
//  }
//  calculate({a: 1, b: 2, c: 3})

function calculate(obj) {
    let {a, b, c} = obj;
    return a + b + c;
}
calculate({a: 1, b: 2, c: 3})
console.log(calculate({a: 1, b: 2, c: 3}));

// 4.
let name = "noona store"
let fruits = ["banana", "apple", "mango"]
let address = {
    country: "Korea",
    city: "Seoul"
}

function findStore(obj) {
    let {name, address:{city}} = obj
    return name == "noona store" && city == "Seoul"
}
console.log(findStore({name, fruits, address}))

// 5.
function getNumber() {
    let array = [1, 2, 3, 4, 5, 6];
    let [first, ,third,forth] = array;
    return {first, third, forth}
}
console.log(getNumber())    // { first: 1, third: 3, forth: 4 }

// let array = [1, 2, 3, 4, 5, 6];
// let [first, ,third,forth] = array;
// console.log(first, third, forth)    // 1 3 4

// 6.
function getCalendar(first, ...rest) {
    return (
        first === "January" &&
        rest[0] === "February" &&
        rest[1] === "March" &&
        rest[2] === undefined
    );
}
console.log(getCalendar("January", "February", "March"));

// 7.
function getMinimum() {
    let a = [45, 23, 78]
    let b = [54, 11, 9]
    return Math.min(...a, ...b)
}
console.log(getMinimum())

// 8.
function sumNumber() {
    const sum = (a, b) => a + b;
    return sum(40, 10);
}

// 9.
function sumNumber() {
    let addNumber = (a) => (b) => (c) => a + b + c; // 화살표 함수는 function으로 선언된 것이 아니기 때문에 선언과 정의 후에 불러줘야 한다.
    return addNumber(1)(2)(3);
}
console.log(sumNumber());



// 3, 4, 5, 6. -> difficult