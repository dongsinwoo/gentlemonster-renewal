// 버튼 물결효과 js

const viewBtn = document.getElementById("view-btn")
const payBtn = document.getElementById("pay-btn")


const click1 = (e) => {
  // console.log(e.target);
  // 좌표랑 값 가져오기
  const {x, y, width, height} = viewBtn.getBoundingClientRect();
  // 피타고라스로 원의 최댓값 구하기
  const radius = Math.sqrt(width*width + height*height);
  viewBtn.style.setProperty("--diameter", radius *2 + "px");

  // 원의 생성위치 중심으로 오게하기
  const {clientX , clientY} = e;
  const left = (clientX - x - radius) / width * 100 + "%"
  const top = (clientY - y -radius) / height * 100 + "%"
  viewBtn.style.setProperty("--left",left);
  viewBtn.style.setProperty("--top",top);
  viewBtn.style.setProperty("--a","");

  // 셋타입아웃
  setTimeout(() => {
    viewBtn.style.setProperty("--a", "view-ripple 500ms linear");
  }, );
}


const click2 = (e) => {
  // 좌표랑 값 가져오기
  const {x, y, width, height} = payBtn.getBoundingClientRect();
  // 피타고라스로 원의 최댓값 구하기
  const radius = Math.sqrt(width*width + height*height);
  payBtn.style.setProperty("--diameter", radius *2 + "px");

  // 원의 생성위치 중심으로 오게하기
  const {clientX , clientY} = e;
  const left = (clientX - x - radius) / width * 100 + "%"
  const top = (clientY - y -radius) / height * 100 + "%"
  payBtn.style.setProperty("--left",left);
  payBtn.style.setProperty("--top",top);
  payBtn.style.setProperty("--b","");

  // 셋타입아웃
  setTimeout(() => {
    payBtn.style.setProperty("--b", "view-ripple 500ms linear");
  }, );
}

viewBtn.addEventListener("mouseover",click1);
payBtn.addEventListener("mouseover",click2);