// imc = peso/ (altura*altura)

var peso = document.getElementById('peso')
var altura = document.getElementById('altura')
var resultado = document.getElementById('resultado')

function imc(){

    var res = peso.value / altura.value**2
  
    if(res < 18.5){
        
        resultado.innerText = `Seu imc é ${res.toFixed(2)} -  Abaixo do peso` ;
        
    }
    else if(res <25){
        resultado.innerText = `Seu imc é ${res.toFixed(2)} -  Peso Normal`;
    }
    else if(res <29.9){
        resultado.innerText = `Seu imc é ${res.toFixed(2)} -  Sobrepeso`;
    }
    else if(res <34.9){
        resultado.innerText = `Seu imc é ${res.toFixed(2)} -  Obesidade Grau I`;
    }
    else if(res <39.9){
        resultado.innerText = `Seu imc é ${res.toFixed(2)} -  Obesidade Grau II`;
    }
    else{
        resultado.innerText = `Seu imc é ${res.toFixed(2)} -  Obesidade Grau III ou Mórbida`;
    }

}



