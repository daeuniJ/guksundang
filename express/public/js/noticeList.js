//총 게시물 개수 구하기
const table = document.getElementById('notiTable');
const tbody = table.tBodies[0].rows.length;
let result = document.getElementById('result');

result.innerText += `전체 게시글: ${tbody-1}`;


//최신순&과거순 구하기
let notiNew_or = document.querySelector('.notiNew_or');
let notiPast_or = document.querySelector('.notiPast_or');

notiNew_or.addEventListener('click', () => {
    
})