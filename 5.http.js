const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to oue home page')
    }
    if(req.url==='/about'){
        res.end("this is about page")
    }
    res.end("nah shit the fuck off")
})


server.listen(5000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("running");
})