let fruit = [ "apple", "grape", "peach", "pineapple" ]

fruit.slice(1, 3)
console.log(fruit)
// [ "apple", "grape", "peach", "pineapple" ]

console.log(fruit.slice(1, 3)) // slice 되는 부분을 보여 줘.
// [ "grape", "peach" ]

let extraFruit = fruit.slice(1, 3)
console.log(extraFruit)
// [ "grape", "peach" ]



let sport = [ "badminton", "basketball", "baseball", "soccer" ]

sport.splice(1, 3)
console.log(sport) // splice 하고 난 후의 array를 보여 줘.
// [ "badminton" ]

console.log(sport.splice(1, 3)) // splice 되는 부분을 보여 줘.
// [ "basketball", "baseball", "soccer" ]




//slice
// 시작점부터 끝점의 -1 부분까지 복사/크롭. original array 직접 영향 x.

//splice
// 시작점부터 갯수만큼 original array 제거.