const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
res.setHeader('Content-Type','text/html');
let path= './view/';
switch(req.url){
    case '/':
        path +='home.html';
        res.statusCode=200 //okey
        break;

        case '/user':
        path +='user.html';
        res.statusCode=200
        res.setHeader('Location','/user');
        break;

        //301 yonlendırme yapar
        case '/userus':
        path +='user.html';
        res.statusCode=200;
        res.setHeader('Location','/user');
         break;
    default:
        path +='404.html';
        res.statusCode=404
        break;
    }
        fs.readFile(path,(err,data)=>{
            console.log(path);
         if(err){
             console.log(err);
             res.end();
         }else{
             res.end(data);

         }
        });


});
server.listen(3000,'localhost',()=>{
console.log("server dınlenıyor");
})
