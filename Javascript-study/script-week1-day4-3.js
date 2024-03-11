// 문제 1.
let sum = 0;
console.log("과정 :")
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
    console.log(sum)
}
console.log()
console.log("결과 :")
console.log("1부터 100까지 더한 값 = " + sum)

// 문제 2.
//method 1
for (let i = 1; i <= 100; i+=2) {
    console.log(i)
}

//method 2
for (let i = 1; i <= 100; i++) {
    if(i % 2 == 1) {
        console.log(i)
    }
}

// 문제 3. -> 오류.
let count = 0;
let countAdd = 0;

for (let i = 1; i <= 50; i++) {
    if(i % 3 == 0) {
        console.log("짝!")
        count++
        continue;
    }
    console.log(i)
}
console.log()
console.log("손바닥을 " + count + countAdd + "번 치셨습니다.")

// 문제 3. -> 1부터 50까지 369 결과를 프린트 하자.
for(let i = 1; i <= 50; i++) {
    let stringValue = i.toString() // toString(): 함수; i 라는 숫자를 문자열로 바꾸곘다.
    let result = ""
    console.log(result)
    for(let j = 0; j < stringValue.length; j++) {
        if (stringValue[j] === "3" || stringValue[j] === "6" || stringValue[j] === "9") {
           result += "짝" //(result = result + "짝")
        }
    }
    console.log(result.length > 0 ? result : i)
}

// 문제 4.
let number = 95;
let isPrime = true;

if (number === 1) {
    isPrime = false
} else {
    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i == 0) {
            isPrime = false
        }
    }
}
console.log(isPrime)

// 추가 문제. (문제 2의 다른 방법.)
let x = 0;
while(x <= 100) {
    odd = (x % 2 == 1) ? console.log(x) : null;
    x++;
}