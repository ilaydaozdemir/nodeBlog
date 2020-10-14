const fs=require('fs');

//dosyanın okunmus halını donduruyor
let readStream=fs.createReadStream('./nodeBlog/makale.txt',{encoding:'utf-8'})


//baska bır yere dosya aktarmak ıcın
let writeStream=fs.createWriteStream('./nodeBlog/kopya.txt')
 //pipe kullanıcam
readStream.pipe(writeStream);



readStream.on('data',(chunk)=>{
    console.log('----YENİ CHUNK----');
    console.log(chunk);
})

