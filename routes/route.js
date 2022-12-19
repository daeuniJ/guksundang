const express = require('express');
const router =  express.Router();
const path = require('path');
const db = require('./../db.js');
const multer  = require('multer');
const html = `<!doctype html>
  <html>
  <head>
  <title>node HTML</title>
  </head>
  <body>
  <h1>hello</h1>
  <form action='/name' method='POST'>
  <input type='text' name='name' placeholder='이름 작성하기'>
  <button>확인</button>
  </form>
  </body>
  </html>
`;
// router.get('/', function (req, res) {
//   // Cookies that have not been signed
//   console.log('Cookies: ', req.cookies)
//   // Cookies that have been signed
//   console.log('Signed Cookies: ', req.signedCookies)
//   res.cookie('cookieKey','cookieValue',{ maxAge:600000, httpOnly: true });
//   res.status(200).send('test');
//   // maxAge - 쿠키의 수명을 밀리초로 나타냄
//   // expire - 만료일자를 GMT방식의 시간으로
//   // path - 해당 다랙토리와 하위 디렉토리에서만 경로가 활성화 됨
//   // domain - 도메인 명
//   // rescure - 웹브라우저와 웹서버가 https로 통신하는 경우에만 쿠키를 서버로 전송한다. https-보안을 위해 사용(s는 secure의 약자)
//   // httpOnly - 웹서버를 통해서만 쿠키에 접근 가능. 자바스크립트로 쿠키에 접속을 방지
//   // signed - 쿠키의 암호화를 결정
// });


router.get('/', (req, res) => {
  //필요한 데이터 입력 칸
  //res.send(html);
  res.render('main');
});
router.route('/name').post((req, res) => {  //chaining한다고도 함.
  let paramname = req.body.name;
  //res.send는 res.writeHead(), res.write(), res.end()를 한 번에 해결
  //res.send는 한 번만 사용 가능함. 여러 번 사용 불가능. 
  //res.send는 두 번 이상 사용해도 출력되지 않고 무시해 버림
    res.send(`${paramname}님 반갑습니다.`);
    res.send('<br>안녕하세요');
  // res.writeHead(200, { 'content-type':'text/html;charset=utf-8' })
  // res.write('안녕하세요');
  // res.write(`${paramname}님 반갑습니다.`);
  // res.end();
});
// router.get('/sub1', (req, res) => {
//   res.sendFile(path.join(__dirname,'../','views','sub1.html'));
// });

//페이지 연결

//회원가입
router.get('/join',(req, res) => {
  res.render('join');
});
router.post('/writejoin',(req, res) => {
  let param2 = JSON.parse(JSON.stringify(req.body));
  let name = param2['name'];
  let mail = param2['mail'];
  let num = param2['num'];
  let id = param2['id'];
  let pwd = param2['pwd'];
  let pwd2 = param2['pwd2'];
  let p_num = param2['p_num'];
  let h_add = param2['h_add'];
  console.log(id);
  console.log(name);
  console.log(mail);
  console.log(num);
  console.log(pwd);
  console.log(pwd2);
  console.log(p_num);
  console.log(h_add);

  db.insertJoin(id, pwd, mail, name, num, p_num, h_add, () => {
    res.redirect('/');
  })
})

//로그인
router.get('/log_in',(req, res) => {
  res.render('log_in');
});
router.post('/logInE', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let id = param['id'];
  let pwd = param['pwd'];
  console.log(id);
  console.log(pwd);

  db.logInCheck(id, pwd, (results) => {
    if(results.length>0) {
      res.redirect('/');
    } else {
      res.send(`<script>alert("로그인 정보가 일치하지 않습니다.");
      document.location.href="/log_in"</script>`)
    }
  })
})




// 공지사항 시작
router.get('/noticeList',(req, res) => {
  db.getNoti((rows)=>{
    res.render('noticeList',{rows:rows});
  })
});

//작성페이지
router.get('/write',(req, res) => {
  res.render('write');
});


//작성페이지 액션
router.post('/newWrite',(req, res) => {
  let param3 = JSON.parse(JSON.stringify(req.body));
  let name = param3['name'];
  let mail = param3['mail'];
  let password = param3['password'];
  let attachment = param3['attachment'];
  let title = param3['title'];
  let content = param3['content'];
  let No = param3['No'];
  db.insertNoti(content, name, title, password, ()=>{
    res.redirect('/noticeList');
  })
  // console.log(name);
  // console.log(email);
  // console.log(date);
  // console.log(attachment);
  // console.log(title);
  // res.render('newWrite.ejs',{'data' : param3});
});

//작성 뷰어 페이지
router.get('/newWritePage',(req, res) => {
  let No = req.query.No;
  console.log(No);

  db.getNotiByid(No, (row)=>{
  res.render('newWrite', {row:row[0]});
  })
});

//공지사항 삭제
router.get('/deleteN', (req, res) => {
  let No = req.query.No;
  console.log(No);

  db.deleteNByid(No,() => {
    res.redirect('/noticeList')
  })
})

//수정페이지
router.get('/update',(req, res) => {
  res.render('update');
});

router.get('/updates', (req, res) => {
  let No = req.query.No;
  console.log(No);

  db.getNotiByid(No, (row) => {
    res.render('update',{ row:row[0] })
  })
})

router.post('/updates',(req, res)=>{
  let param = JSON.parse(JSON.stringify(req.body));
  let No = param['No'];
  let name = param['name'];
  let password = param['password'];
  let title = param['title'];
  let content = param['content'];
  db.updateList(No,name,title,content,password, ()=>{
    res.redirect('/noticeList');
  })
})


// 공지사항 끝

router.get('/brand_intro',(req, res) => {
  res.render('brand_intro');
});





//multer
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'public/uploads/'); //폴더에 저장공간을 만들어 준 것
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); //파일의 확장자명을 뽑아내는 것
      done(null, path.basename(file.originalname, ext)+ Date.now() + ext) //파일명+날짜+확장자명을 뽑아내는 것
    }
  }),
  limits : {fileSize: 1024*1024*2} //1024뒤에 붙는 숫자가 메가바이트 / -> 2메가까지 업로드 가능
})


//백세주 제품 페이지 시작
router.get('/bekseju',(req, res) => {
  db.getBekseju((rows) => {
    res.render('bekseju', {rows:rows});
  })
});

//백세주 제품 작성 페이지
router.get('/beksejuWrite',(req, res) => {
  res.render('beksejuWrite');
});

router.post('/beksejuW', upload.single('product_img'),(req,res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let img = 'uploads/' + req.file.filename;
  let bekseju_name = param['product_name'];
  let price = param['product_price'];
  db.insertBekseju(img, bekseju_name, price, ()=>{
    res.redirect('/bekseju')
  })
})

//백세주 수정페이지
router.get('/bekseju_upDate',(req, res) => {
  let id = req.query.id;
  console.log(id);

  db.getBeksejuByid(id, (row) => {
    res.render('bekseju_upDate',{ row:row[0] })
  })
});

router.post('/updatesPd', upload.single('product_img'), (req,res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let img = 'uploads/' + req.file.filename;
  let bekseju_name = param['product_name'];
  let price = param['product_price'];
  let id = param['id'];

  db.updateBekseju(id, img, bekseju_name, price, () => {
    res.redirect('/bekseju')
  })
})

//백세주 삭제
router.get('/bekseju_delete',(req,res) => {
  let id = req.query.id;
  console.log(id);
  db.deleteBekseju(id,() => {
    res.redirect('/bekseju')
  })
})

//백세주 제품 페이지 끝

module.exports = router;
