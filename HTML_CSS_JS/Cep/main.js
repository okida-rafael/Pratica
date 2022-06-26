    function pesquisaCep(){
    
    document.querySelector('div').style.visibility = 'visible'
    const cep = document.getElementById('cep').value
    const url = `http://viacep.com.br/ws/${cep}/json/`
   
    //verifica se um numero foi digitado
    var validaCep = Number(cep)
          
     if(isNaN(validaCep)){
        
        alert('Digite um CEP valido')
        let limpaCep = document.getElementById('cep')
        limpaCep.value = ''
        document.getElementById('cep').focus()
        
        return
     }

    fetch(url)
    .then(response => {response.json()
       .then(dados =>{
        inserirDados(dados)
        })
       }) 
    } 
 

    function inserirDados(data){
        
        document.querySelector('div').style.visibility = 'hidden' 
        let logradouro = document.getElementById('logradouro')
        let bairro = document.getElementById('bairro')
        let cidade = document.getElementById('cidade')
        let uf = document.getElementById('uf')

        logradouro.value = data.logradouro
        bairro.value = data.bairro
        localidade.value = data.localidade
        uf.value = data.uf

       
   }

//ao sair de foco o input cep chama a consulta no viacep
document.getElementById('cep').addEventListener('focusout', pesquisaCep)

