let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein"
];

/* warm up
for(i = 0; i <= names.length; i++) {
    console.log(names[i]);
}
function printName(x) {
    console.log(x);
}
names.forEach((x) => {console.log(x)}) // 문자열로 출력. 반환값이 없다.
*/


/* map
1.
let data = names.map(function(x) {  // 배열로 출력. 반환값을 배열에 담아 반환.
    return x.toUpperCase();
})
console.log(data);

2.
let data2 = names.map(function(x) {
    return x.split(" ")[0];
})
console.log(data2);

3.
let data3 = names.map(function(x) {
    let splitName = x.split(" ");
    let initial = "";
    splitName.forEach((y) => (initial += y[0]));
    return initial;
})
console.log(data3);
*/


/* filter
1. 
let data4 = names.filter(function(x) {
    return x.includes("a");
})
console.log(data4);

2. 이거 예전 문법으로 어케 풀지ㅣㅣ
let data5 = names.filter(function(x) {
    let splitName = x.split("");
    //console.log(splitName);
    return splitName.some((y, i) => y == splitName[i + 1]);
})
console.log(data5);
*/



/* some
1. 
console.log(names.some(function(x) {return x.length>= 20;}));

2.
let data6 = names.some(function(x) {
    let splitName = x.split(" ");
    splitName.pop();
    return splitName.some(function(y) {return y.toLocaleLowerCase().includes("p")})
})
console.log(data6);
*/

/* every
1.
console.log(names.every(function(x) {return x.length >= 20;}));

2.
console.log(names.every(function (x) {return x.includes("a");}));
*/


/* find
1.
console.log(names.find(function(x) {return x.length >= 20;}));
//console.log(names.find(x => {x.length >= 20})); -> (x)
//console.log(names.find(x => x.length >= 20)); -> (o) simple.

2.
console.log(names.find(function(x) {
    let splitName = x.split(" ");
    return splitName.find(function(y) {return y.length >= 3});
}))
//console.log(names.find(x => x.split(" ").length >= 3)); -> simple.
*/


/* findIndex
1.
console.log(names.findIndex(function(x) {return x.length >= 20;}));
//console.log(names.findIndex(x => x.length >= 20)); -> simple.

2. 왜 -1 나옴??!@?!?!
console.log(names.findIndex(function(x) {
    let splitName = x.split(" ");
    return splitName.findIndex(function(y) {return y.length >= 3});
})) // -1
console.log(names.findIndex(x => x.split(" ").length >= 3)); // 0 -> simple.
*/