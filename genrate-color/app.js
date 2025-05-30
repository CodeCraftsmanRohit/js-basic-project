let div=document.querySelector("div");
div.classList.add("border");

let btn =document.querySelector("button");
let h3 =document.querySelector("h3");

btn.addEventListener("click",function(){
    let randomColor=getRandomColor();
    h3.innerText = randomColor;
    div.style.backgroundColor=randomColor;
});

function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let a=Math.floor(Math.random()*255);

    let color=`rgba(${red},${blue},${green},${a})`;
    return color;
}