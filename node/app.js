const express=require('express');
const app=express();


app.listen(3000);

//send kullanıyorum
app.get('/',(req,res)=>{
res.sendFile('./views/index.html',{root:__dirname});
})

app.get('/about',(req,res)=>{
res.sendFile('./views/about.html',{root:__dirname});
})


//yonlendırme
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
})

//ara katman hiç bir kosulu karsılamadıgında calısması gerekıyor
//bu sebeple get ve set metotlarının altına yazılır
//use olan metotlar senkron olarak calısır yanı daha sonra gelen blogu engeller
//zincir yapı kullanıyorum
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname})
})