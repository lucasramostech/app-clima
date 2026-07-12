// Eventos de botões e DOm no geral
const input = document.querySelector('#cityName')
const botao = document.querySelector('#botaoBuscar')

cityname = ""

// Evento do botão que chama as funções da API
botao.addEventListener("click", function(event) {
    event.preventDefault()

    if (input.value === "") {
        alert("Digite o nome de uma cidade!")
        return
    }

   
    cityname = input.value
    document.querySelector('#loading').classList.remove('hidden')
    RastrearTemp(cityname)

})

const historic = document.querySelector("#historic")

historic.addEventListener("click", function(event) {
    if (event.target.classList.contains("sub-favoritos")) {
        document.querySelector('#loading').classList.remove('hidden')
        RastrearTemp(event.target.textContent)
    }
})
