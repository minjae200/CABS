const circles = document.querySelectorAll('.traffic-circle');
let activeLight = 0;

setInterval(changeLight, 1000);

function changeLight() {
  circles[activeLight].className = 'traffic-circle';  
  activeLight++;
  
  if(activeLight > 2) {
    activeLight = 0;
  }
  
  const currentLight = circles[activeLight];
  currentLight.classList.add(currentLight.getAttribute('color'));
}