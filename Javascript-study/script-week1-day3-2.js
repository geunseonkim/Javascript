if(false) {
    console.log("조건은 참입니다.")
} else {
    console.log("거짓입니다.")
}

let age = 18

if (age > 20) {
    console.log("운전이 가능합니다.")
} else if (age >= 18) {
    console.log("오토바이 운전만 가능합니다.")
} else {
    console.log("운전이 불가능합니다.")
}

// 범위가 작은 것부터 큰 순서대로.
if (age <= 18 && age < 20) {
    console.log("오토바이 운전만 가능합니다.")
} else if (age > 20) {
    console.log("운전이 가능합니다.")
}

// 조건문 안에 또 조건문이 있는 경우.

let licence = false

if (age > 20) {
    if (licence != true) {
        console.log("운전이 가능 합니다.")
    } else {
        console.log("면허를 따세요.")
    }
} else {
    console.log("운전이 불가능합니다.")
}

let a = 1
let b = "1"
console.log(a == b)
console.log(a === b)