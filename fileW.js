let fs=require('fs');
fs.writeFile('./fileWrite/test2.txt','merhaba ben ilayda',(err)=>{
    if(err)throw err
    console.log("Dosya yazma işlemi başarılı");
})