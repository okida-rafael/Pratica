const display = document.getElementById('display')

var segundos = 57
var minutos = 59
var hora = 0
var timer = 0

function start(){

    display.innerText = `${data(hora)}:${data(minutos)}:${data(segundos)}`
    segundos++
    if(segundos == 60){
        segundos = 0
        minutos++
    }
    if(minutos == 60){
        minutos = 0
        hora++
    }

    
    timer = setTimeout(start, 1000)
    
}

    function parar(){
        clearTimeout(timer)
        
    }

    function reset(){
        clearTimeout(timer)
        segundos = 0
        minutos = 0
        hora = 0
        timer = 0
        display.innerHTML = `${data(hora)}:${data(minutos)}:${data(segundos)}`
    }   

    function data(input){
        return input >10 ? input : `0${input}`
    }