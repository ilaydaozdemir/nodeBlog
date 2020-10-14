setTimeout(()=>{
    clearInterval(x);
    console.log("3.saniye de Timeout çalısacak");
},3000);

let x= setInterval(() => {
    console.log("3.saniyede interval temızlenecek")
}, 1000);