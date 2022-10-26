
function magneticImg(element){

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

const sunglassesItem1 = document.querySelector(".trans1");
const sunglassesItem2 = document.querySelector(".trans2");
const sunglassesItem3 = document.querySelector(".trans3");

magneticImg(sunglassesItem1);
magneticImg(sunglassesItem2);
magneticImg(sunglassesItem3);
