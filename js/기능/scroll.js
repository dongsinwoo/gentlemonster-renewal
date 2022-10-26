
const headLogo = document.querySelector(".logo-svg");
const userMenu = document.querySelector(".user-menu");
const topBtn = document.querySelector(".top-btn");

const scroll = (e)=>{
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if(scrollTop>=0 && scrollTop<833){
    headLogo.style.fill="#fff";
    headLogo.style.transform = "scale(1)"
    userMenu.style.display ="flex";
    topBtn.style.display="none";
  }else if(scrollTop>833){
    headLogo.style.fill= "#343434";
    headLogo.style.transform = "scale(1.1) translateX(-5%)"
    userMenu.style.display = "none";
    topBtn.style.display= "block"
  }
}

const goTop = (e)=>{
  window.scrollTo({top: 0, behavior : "smooth" }); 
  e.preventDefault();
}

window.addEventListener("scroll",scroll);
topBtn.addEventListener("click",goTop);
scroll();