

let mevalar =["olma", "o'rik", "gilos", "anor"];

console.log(mevalar);

let a= confirm("aray qoshasizmi");
if(a==true){
    mevalar.push('tarvus');
}
else{
    mevalar.pop();
}
console.log(mevalar);