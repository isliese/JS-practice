// 자바스크립트는 HTML을  불러오는 것이다.
// JS 에서 htnl을 불러오는 것뿐만 아니라 변경할 수도 있다.

// html 은 정적 리소스 입니다. 사용자에게 표시할 화면을 html로 만들면 그걸로 변경할 수 없는 상태가 됩니다. 
// 그런데, 그런 결과 화면을 상황에 따라 변경하는게 필요해 졌고, 그걸 가능하게 하는게 javascript 인 겁니다.
//const title = document.getElementById("title"); // 'title'이란 id를 가진 element의 속성 변경
// title.innerText = "Got you!";
// console.log(title.className)
// 만약 html에서 정의된 id가 JS에서 찾으려고 하는 id와 같지 않다면 검색할 수 없다. 


// 어떻게 JS에서 HTML의 요소를 검색하는지 
// const title = document.getElementsByTagName("h1");
//const title = document.querySelector(".hello h1"); // querySelector에는 hello가 class name이라는 것과 그 안의 h1을 명시해야 한다. 

//const title = document.querySelector('#hello') // 아래와 같은 기능을 함 (여기서는 CSS Selecter를 가져오는 거니까 #를 붙여서 뭘 검색하려고 하는지 알려줘야함)
//const title = document.getElementById("hello")

// console.log(title);

// class hello를 가진 div 내부의 first-child인 h1을 찾아오는 것
const title = document.querySelector("div.hello:first-child h1");
console.dir(title);

// title.style.color = "blue";

// 이벤트 리스너 함수
// function handleTitleClick() {
//     console.log("Title was clicked!")
// };

// title.addEventListener("click", handleTitleClick); // 이벤트가 발생하면 실행할 함수를 넘겨줄 수 있음


function handleTitleClick() {
    title.style.color = "blue"
}

title.addEventListener("click", handleTitleClick);