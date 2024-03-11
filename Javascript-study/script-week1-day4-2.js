//i++
//i = i + 1
for(let i = 0; i < 10; i++) {
    console.log(i)
}

// 짝수.
for(let i = 0; i < 10; i++) {
    if(i % 2 == 0) {
        console.log(i)
    }
}

for(let i = 0; i < 10; i+=2) {
        console.log(i)   
}

// 구구단.
for(let i = 2; i <= 9; i++) {
    for(let j = 1; j <= 9; j++) {
        console.log(i + '*' + j + '=' + i*j)
    }
}

// while. 정확한 범위는 딱히 없는데 계속 반복 시키고 싶어.
let i = 1
while(i < 10) {
    console.log("while문 실행", i)
    i++;
}

while(buttonClick == true) {}


// 배열이랑 자주 쓰인다.
let fruit = ["banana", "apple", "grape", "mango"]
for(let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}