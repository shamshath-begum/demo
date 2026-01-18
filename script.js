btnEle=document.getElementById("btn")
btnEle.addEventListener("click",()=>{
let colors=["red","blue","green","white","black","pink","yellow"]    
let randomcolor=colors[Math.floor(Math.random()*colors.length)]
document.querySelector("body").style.backgroundColor=randomcolor
})
