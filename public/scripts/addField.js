//procurar o botão
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click', cloneField)
//executar ação
function cloneField(){
    //duplicar os campos, que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //procurar os campos para limpar
    const fields = newFieldContainer.querySelectorAll('input')//queryselectorAll seleciona todos os parametros com o nome colocado

    //para cada novo campo, limpar
    fields.forEach(function(fields){
        //pegar o field atual e limpa
        fields.value = ""
    })


    //colocar na página, onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    

    