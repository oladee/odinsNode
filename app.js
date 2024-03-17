// Using Native Node js
// const http = require('node:http')
// const fs = require('node:fs')


// http.createServer((req,res)=>{
//     let streaming = ""
//     console.log(req.url)
//     switch (req.url){
//         case "/":
//             streaming = fs.createReadStream("./views/index.html")
//             streaming.pipe(res)
//             break;
//         case '/about':
//             streaming = fs.createReadStream('./views/about.html')
//             streaming.pipe(res)
//             break;
//         case '/contact-me':
//             fs.readFile('./views/contact-me.html',(err,data)=>{
//                 res.end(data)
//             })
//             break;
//         default:
//             streaming = fs.createReadStream('./views/404.html')
//             res.statusCode = 404
//             streaming.pipe(res);
//     }
    

// }).listen(8080)

// End of using Native Nodejs

// Using Express js

const express = require('express')
const path = require('node:path')

const app = express()

const options = {
    root: path.join(__dirname),
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
}

app.get('/',(req,res)=>{
    res.sendFile('index.html',options,(err)=>{
        console.log(err)
    })
})

app.get('/about',(req,res)=>{
    res.sendFile('/views/about.html',options,(err)=>{
        console.log(err)
    })
})

app.get('/contact-me',(req,res)=>{
    res.sendFile('/views/contact-me.html',options,(err)=>{
        console.log(err)
    })
})
app.use((req,res)=>{
    res.sendFile('/views/404.html',options,(err)=>{
        console.log(err)
    })
})
app.listen(8080)