//배너 검색창 >> 서브 검색창 띄우기 
const mainInput = document.getElementById("main-search");
const searchBox = document.getElementById("search-box");
const xBtn = document.getElementById("x-btn-box");


const fadeIn = () => {
  // main-search 애니메이션 재시작
  mainInput.style.setProperty("--ms", "");
  searchBox.style.setProperty("--in", "")
  setTimeout(()=>{
    mainInput.style.setProperty("--ms" ,"main-input 1000ms linear")
  })

  setTimeout(()=>{
    searchBox.style.display = "block"
    searchBox.style.setProperty("--in", " fadeIn 500ms linear forwards")
  },300);
}

const fadeOut = () =>{
  searchBox.style.display = "none"
}


mainInput.addEventListener("click", fadeIn);
xBtn.addEventListener("click", fadeOut);
window.addEventListener("scroll",fadeOut)


