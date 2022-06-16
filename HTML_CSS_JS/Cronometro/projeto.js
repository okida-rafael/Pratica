const display = document.getElementById('display')
//iniciando as variaveis
var segundos = 0
var minutos = 0
var hora = 0
var timer = 0
//função do botão start
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
//função do botão parar
    function parar(){
        clearTimeout(timer)
        
    }
//função do botão reset
    function reset(){
        clearTimeout(timer)
        segundos = 0
        minutos = 0
        hora = 0
        timer = 0
        display.innerHTML = `${data(hora)}:${data(minutos)}:${data(segundos)}`
    }   
//função para concatenar 0 em numeros menores que 10 para apresentar 2 digitos no display
    function data(input){
        return input >10 ? input : `0${input}`
    }