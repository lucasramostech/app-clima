// UI faz o DOM do projeto

// Tabela de códigos de clima (WMO) da API agrupados pelo emoji respectivo
const codigosClima = [
    { emoji: "☀️", codigos: [0], nome: "Ensolarado" },
    { emoji: "🌤️", codigos: [1], nome: "Poucas nuvens" },
    { emoji: "⛅", codigos: [2], nome: "Parcialmente nublado" },
    { emoji: "☁️", codigos: [3], nome: "Nublado" },
    { emoji: "🌫️", codigos: [45, 48], nome: "Neblina" },
    { emoji: "🌦️", codigos: [51, 53, 61, 80], nome: "Chuva leve" },
    { emoji: "🌧️", codigos: [55, 56, 57, 63, 65, 66, 67, 81], nome: "Chuva" },
    { emoji: "🌨️", codigos: [71, 73, 85], nome: "Neve" },
    { emoji: "❄️", codigos: [75, 77, 86], nome: "Neve forte" },
    { emoji: "⛈️", codigos: [82, 95, 96, 99], nome: "Tempestade" }
]

// Função que exibe o DOM no super card do clima quando o botão é pressionado

function MostrarClima(clima) {

    // Pega o emoji do sol de hoje e troca pelo emoji correspondente ao clima atual
    const solHoje = document.querySelector('.sun')
    const casoClimaHoje = codigosClima.findIndex(function(item) {
        return item.codigos.includes(clima.codigoClimaAtual)
    })
    solHoje.textContent = codigosClima[casoClimaHoje].emoji

    // Chamando os querySelector e trocando no DOM
    const temp = document.querySelector('.temp')
    const umidade = document.querySelector('.umidity-porcentage')
    const vento = document.querySelector('.air-speed')
    const tempMax = document.querySelector('.temp-max')
    const tempMin = document.querySelector('.temp-min')

    temp.textContent = clima.temperaturaAtual + "°C"
    umidade.textContent = clima.umidade + "%"
    vento.textContent = clima.vento + "km/h"
    tempMax.textContent = clima.maxima + "° /"
    tempMin.textContent = clima.minima + "°"


    const cards = document.querySelectorAll('.card')

    // Coloca os códigos dos climas dentro de um array para mecanismo de emojis
    codigosArray = []
    for (let i = 0; i <= 5; i++){
        codigosArray.push(clima.previsao[i].codigoClima)
    }

    
    // Exibe a previsão pros próximos dias
    cards.forEach(function(card, i) {
        const dia = clima.previsao[i]
        const nomeDia = card.querySelector('.day-name')
        const diaMax = card.querySelector('.day-max')
        const diaMin = card.querySelector('.day-min')

        nomeDia.textContent = dia.diaSemana
        diaMax.textContent = dia.maxima + "°"
        diaMin.textContent = dia.minima + "°"

        
    })

    PegarEmoji(codigosArray)

    // Função que coloca os emojis de clima respectivos
    function PegarEmoji(codigo) {
        

        // Seleciona todos os emojis e nomes de cards e faz um for each para cada um e altera o DOM
        const logoEmoji = document.querySelectorAll(".day-logo")
        const textoEmoji = document.querySelectorAll(".day-desc")

        logoEmoji.forEach(function(logo, i) {
            let casoClima = (codigosClima.findIndex(function(item) {
                return item.codigos.includes(codigo[i])
            }))
            logo.textContent = codigosClima[casoClima].emoji
            textoEmoji[i].textContent = codigosClima[casoClima].nome
        })
    }


    const display = document.querySelector("#weather")
    display.style.display = "block"
}

