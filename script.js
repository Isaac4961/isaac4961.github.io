AOS.init();

const loadingTexts=[
"Initializing...",
"Loading Portfolio...",
"Loading AI Experience...",
"Loading Creativity...",
"Welcome, Explorer."
];

let loaderIndex=0;

const loaderInterval=setInterval(()=>{

document.getElementById("loaderText").innerHTML=loadingTexts[loaderIndex];

loaderIndex++;

if(loaderIndex==loadingTexts.length){

clearInterval(loaderInterval);

}

},800);

window.onload=function(){

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1000);

},4500);

}

const words=[

"Building AI Experiences",

"Full Stack Developer",

"Azure Enthusiast",

"Creating Beautiful Applications"

];

let i=0;

let j=0;

let current="";

let isDeleting=false;

function type(){

current=words[i];

if(isDeleting){

j--;

}else{

j++;

}

document.getElementById("typing").innerHTML=current.substring(0,j);

if(!isDeleting&&j==current.length){

isDeleting=true;

setTimeout(type,1200);

return;

}

if(isDeleting&&j==0){

isDeleting=false;

i++;

if(i==words.length)i=0;

}

setTimeout(type,isDeleting?60:120);

}

type();
