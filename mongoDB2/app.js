const express=require('express');
const  Mongoose  = require('mongoose');
const morgan=require('morgan');
const app=express();

//modulumu projeme dahıl edıcem
const Blog=require('./models/blog')


const dbUrl='mongodb+srv://fishorduck:ilayda1995@cluster0.0bolc.mongodb.net/nodeblog?retryWrites=true&w=majority'
Mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>app.listen(3000))
.catch((err)=>console.log(err))

app.set('view engine','ejs');

//arakatman
//style dosyası ıcın
app.use(express.static("public"));
app.use(morgan('tiny'));

//verıtabanına baglı dınamık yapıyı kullanmak ıcın
app.get('/',(req,res)=>{

Blog.find().sort({createdAt:-1})
.then((result)=>{
res.render('index',{title:'Anasayfa', blogs:result}) //dınamık yapı ıcın parametre ekledım
})
.catch((err)=>{
    console.log(err)
})
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


app.use((req,res)=>{
    res.status(404).render('404',{title:'Sayfa Bulunamadı'})
})