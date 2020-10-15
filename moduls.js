
//klasördekı yolunu belırterek cagırıyorum
let p=require('./people.js');

//nesne seklınde dondurur
console.log(p);
console.log(p.names);
console.log(p.names[0]);
console.log(...p.names);
p.names.forEach(g=>console.log(g)); //p nın ıcerısındekı her eleman ıcın
p.names.forEach(g=>g==='ilayda'?console.log(g):console.log("bunlar degıl"));