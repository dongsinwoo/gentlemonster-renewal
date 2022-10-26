const footerBtn1 = document.querySelector(".footer-btn1");
const footerBtn2 = document.querySelector(".footer-btn2");
const footerBtn3 = document.querySelector(".footer-btn3");

const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");

const plus1 =document.querySelector(".plus1");
const plus2 =document.querySelector(".plus2");
const plus3 =document.querySelector(".plus3");

let clickFooterCount = 0;

const footerClick = (footerBtn, section, plus)=>{
  clickFooterCount+=1
  // console.log(clickFooterCount)
  if(clickFooterCount % 2 !== 0){

    section.style.display = "block"

    plus.style.transform = "rotate(45deg)"
    plus.style.transition = "all 0.35s"

    footerBtn.style.transform ="translateY(20%)"
    footerBtn.style.transition = "all 0.35s"

  }else if(clickFooterCount % 2 === 0){

    section.style.display = "none"

    plus.style.transform = "none"
    plus.style.transition = "all 0.35s"

    footerBtn.style.transform ="none"
    footerBtn.style.transition = "all 0.35s"

  }
};


footerBtn1.addEventListener("click",()=>{
  footerClick(footerBtn1, section1, plus1)
})
footerBtn2.addEventListener("click",()=>{
  footerClick(footerBtn2, section2, plus2)
})
footerBtn3.addEventListener("click",()=>{
  footerClick(footerBtn3, section3, plus3)
})