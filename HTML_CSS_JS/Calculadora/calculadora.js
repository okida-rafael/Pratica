var num1 = 0
var num2 = 0
var resultado = 0
var ent1 = document.getElementById('ent1')
var ent2 = document.getElementById('ent2')
var res = document.getElementById('res')
var limpa = document.getElementById('limpa')

//altera visibilidade do botão limpar ao digitar um número

ent1.addEventListener('focus',() =>{
    limpa.style.visibility = "visible"
})
ent2.addEventListener('keydown',() =>{
    limpa.style.visibility = "visible"
})

function soma(){
    num1 = Number(ent1.value)
    num2 = Number(ent2.value)
    resultado = num1 + num2
    limpa.style.visibility = "visible"
    res.innerText  = `A soma de ${num1} e ${num2} é : ${resultado}`
    
 }
 function subtrair(){
    num1 = Number(ent1.value)
    num2 = Number(ent2.value)
    resultado = num1 - num2
    limpa.style.visibility = "visible"
    res.innerText  = `A subtração de ${num1} e ${num2} é : ${resultado}`
    
 }
 function multiplicar(){
    num1 = Number(ent1.value)
    num2 = Number(ent2.value)
    resultado = num1 * num2
    limpa.style.visibility = "visible"
    res.innerText  = `A multiplicação de ${num1} e ${num2} é : ${resultado}`
    
 }
 function dividir(){
    num1 = Number(ent1.value)
    num2 = Number(ent2.value)
    resultado = num1 / num2
    limpa.style.visibility = "visible"
    res.innerText  = `A divisão ${num1} e ${num2} é : ${resultado}`
   
 }
function limpar(){
    limpa.style.visibility = "hidden"
    num1 = 0
    num2 = 0
    ent1.value = ""
    ent2.value = ""
    resultado = 0
    res.innerText  =''
    
}