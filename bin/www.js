let app = require('../app');
let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`express 실행 ${PORT}`);
})
