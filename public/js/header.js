/* nav */
let gnb = document.querySelector('#gnb');
// let gnb_bg = document.querySelector('.gnb_bg');
let gnb_bg = document.querySelector('#gnb_bg');
let lnb = document.querySelectorAll('.lnb');


//lnb보이게 하기, nav하단 선 긋기
// gnb.addEventListener('mouseenter',()=>{
//   gnb_bg.classList.add('gnb_bg');
//   for(i=0; i<lnb.length; i++) {
//     lnb[i].style.height = '298px';
//   }

// })
// gnb.addEventListener('mouseleave',()=>{
//   gnb_bg.classList.remove('gnb_bg');
//   for(i=0; i<lnb.length; i++) {
//     lnb[i].style.height = '0px';
//   }
// })
gnb.addEventListener('mouseenter',()=>{
  gnb_bg.style.height = '298px';
  gnb_bg.style.borderTop = '1px solid #F4F4F4';

  for(i=0; i<lnb.length; i++) {
    lnb[i].style.height = '298px';

  }
})
gnb.addEventListener('mouseleave',()=>{
  gnb_bg.style.height = '0px';
  gnb_bg.style.borderTop = 'none';
  for(i=0; i<lnb.length; i++) {
    lnb[i].style.height = '0px';
  }
})


// 모바일btn 클릭 시 세부메뉴 나오기
let mobileBtn = document.querySelector('.mobileBtn');
let mobileMenu = document.querySelector('#gnb>ul');
//클릭시 햄버거 버튼 모션 + 모바일 네브 
let hamburger = document.querySelector('.hamburger');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');

let m_navManu = document.querySelector('.m_navManu');



$(document).ready(function(){
  $(".hamburger").click(function(){
    line1.classList.toggle("active");
    line2.classList.toggle("active");
    line3.classList.toggle("active");
    m_navManu.classList.toggle("active");
  });
});


//모바일 네브 아코디언
let m_navTitle = document.querySelectorAll('.m_navTitle');
let m_lnb = document.querySelectorAll('.m_lnb');

for(let i=0; i<m_navTitle.length; i++) {
  m_navTitle[i].addEventListener('click',()=> {
    m_navTitle[i].classList.toggle('mNav_active');
    let m_lnb = m_navTitle[i].nextElementSibling;
    if(m_lnb.style.maxHeight){
      m_lnb.style.maxHeight = null;
    } else {
      let act = document.querySelectorAll('.m_navTitle.mNav_active');
      for(let j=0; j<act.length; j++){
        act[j].classList.remove('mNav_active');
        act[j].nextElementSibling.style.maxHeight = null;
      }
      m_navTitle[i].classList.add('mNav_active');
      m_lnb.style.maxHeight = '500px';
    }
  });
}



// m_lnb[i].classList.toggle('m_lnb_active');
