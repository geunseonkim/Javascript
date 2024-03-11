function makeBurger(type, size, number) {
    console.log("매개변수 값은? " + type)
    console.log("빵")

    if(number < 1) {
        return "없습니다." // return을 만나는 순간 바로 그 자리에서 종료.
    }

    if (type == "불고기") {
        console.log("패티")
    } else if (type == "새우") {
        console.log("새우")
    }
    console.log("토마토")
    console.log("양상추")
    console.log("빵")

    console.log(type,"버거",size, "사이즈",number, "개 준비 완료")

    return "완료 되었습니다."
}

function serveCoke() {
    console.log("얼음 컵")
    console.log("얼음")
    console.log("콜라")
}

function serveFries() {
    console.log("프라이 박스")
    console.log("프라이")
}

makeBurger()

makeBurger("새우", "L", 3) // 매개변수.

let result = makeBurger("불고기", "M", 5)
console.log("주문이", result)

let result2 = makeBurger("불고기", "M", 0)
console.log("주문이", result2)


//1. 매개변수가 필요한 상황. (optional)
//2. return이 필요한 상황. (optional)


function makeSet() {
    makeBurger("새우", "M", 1)
    serveCoke()
    serveFries()
}

makeSet()