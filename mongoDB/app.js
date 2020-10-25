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

//veritabanındakı degerlere atama yapıyorum
//yanı ıcerık olusturuyorum
app.get('/add',(req,res)=>{
const blog=new Blog({
    title:'yeni yazi 2',
    short:'kisa aciklama',
    long:'uzun aciklama'
})
//ıcerıgı verıtabanına kaydedecegım
blog.save() 
.then((result)=>{
    res.send(result)
})
.catch((err)=>{
    console.log(err)
})
})

//verıtabanına ulasma
//modul uzerınden gıdıcem

app.get('/all',(req,res)=>{
Blog.find()
.then((result)=>{
    res.send(result)
})
.catch((err)=>{
    console.log(err)
})
})

app.get('/single',(req,res)=>{
    Blog.findById('5f9565de8bf23b2bd8626077')
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})


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