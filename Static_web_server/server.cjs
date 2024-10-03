const http = require('http');
const myServer = http.createServer((req,res) => {
    res.end('<h1>Hello World</h1>');
})

myServer.listen(3000, '127.0.0.1',  () => {
    console.log('Listening at port 3000')
})   