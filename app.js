//npm으로 설치한 애들 연결하기

const expressLayout = require('express-ejs-layouts');
const express = require('express');
const cookieParser = require('cookie-parser');
const routers = require('./routes/route');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views')); //경로 잡아준 거
app.set('view engine', 'ejs');
//사용하겠다.
app.use(expressLayout);
app.use('/', routers);
app.use(express.static(path.join(__dirname, 'public'))); //경로 잡아준 거
module.exports = app; //app이라는 이름으로 모듈화시켜서 내보내겠다.
