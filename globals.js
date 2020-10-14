// global degıskenlerımı gorebılmek ıcın
console.log(global);

//belırlı bır sure bekledıkten sonra ıslemı gerceklestırmesı ıcın

setTimeout(()=>{
    console.log("timeout işlemı gerceklestı")
},3000);

//belırlı bır surede tekrar işlemi icin

setInterval(()=>{
    console.log("İnterval işlemı gerceklesıyor");
},1000);