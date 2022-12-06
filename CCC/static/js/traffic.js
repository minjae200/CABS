const circles = document.querySelectorAll('.circle');
let activeLight = 0;

setInterval(changeLight, 1000);

function changeLight() {
//   1. remove init color
  circles[activeLight].className = 'circle';  
  activeLight++;
  
  if(activeLight > 2) {
    activeLight = 0;
  }
  
  const currentLight = circles[activeLight];
  currentLight.classList.add(currentLight.getAttribute('color'));
  //getAttribute로 사용자 정의 속성값을 가져올 수 있음
}