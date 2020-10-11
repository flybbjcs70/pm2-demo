let express = require('express')
var app = express()
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

var { createProxyMiddleware:proxy} = require('http-proxy-middleware')

// app.use('/',proxy({
//     target: 'http://www.baidu.com',
//     changeOrigin: true
// }))

app.use('*',(request,response)=>{
    response.write('hello')
    response.end()
})

app.listen(3000,'0.0.0.0', function(){
    console.log('server start@127.0.0.1:3000')
})