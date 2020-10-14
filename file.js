const fs=require('fs');
fs.readFile('./file/test.txt','UTF-8',(err,data)=>{
if(err)throw err
console.log(data);
})