let fs=require('fs');

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err)throw err
        console.log('klasor olustu');
    })
}else{
    fs.rmdir('./assets',(err)=>{
        if(err)throw err
        console.log("Klasör silindi");
    })
}