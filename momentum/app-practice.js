// 자바스크립트는 HTML을  불러오는 것이다.

// alert("hi"); // function임 
// console.log(54545454);

// const는 상수임. 값을 바꿀 수 없음 (value 보호 가능)
// const a = 5;
// const b = 2;

// console.log('6+2');
// console.log("6*2");
// console.log("6/2");
// console.log("hello " + "Isla");

// // let은 상수가 아님. 값을 바꿀 수 없음
// const myName = "Isla";

// myName = "Charnan";
// console.log("your name is " + myName); 

// var는 let이나 const가 없었을 떄 자주 쓰던 거
// var는 내가 원할 때 어디서든 변수를 업데이트 할 수 있음

// undefined = 변수는 선언했지만 값을 할당하지는 않음
// null = 변수에 null(값이 없다)이 할당된다 즉, 정의됨
// False는 값이 존재하긴 함. (False란 값이 존재)

// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// // array 만들기
// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// console.log(daysOfWeek[0])

// // 배열에 day 하나 더 추가하기
// daysOfWeek.push("sun");
// console.log(daysOfWeek);

// 2.6 objects 
const playerName = "Isla";
const playerPoints = 1212212;
const playerHandsome = false;
const playerFat = "little bit";
// -> 모든 objects가 같은 player의 속성인데 이렇게 하면 비효율적임

// const players = ["Isla", 1212, fasle, "little bit"] // 이건 근데 뭐가 무슨 속성인지 알려주지 않음

// 그래서 이렇게 하는게 더 좋음
const player = {
    name: "Isla",
    points: 10,
    fat: true
};

console.log(player); // {name: 'Isla', points: 10, fat: true}
console.log(player.name); // Isla

// object에 요소를 추가하는 방법
player.lastName = "Kim";
console.log(player);

// Function
function sayHello() {
    console.log("Hello my name is C")
};

alert();
console.log();
sayHello();
sayHello();
sayHello();
sayHello();

let nameOfPerson = "Isla"

function sayHelloo(nameOfPerson) {
    console.log(nameOfPerson)
};

sayHelloo(nameOfPerson)

// null은 아예 '비어있음을 정의'해버리는것, undefinde는 변수에 값을 부여하지 않은 상태

const players = {
    name: "Isla",
    age: "19"
};

console.log(players);
players.name = "Chanran";


// 계산기 만들기 
const calculator = {
    add: function (a,b) { // 더하기는 ,로 표시
        console.log(a, b);
    },
    minus: function (a,b) {
        console.log(a-b);
    },
    multi: function (a, b) {
        console.log(a*b);
    },
    div: function(a,b) {
        console.log(a/b);
    },
    power: function (a,b) {
        console.log(a**b);
    }
 };

 calculator.add(5,2);
 calculator.minus(3,2);
 calculator.div(4,5);
 calculator.multi(6,7);
 calculator.power(9*2);

 // Conditionals
 const ageQuestion = prompt("How old are you"); // 파이썬 input()이랑 똑같음
 console.log(typeof age) // typeof를 하고, 한 칸 띄우고, variable을 적으면 그 변수의 데이터타입을 알 수 있음
 // input으로 받는건 무조건 string. 아무것도 안 적어도 string.
// NaN임 (Not a Number.)

 // type 변환 (parseInt 내장함수 사용)
parseInt("15")

// 데이터 타입 확인하는 내장 함수
console.log(isNaN(age));

// 조건문
const age = parseInt(prompt("How old are you?"))

console.log(isNaN(age));

if(isNaN(age)) {
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age");
}