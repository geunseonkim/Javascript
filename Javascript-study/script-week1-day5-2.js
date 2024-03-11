/*
function greet() {
    console.log("\"안녕 내 이름은 제시카야.\"")
}
greet();
*/

/*
function greet(name1, name2) {
    console.log("\"안녕 내 이름은", name1+"야.\"")
    console.log("\"안녕 내 이름은", name2+"야.\"")
}
greet("에밀리", "할리");
*/

/*
function greet(name) {
    console.log("\"안녕 내 이름은", name+"야.\"")
    return name;
}
let result = greet("에밀리");
console.log("\"인사한 사람은", result+"입니다.\"")
*/

/*
function meetAt(year, month, date) {
    if ((year, month, date)) {
        console.log(year+"/"+month+"/"+date)
        return;
    } else if ((year, month)) {
        console.log(year+"년",month+"월")
        return;
    } else if (year) {
        console.log(year+"년")
        return;
    }
}
meetAt(2025);
meetAt(2025,3);
meetAt(2025,3, 9);
*/

/*
function findSmallestElement(
    numArr = [num1, num2, num3, num4, num5, num6]) {
    if (numArr.length != 0) {
        console.log("Max:", Math.max(...numArr),", Min:", Math.min(...numArr));
        return;
    } else {
        console.log("Nothing in Array: 0");
        return;
    }
}
findSmallestElement(numArr = [50, 10, 20, 30, 5, 90]);
findSmallestElement(numArr = []);
*/

function wallet(money) {
    for (i=100000; i >= 10**2; i/=10) {
        let a = parseInt(money/i)
        if ((1000 <= i && i < 10000)) {
            let b = parseInt(money/5000)
            console.log(5000, "x", b)
        } if ((10000 <= i && i < 100000)) {
            let c = parseInt(money/50000)
            console.log(50000, "x", c)
        }
        console.log(i, "x", a)
            for (j=1; j<2; j++) {
                money = money - (a*i)
            }
    }
}
wallet(542300)


/*
for (i=100000; i >= 10**2; i/=10) {
        let a = parseInt(money/i)
        console.log(i, "x", a)
            for (j=1; j<2; j++) {
                money = money - (a*i)
            }
}
*/
