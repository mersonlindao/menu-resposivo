function menuShow(){
    var menuicon = document.querySelector('#menu-icon')
    var menulista = document.querySelector('#menuM-lista')
    var closeicon = document.querySelector('#close-icon')
    var header = document.querySelector('#header')
    header.style.position = "absolute"
    menulista.style.display = "flex"
    menuicon.style.display = "none"
    closeicon.style.display = "flex"
}

function menuClose(){
    var menuicon = document.querySelector('#menu-icon')
    var menulista = document.querySelector('#menuM-lista')
    var closeicon = document.querySelector('#close-icon')
    var header = document.querySelector('#header')
    header.style.position = "relative"
    menulista.style.display = "none"
    menuicon.style.display = "flex"
    closeicon.style.display = "none"
}