//배너 검색창 >> 서브 검색창 띄우기 
const mainInput = document.getElementById("main-search");
const searchBox = document.getElementById("search-box");
const subInput = document.getElementById("sub-search")
const xBtn = document.getElementById("x-btn-box");

// 버튼 물결효과 js document
const viewBtn = document.getElementById("view-btn")
const payBtn = document.getElementById("pay-btn")

// 스크롤 이벤트 + 탑버튼 document
const headLogo = document.querySelector(".logo-svg");
const userMenu = document.querySelector(".user-menu");
const topBtn = document.querySelector(".top-btn");
const mTopBtn = document.querySelector(".m-top-btn");

// top store slide document
const topStore = document.querySelector(".top-store");
const topMeunUl = topStore.querySelector(".top-menu");
const itemLi = topMeunUl.querySelectorAll(".top-item");
const moveBtn = topStore.querySelector(".arrow");

// sunglasses 이미지 박스 document
const sunglassesItem1 = document.querySelector(".trans1");
const sunglassesItem2 = document.querySelector(".trans2");
const sunglassesItem3 = document.querySelector(".trans3");

// 모바일 햄버거 버튼 
const hamburger = document.querySelector(".m-hamburger");
const mNav = document.querySelector(".m-nav");
const hamSpan1 = document.querySelector(".span1");
const hamSpan2 = document.querySelector(".span2");
const hamSpan3 = document.querySelector(".span3");
const mLogo = document.querySelector(".m-logo-svg");

// 모바일 푸터 버튼
const footerBtn1 = document.querySelector(".footer-btn1");
const footerBtn2 = document.querySelector(".footer-btn2");
const footerBtn3 = document.querySelector(".footer-btn3");

const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");

const plus1 =document.querySelector(".plus1");
const plus2 =document.querySelector(".plus2");
const plus3 =document.querySelector(".plus3");

// 웹브라우져 위드값
const ww = document.documentElement.clientWidth;




// top store ul 계산 및 변수선언
// ul 넓이 계산해주기 
const liWidth = itemLi[0].clientWidth +18;
// 추후 변수로 바꿔주자!!
const topMeunUlWidth = liWidth * itemLi.length;
topMeunUl.style.width = `${topMeunUlWidth}px`;
// 리스너
let crrentIdx = 0 //슬라이드 번호
let translate = 0 //슬라이드 위치값

// 햄버거버튼 클릭카운트
let clickCount = 0;

// 모바일 푸터 카운트
let clickFooterCount = 0;


// 서브 메뉴 나오게하는 함수
const fadeIn = (e) => {
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
  e.preventDefault();
};

// 서브 메뉴 없애는 함수
const fadeOut = () =>{
  searchBox.style.display = "none"
  mainInput.value = "";
  subInput.value = "";
};

// value값 key up
const inputData = (e)=>{
  subInput.value = e.target.value
};

// 서브인풋 엔터누르면 새로고침
const reload = ()=>{
  location.reload();
};

// 스크롤 변환 함수
const scroll = (e)=>{
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const styelArea = document.querySelector(".style-area").offsetTop;
  
  // scroll시 서브서치박스 없애기
  fadeOut();
  if(scrollTop>=0 && scrollTop<styelArea){
    headLogo.style.fill="#fff";
    headLogo.style.transform = "scale(1)"
    userMenu.style.display ="flex";
    topBtn.style.display="none";
    hamSpan1.style.backgroundColor = "#fff"
    hamSpan2.style.backgroundColor = "#fff"
    hamSpan3.style.backgroundColor = "#fff"
    mLogo.style.fill = "#fff"

  }else if(scrollTop>styelArea){
    headLogo.style.fill= "#343434";
    headLogo.style.transform = "scale(1.1) translateX(-5%)"
    userMenu.style.display = "none";
    topBtn.style.display= "block"
    hamSpan1.style.backgroundColor = "#343434"
    hamSpan2.style.backgroundColor = "#343434"
    hamSpan3.style.backgroundColor = "#343434"
    mLogo.style.fill = "#343434"
  }
};

// top btn 함수 << 해결해야됨
const goTop = (e)=>{
  //  window.scrollTo({top: 0, behavior : "smooth" }); 
  const wy = window.scrollY;
  const dy = document.documentElement.scrollTop;
  const sy = window.pageYOffset;
  
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    window.scrollTo({top: 0, behavior:"smooth"});
  }else{
    if(ww > 500){
      if(wy !== 0 || dy !== 0 || sy !== 0 ){
        setTimeout(()=>{
            window.scrollTo(0, window.scrollY-50);
            goTop()
        }, 1)
      }
    }else if(ww<=500){
      window.scrollTo({top: 0, behavior:"smooth"});
    }
  }
};

// 자세히보기 물결효과 버튼
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
};
  
// 구매하기 물결효과 버튼  
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
};
  
// 스와이퍼 함수
function swp(){
    var mySwiper = new Swiper( '.swiper-left',{
      autoplay:{
        delay:3500,
        disableOnInteraction:false,
      },
      direction: 'vertical',
      slidesPerView: 1,
      slidesPerGroup:1,
      loop: true,
      allowTouchMove:false
    });
    
    var mySwiper = new Swiper( '.swiper-right',{
      autoplay:{
        delay:3200,
        disableOnInteraction:false
      },
      slidesPerView: 1,
      slidesPerGroup:1,
      loop: true,
      allowTouchMove:false
    });
};
  
