/*common */
  // 버튼 호버 시 색 변하기
  let detail = document.querySelectorAll('.detail');
  
  for(let i=0; i<detail.length; i++) {
  detail[i].addEventListener('mouseenter',()=> {
    detail[i].classList.add('detail_hover');
  });
}
  for(let i=0; i<detail.length; i++) {
  detail[i].addEventListener('mouseleave',()=> {
    detail[i].classList.remove('detail_hover');
  });
}


/*main_1 배너*/
// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper_m1", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*main_2 우리술제품*/
// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*자세히보기 호버 시 사진bg & 버튼색 바꾸기 */
let ms2_detail = document.querySelectorAll('.ms2_detail');
let beverage_bg = document.querySelectorAll('.beverage_bg');
// console.log(ms2_detail);

  for(let i=0; i<ms2_detail.length; i++) {
    ms2_detail[i].addEventListener('mouseenter', ()=>{
      ms2_detail[i].classList.add('ms2_active');
      beverage_bg[i].style.opacity = "1";
    });
  }
  for(let i=0; i<ms2_detail.length; i++) {
    ms2_detail[i].addEventListener('mouseleave', ()=>{
      ms2_detail[i].classList.remove('ms2_active');
    });
    for(let j=0; j<beverage_bg.length; j++) {
      ms2_detail[i].addEventListener('mouseleave', ()=>{
        beverage_bg[i].style.opacity = "0.2";
      });
    }
  }
/* main_4 호버 시 백그라운드 이미지 확대 */
// let m4_detail = document.querySelectorAll('.m4_detail');
// let areum = document.querySelector('.areum');

// for(let i=0; i<m4_detail.length; i++) {
//   m4_detail[i].addEventListener('mouseenter', ()=>{
//     areum.classList.add('areum_active');
//   });
// }


/*main_5 오픈매장*/   //https://poiemaweb.com/css3-transition 참고해서 호버 해보기ㅜㅜ
// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: { //반응형 
    1000: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    750: {
      slidesPerView: 3,
      // slidesPerGroup: 3,
    },
    0: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  }
});


/*자세히보기 호버 시 플러스 사진 덮기 & 버튼색 바꾸기 */
let ms5_detail = document.querySelectorAll('.ms5_detail');
let s3 = document.querySelectorAll('.s3');
let s3_activeBox = document.querySelectorAll('.s3_activeBox');
//사진 호버 시 
  for(let i=0; i<s3.length; i++) {
    s3[i].addEventListener('mouseenter', ()=>{
      s3_activeBox[i].classList.add('s3_active');
      ms5_detail[i].classList.add('detail_hover');
    });
  }
  for(let i=0; i<s3.length; i++) {
    s3[i].addEventListener('mouseleave', ()=>{
      s3_activeBox[i].classList.remove('s3_active');
      ms5_detail[i].classList.remove('detail_hover');
    });
  }
//자세히보기 호버 시
for(let i=0; i<ms5_detail.length; i++) {
  ms5_detail[i].addEventListener('mouseenter', ()=>{
    s3_activeBox[i].classList.add('s3_active');
    ms5_detail[i].classList.add('detail_hover');
  });
}
for(let i=0; i<ms5_detail.length; i++) {
  ms5_detail[i].addEventListener('mouseleave', ()=>{
    s3_activeBox[i].classList.remove('s3_active');
    ms5_detail[i].classList.remove('detail_hover');
  });
}



/*main_7 공지사항*/
var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 4,
 spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: { //반응형 
    1000: {  //브라우저가 1000보다 클 때
      slidesPerView: 4,
    },
    750: {
      slidesPerView: 3,
    },
    0: {
      slidesPerView: 2,
    },
  }

});

//버튼 호버 시 버튼&이미지 바꾸기
let m7_detail = document.querySelectorAll('.m7_detail');
let noti_li = document.querySelectorAll('.noti_li');
let noti_box = document.querySelectorAll('.noti_box');

for(let i=0; i<noti_li.length; i++) {
  noti_li[i].addEventListener('mouseenter', ()=>{
    noti_li[i].classList.add('noti_active');
    m7_detail[i].classList.add('detail_hover');
    noti_box[i].classList.add('noti_img_hover');
  });
}
for(let i=0; i<noti_li.length; i++) {
  noti_li[i].addEventListener('mouseleave', ()=>{
    noti_li[i].classList.remove('noti_active');
    m7_detail[i].classList.remove('detail_hover');
    noti_box[i].classList.remove('noti_img_hover');
  });
}


