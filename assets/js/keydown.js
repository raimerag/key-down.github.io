pintar = (color) => {
    var element = document.getElementById("key")
    element.style.backgroundColor = color
}

nuevoDiv = () => {
    var contenedor = document.getElementById("contenedor-key")
    contend = document.createElement("div")
    contend.innerHTML =`<div id="key"></div>`
    contenedor.appendChild(contend)
 }

 document.addEventListener("keydown", function(event) {
    if (event.key === "a" || event.key === "A") {
        var a = "pink";
        pintar(a)
    }
    if (event.key === "s" || event.key === "S") {
        var s = "orange";
        pintar(s)
    }
    if (event.key === "d" || event.key === "D") {
        var d = "lightblue";
        pintar(d)
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "q" || event.key === "Q") {
         nuevoDiv()
        var q = "purple";
        pintar(q)
    }
    if (event.key === "w" || event.key === "W") {
        nuevoDiv()
        var w = "grey";
        pintar(w)
    }
    if (event.key === "e" || event.key === "E") {
        nuevoDiv()
        var e = "brown";
        pintar(e)
    }
    });
        
