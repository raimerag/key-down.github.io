pintar = (ele,color) => {
    elemento = document.getElementById(ele)
    elemento.style.backgroundColor = color
}

document.addEventListener("click",()=>{
    pintar("ele1","yellow")
})