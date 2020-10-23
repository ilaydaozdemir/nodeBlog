const express=require('express');
const app=express();
app.set('view engine','ejs')

app.listen(3000);

//send kullanıyorum
app.get('/',(req,res)=>{
res.render('index',{title:'Anasayfa'});
})

app.get('/about',(req,res)=>{
res.render('about',{title:'Hakkımızda'})
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
    res.status(404).render('404',{title:'Sayfa Bulunamadı'})
})