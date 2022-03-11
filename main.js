console.log("hello~~~")
console.log(console)

//자바스크립트 변수 : var. let. const
//1. var : 예전에 많이 사용됨
//2. let : 변수에 값의 재정의가 필요하다 판단될 때
//3. const : let 반대

//자바스크립트 데이터 타입 : string, number, boolean, null, undefined
const name = "aa";
const age = 1;
const is = true;
let aaaaa = null;
let b = undefined;

console.log(typeof name)
console.log("my name is " + name)
console.log(`my name ${name}`) //ES6 문법

const animal = "tiger";

console.log(animal.substring(0,2))

let fruits ="사과, 딸기, 포도, 참외";
fruits = fruits.split(",");
console.log(fruits)

//자바스트립트 배열 : 값들의 그룹
const animals =["a", "b", "v"];
animals[3] = "c"
animals.push("ccc") //맨 마지막에 추가
animals.unshift("nnn") //맨 앞에 추가
animals.pop() //맨 마지막 삭제

animals.indexOf("c") //몇 번째 요소인지 확인
Array.isArray() //배열인지를 확인
console.log(animals)

animals.splice(0, 2); //포함되는 인덱스 제외한 값 출력
animals.slice(0, 2); //반대

console.log(animals)
console.log(animals.indexOf("c"))

//자바스크립트 object : 속성, 값
const a = {
    name : 'vbb',
    age : 5,
    weight : 40,
    food : ["1", "2"],
    home : {
        location : 5,
        aaaqaaa : 2
    }
}

console.log(a)
console.log(a["name"])
console.log(a.weight)

//json : 데이터 주고 받을 때 사용
console.log(a)
const aJson = JSON.stringify(a);
const parseJson = JSON.parse(aJson)
console.log(aJson)
console.log(parseJson)

//자바스크립트 함수
const a1 = 3000;
const a2 = 2000;
const a3 = 5000;

const aaa = 1000;

console.log(a1 + aaa)

function show(price) {//파라미터, 인자
    console.log(price + aaa);
    return price + aaa;
}

show() //함수 실핼
show(a1);
show(a2);
show(a3);

const bb = show(a1);
console.log(bb)

//ES6버전
const showprice = (price) => {
    console.log(price + aaa)
}

showprice(a1)

c