let patient = {
    name : "jimin",
    age : 17,
    disease : "cold"
}

console.log(patient)
console.log(patient.name)
console.log(patient["name"])
patient.name = "jk"
patient["age"] = 25
console.log(patient)

let patientList = [{name: "jimin", age: 13}, {name: "jk", age: 25}, {name: "hope", age: 40}]

console.log(patientList)
console.log("첫 번째 환자는:", patientList[0])
console.log("첫 번째 환자의 나이는?", patientList[0].age)
console.log("두 번째 환자의 이름은?", patientList[1]["name"])