// top store 함수
const moveSlide =(e)=>{
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
};

//sunglasses 함수선언
const magneticImg = (element)=>{
    if(ww <= 500){
      return false
    }else if(ww > 500){
      element.addEventListener("mousemove",e=>{
        const {offsetLeft, offsetTop, offsetWidth, offsetHeight} = element;
        // 레프트 탑값
        const left = e.pageX - offsetLeft;
        const top = e.pageY - offsetTop;
        // 센터값
        const centerX  = left - offsetWidth / 2 ;
        const centerY = top - offsetHeight / 2 ;
        // console.log(centerX,centerY,d);
        element.style.transform =`
          translate3d(${centerX/1.7}px,${centerY/2}px,0)
        `
      })
      element.addEventListener("mouseleave",()=>{
        element.style.transform =``
      });
    }
};

const mMagneticImg = (element)=>{
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    element.addEventListener("touchmove",e=>{
      const {offsetLeft, offsetTop, offsetWidth, offsetHeight} = element;
      // 레프트 탑값
      const left = e.pageX - offsetLeft;
      const top = e.pageY - offsetTop;
      // 센터값
      const centerX  = left - offsetWidth / 2 ;
      const centerY = top - offsetHeight / 2 ;
      // console.log(centerX,centerY,d);
      element.style.transform =`
        translate3d(${centerX/1.7}px,${centerY/2}px,0)
      `
    })
    element.addEventListener("touchend",()=>{
      element.style.transform =``
    });
  }else{
    return false
  }
};

  
// 햄버거 on함수
const hamburgerOn = (e)=>{
  clickCount += 1
  e.preventDefault()
  if(clickCount % 2 !==0){
    hamSpan1.style.transform = `rotate(45deg)`
    hamSpan1.style.top = "50%"
    hamSpan2.style.opacity = 0
    hamSpan3.style.transform = `rotate(-45deg)`
    hamSpan3.style.top = "50%"
    mNav.style.display= "flex"
  }else if(clickCount % 2 === 0){
    hamSpan1.style.transform = ``
    hamSpan1.style.top = ""
    hamSpan2.style.opacity = 1
    hamSpan3.style.transform = ``
    hamSpan3.style.top = ""
    mNav.style.display= "none"
  }
};

// m-footer 함수
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



// 서브메뉴 나타나고 없애는 이벤트
mainInput.addEventListener("click",fadeIn);
mainInput.addEventListener("keyup",inputData);
mainInput.addEventListener("change",reload);
subInput.addEventListener("change",reload);
xBtn.addEventListener("click",fadeOut);

// 스크롤 이벤트 + 탑버튼
window.addEventListener("scroll",scroll);
topBtn.addEventListener("click",goTop);
mTopBtn.addEventListener("click",goTop);
scroll();

// 버튼물결효과 이벤트
viewBtn.addEventListener("mouseover",click1);
payBtn.addEventListener("mouseover",click2);

// top store slide click 이벤트 선언
moveBtn.addEventListener("click",moveSlide);

// 햄버거버튼 나오고 없어지기
hamburger.addEventListener("click",hamburgerOn);

// 모바일 푸터 버튼 이벤트
footerBtn1.addEventListener("click",()=>{
  footerClick(footerBtn1, section1, plus1)
  if(clickFooterCount % 2 !==0){
    section2.style.display="none"
    section3.style.display="none"
    plus2.style.transform = "rotate(0)"
    plus3.style.transform = "rotate(0)"
    footerBtn2.style.transform ="none"
    footerBtn3.style.transform ="none"
  }else if(clickFooterCount ===0){
    clickFooterCount -= 1
  }
})
footerBtn2.addEventListener("click",()=>{
  footerClick(footerBtn2, section2, plus2)
  if(clickFooterCount % 2 !==0){
    section1.style.display="none"
    section3.style.display="none"
    plus1.style.transform = "rotate(0)"
    plus3.style.transform = "rotate(0)"
    footerBtn1.style.transform ="none"
    footerBtn3.style.transform ="none"
  }else if(clickFooterCount ===0){
    clickFooterCount -= 1
  }
})
footerBtn3.addEventListener("click",()=>{
  footerClick(footerBtn3, section3, plus3)
  if(clickFooterCount % 2 !==0){
    section1.style.display="none"
    section2.style.display="none"
    plus1.style.transform = "rotate(0)"
    plus2.style.transform = "rotate(0)"
    footerBtn1.style.transform ="none"
    footerBtn2.style.transform ="none"
  }else if(clickFooterCount ===0){
    clickFooterCount -= 1
  }
})


// 스와이퍼 함수선언
swp()

//sunglasses 함수선언 
magneticImg(sunglassesItem1);
magneticImg(sunglassesItem2);
magneticImg(sunglassesItem3);

// 모바일터치
mMagneticImg(sunglassesItem2);
mMagneticImg(sunglassesItem1);
mMagneticImg(sunglassesItem3);




