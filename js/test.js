console.log("Hello world")
let student_name = "Vyshu"
console.log("Student name is: "+ student_name)
let student_age = 19
let course_name = "Python Full Stack"
console.log("Student age is: " + student_age, "Course name is: "+ course_name)
let fee = 10000
let discount = 10
let discounted_fee = fee -(fee * discount / 100)
console.log("Discounted fee is: " + discounted_fee)

let age = 19
if(age>=19){
    console.log("Eligible for admission")
}
else{
    console.log("Not eligible for admission")
}
for(let i=1; i<=5; i++){
    console.log("Iteration number: " + i)
}
const pi = 3.14
console.log("Value of pi is:" + pi)
student = {
    name: "Vyshu",
    age= 19,
    course: "Python Full Stack",
    fee: 10000
}
console.log("Student details: " , student)

function greetStudent(name){
    console.log("Hello" + name + ", welcome to NRIIT Learning Management System")
}
greetStudent(student_name)