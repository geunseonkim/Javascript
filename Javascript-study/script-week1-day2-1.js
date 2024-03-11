// let fruit = "apple"
// let fruit1 = "strawberry"
// let fruit2 = "mango"
// let fruit13 = "cherry"


let fruit = ["apple", "strawberry", "mango", "cherry"]
console.log(fruit)
console.log(fruit[0])

fruit[2] = "peach"
console.log(fruit)
fruit[1] = "grape"
console.log(fruit)

fruit.pop() // 마지막에 있는 거 빼 줘.
console.log(fruit)
fruit.push("pineapple") // 이거 추가해 줘.
console.log(fruit)

// 리스트에 있는 과일 백 개. 기억할 수 있어?
console.log(fruit.includes("watermelon")) // 너 이거 있어?
console.log(fruit.indexOf("pineapple"))// 이거 몇 번째 인덱스에 있는지 번호 찾아 줘.


// now is ... fruit = [ 'apple', 'grape', 'peach', 'pineapple' ]
/* 슬라이스는 기존의 배열을 건드리지 않고 똑 떼서 새롭게 만든 것.
   스플라이스는 기존의 오리지널 파일을 잘라버림. */

// 배열을 잘라내고 싶어.
console.log(fruit.slice(2))
console.log(fruit.slice(1))
// 시작점.
// 시작점부터 있는 값만 잘라서 보여 줘.

console.log(fruit.slice(1, 3))
// 시작점, 끝점. -> 보려는 영역을 설정한다고 생각.
// 시작점부터 끝점 전까지만 보여 줘. 인덱스 1,2 만 보여줌.
console.log(fruit.slice(0, -2))

fruit.slice(1, 3)
console.log(fruit) // 슬라이스는 기존의 배열을 건드리지 않아서 변화가 없다.

let extraFruit = fruit.slice(1, 3)
console.log(extraFruit) // 이 값을 프린트하고 싶으면 이 값을 담아줄 변수를 새로 만든다.
console.log("original fruit", fruit)


fruit.splice(1, 2)
console.log(fruit) // 스플라이스는 기존의 배열이 잘린다. 이후 영향을 받게 됨.
// 시작점, 갯수. -> 지우려는 영역을 선택한다고 생각.
// 시작점을 포함해서 아이템을 몇 개 제거하고 싶어.

/* 기존 배열을 바꿔야 하면 splice.
그냥 여기서 일부 아이템만 가져다가 새로운 아이템을 만들고 싶으면 slice. */

console.log(fruit.length)