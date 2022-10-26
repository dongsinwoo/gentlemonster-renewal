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
}

swp()