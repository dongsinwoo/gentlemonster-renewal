// top store slide

const topStore = document.querySelector(".top-store");
const topMeunUl = topStore.querySelector(".top-menu");
const itemLi = topMeunUl.querySelectorAll(".top-item");
const moveBtn = topStore.querySelector(".arrow");



// ul 넓이 계산해주기
const liWidth = itemLi[0].clientWidth +18;
// 추후 변수로 바꿔주자!!
const topMeunUlWidth = liWidth * itemLi.length;
topMeunUl.style.width = `${topMeunUlWidth}px`;

// 리스너
let crrentIdx = 0 //슬라이드 번호
let translate = 0 //슬라이드 위치값
moveBtn.addEventListener("click",moveSlide);

function moveSlide(e) {
  console.log(e.target)
  e.preventDefault();
  if(e.target.className === "right"){
    if(crrentIdx !== itemLi.length-7){
      translate -= liWidth;
      topMeunUl.style.transform = `translateX(${translate}px)`
      crrentIdx +=1;
    }
  }else if(e.target.className ==="left"){
    if(crrentIdx !== 0){
      translate += liWidth;
      topMeunUl.style.transform= `translateX(${translate}px)`;
      crrentIdx -=1;
    }
  } 
}




