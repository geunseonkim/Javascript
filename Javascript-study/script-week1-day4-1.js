let menu = 1

if (menu == 1) {
    console.log("물건 사기")
} else if (menu == 2) {
    console.log("잔고 확인")
} else if (menu == 3) {
    console.log("히스토리 확인")
} else {
    console.log("홈으로 돌아가기")
}

// switch
switch (menu) {
    case 1: // 값이 딱 떨어지는 경우에만 쓸 수 있다.
        console.log("물건 사기")
        break;
    case 2:
        console.log("잔고 확인")
        break;
    case 3:
        console.log("히스토리 확인")
        break;
    default:
        console.log("홈으로 돌아가기")
}


if (menu <= 3) {
    console.log("범위 안의 숫자 입니다.")
} else {
    console.log("범위 밖의 숫자 입니다.")
}

// 삼항 연산식. (조건 ? true : false)
let range = menu <= 3 ? "범위 안의 숫자 입니다." : "범위 밖의 숫자 입니다."
console.log(range)