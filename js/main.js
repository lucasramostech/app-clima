// Eventos de botões e DOm no geral
const input = document.querySelector('#cityName')
const botao = document.querySelector('#botaoBuscar')



// Evento do botão que chama as funções da API
botao.addEventListener("click", function(event) {
    event.preventDefault()

    if (input.value === "") {
        alert("Digite o nome de uma cidade!")
        return
    }

    // Pega o valor do input
    let cityname = input.value

    // Chama a função pra puxar a API 
    RastrearTemp(cityname)
})

