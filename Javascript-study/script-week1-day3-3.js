// 문제 1. -> 만약 숫자가 아니라 그냥 글자를 입력하면 어떡하지..? 의 풀이는 아래에!
let userNumber = 0

if (userNumber < 0) {
    console.log(userNumber + "는 음수입니다.")
} else if (userNumber > 0) {
    console.log(userNumber + "은 양수입니다.")
} else {
    console.log("이 숫자는 0입니다.")
}

// 문제 2.
let score = 99

if (90 <= score && score <= 100) {
    console.log("이 score "+ score +"점은 A등급입니다.")
} else if (80 <= score && score <= 89) {
    console.log("이 score "+ score +"점은 B등급입니다.")
} else if (70 <= score && score <= 79) {
    console.log("이 score "+ score +"점은 C등급입니다.")
} else if (60 <= score && score <= 69) {
    console.log("이 score "+ score +"점은 D등급입니다.")
} else if (59 >= score && score >= 0) {
    console.log("이 score "+ score +"점은 F등급입니다.")
} else {
    console.log("잘못된 score 입니다.")
}

// 문제 3.
let skills = ["HTML", "CSS", "Javascript", "React"]

if (skills.includes("Javascript") && skills.includes("React")) {
    console.log("합격!")
} else if (skills.includes("Javascript") || skills.includes("React")) {
    console.log("예비")
} else {
    console.log("탈락!")
}


// 문제 1의 다른 방법.
let number = parseInt(prompt("숫자를 입력해주세요."))   // parseInt; 글자를 숫자로 바꿔주는 함수.
if (isNaN(number)) {    // isNaN(=is Not A Number; 숫자인지 아닌지 검사 가능한 함수.)
    console.log("숫자가 아닙니다.")
    console.log("숫자를 입력해주세요.")
} else {
    if (number === 0) {
        console.log("0이 입력되었습니다.")
    } else if (number > 0) {
        console.log("양수 입니다.")
    } else {
        console.log("음수 입니다.")
    }
}

// 문제 2의 다른 방법. way1.
let score2 = 95

if ( score > 100) {
    console.log("0 ~ 100 사이의 값을 입력하시오.")
} else if (score >= 90) {
    console.log("A")
} else if (score >= 80) {
    console.log("B")
} else if (score >= 70) {
    console.log("C")
} else if (score >= 60) {
    console.log("D")
} else {
    console.log("F")
}

// 문제 2의 다른 방법. way2.
let score3 = prompt("점수를 입력하세요.")
// node.js는 javas 언어를 사용하지만 브라우저만의 고유 함수인 prompt()는 존재 x.
// 왜냐하면 node.js는 브라우저 환경에서 동작하지 않고, prompt()는 인터넷 브라우저에서만 구현된 기능이라 node.js 환경에서는 사용 x.
let grade = ""

switch (parseInt(score3 / 10)) {
    case 10:
        grade = "A"
        break;
    case 9:
        grade = "A"
        break;
    case 8:
        grade = "B"
        break;
    case 7:
        grade = "C"
        break;
    case 6:
        grade = "D"
        break;
    default:
        grade = "F"
}
    console.log(grade);
    document.getElementById("demo").innerHTML = grade; // javas를 이용해서 HTML 요소에 접근하는 방법 중 하나.


// 삼항 연사자를 사용한 문제 풀이 방법.
const n = prompt("숫자를 입력해주세요.")
console.log(number < 0 ? "음성입니다." : (number > 0 ? "양성입니다." : "0입니다."));

const score4 = prompt("점수를 입력해주세요.")
console.log(score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F");

const techStack = prompt("기술 스택을 ','로 구분하여 입력해주세요.").split(','); // split(); 문자열을 자를 때 많이 쓰는 함수.
let hasJavascript = techStack.includes("Javascript");
let hasReact = techStack.includes("React");
let result = hasJavascript && hasReact ? "합격" : (hasJavascript || hasReact ? "예비" : "탈락");
console.log(result)

// split() EX.
const subjects = "html,css,javas,react"
const result2 = subjects.split(",")
console.log("result",result) // result ['html', 'css', 'javas', 'react']