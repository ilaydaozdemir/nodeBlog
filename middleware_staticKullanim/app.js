const express=require('express');
const morgan=require('morgan');
const app=express();
app.set('view engine','ejs')

app.listen(3000);

//arakatman
//style dosyası ıcın
app.use(express.static("public"));
app.use(morgan('tiny'));

//send kullanıyorum
app.get('/',(req,res)=>{
res.render('index',{title:'Anasayfa'});
})

app.use((req,res,next)=>{
    console.log(req.path);
    next();
    })

app.get('/about',(req,res)=>{
res.render('about',{title:'Hakkımızda'})
})



//yonlendırme
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
})

app.get('/login',(req,res)=>{
    res.render('login',{title:'Giriş'})
    })

//ara katman hiç bir kosulu karsılamadıgında calısması gerekıyor
//bu sebeple get ve set metotlarının altına yazılır
//use olan metotlar senkron olarak calısır yanı daha sonra gelen blogu engeller
//zincir yapı kullanıyorum
app.use((req,res)=>{
    res.status(404).render('404',{title:'Sayfa Bulunamadı'})
})