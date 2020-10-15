const http=require('http');
const server=http.createServer((req,res)=>{
//url ve hhangı metıtle cagrıldıgını ogrenıyorum
console.log(req.url,req.method);

res.setHeader('Content-Type','text/html');
res.write('<h1>Merhaba Ilayda</h1>');
res.end();
});

server.listen(3000,'localhost',()=>{
    console.log('3000 portu dinlenıyor');
});
