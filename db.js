var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '95052910',
  database : 'gsd',
  multipleStatements: true //다중쿼리용 설정
});

//두개 이상의 테이블을 한번에 조회하는 방법
// function getNoti(callback) {
//     connection.query('SELECT * FROM gsdnoti ORDER BY No desc;' + 'SELECT * FROM gsdnoti ORDER BY No desc;', (err, rows) => {
//         let rows0 = rows[0]
//         let rows1 = rows[1]
        
//         if(err) throw err;
//         callback(rows0,rows1);
//     })
// }
 
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//회원가입
function insertJoin(id, pwd, mail, name, num, p_num, h_add, callback) {
    connection.query(`INSERT INTO joins(id, password, email, name, birth, tel, address) values('${id}','${pwd}','${mail}','${name}','${num}','${p_num}','${h_add}')`, (err) => {
        if(err) throw err;
        callback();
    })
}

//로그인
function logInCheck(id, pwd, callback) {
    connection.query(`SELECT * FROM joins where id='${id}' and password='${pwd}'`, (err,results) => {
        if(err) throw err;
        callback(results);
    })
}

//공지사항을 추출할 때
function getNoti(callback) {
    connection.query('SELECT * FROM gsdnoti ORDER BY No desc', (err, rows, fields) => {
        if(err) throw err;
        callback(rows);
    })
}

//공지사항을 입력할 때
function insertNoti(content, name, title, password, callback) {
    connection.query(`INSERT INTO gsdnoti(create_time, content, name, title, password) VALUES(NOW(),'${content}', '${name}', '${title}', '${password}')`, (err)=>{
        if(err) throw err;
        callback();
    })
}

//공지사항을 입력값을 뷰어페이지에 출력할 때
function getNotiByid(No, callback) {
    connection.query(`SELECT * FROM gsdnoti WHERE No=${No}`, (err,row) => {
        if(err) throw err;
        callback(row);
    })
}

//공지사항 게시물을 삭제할 때
function deleteNByid(No, callback) {
    connection.query(`DELETE FROM gsdnoti WHERE No=${No}`, (err) => {
        if(err) throw err;
        callback();
    })
}

//공지사항 게시물을 수정할 때
function updateList(No,name,title,content,password, callback) {
    connection.query(`UPDATE gsdnoti SET name="${name}", title="${title}",content="${content}", password="${password}" where No=${No}`, (err) => {
        if(err) throw err;
        callback();
    })
}





//백세주 제품 정보 받아오기
function getBekseju(callback) {
    connection.query('SELECT * FROM bekseju ORDER BY id desc',(err,rows,fields)=>{
        if(err) throw err;
        callback(rows);
    })
}

//백세주 작성페이지
function insertBekseju(img, bekseju_name, price, callback) {
    connection.query(`INSERT INTO bekseju(create_time, bekseju_name, price, img) values(NOW(), '${bekseju_name}','${price}','${img}')`, (err) => {
        if(err) throw err;
        callback();
    })
}

//id가 일치하는 데이터만 추출
function getBeksejuByid(id, callback) {
    connection.query(`SELECT * FROM bekseju WHERE id=${id}`, (err,row) => {
        if(err) throw err;
        callback(row);
    })
}

//백세주 수정
function updateBekseju(id, img, bekseju_name, price, callback) {
    connection.query(`UPDATE bekseju SET create_time=now(), img='${img}', bekseju_name='${bekseju_name}', price='${price}' where id=${id}`, (err) => {
        if(err) throw err;
        callback();
    })
}

//백세주 삭제
function deleteBekseju(id, callback) {
    connection.query(`DELETE from bekseju where id=${id}`, (err) => {
        if(err) throw err;
        callback();
    })
}


module.exports = {
    getNoti, insertNoti, getNotiByid, deleteNByid, updateList, insertJoin, logInCheck, getBekseju, insertBekseju, getBeksejuByid, updateBekseju, deleteBekseju
  }