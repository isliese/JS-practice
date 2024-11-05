// 자바스크립트는 HTML을  불러오는 것이다.
// JS 에서 htnl을 불러오는 것뿐만 아니라 변경할 수도 있다.


// html 은 정적 리소스 입니다. 사용자에게 표시할 화면을 html로 만들면 그걸로 변경할 수 없는 상태가 됩니다. 
// 그런데, 그런 결과 화면을 상황에 따라 변경하는게 필요해 졌고, 그걸 가능하게 하는게 javascript 인 겁니다.
const title = document.getElementById("title");

title.innerText = "Got you!";