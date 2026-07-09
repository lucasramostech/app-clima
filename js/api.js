// Função para converter em coordenadas
async function ConverterLatitudeLongitude(cityName) {
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=pt&format=json`)
    const data = await response.json()

    const {
        latitude,
        longitude
    } = data.results[0]

    // Altera o nome da cidade
    const city = document.querySelector(".city")
    city.textContent = data.results[0].name

    return { latitude, longitude }

}


// Função que converte para graus
async function RastrearTemp(cityName) {

    try {
        const { latitude, longitude } = await ConverterLatitudeLongitude(cityName)
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=7`)
        const data = await response.json()

        DadosAPI(data)

    }
    catch (error) {
        alert("Erro, Cidade não encontrada!")
    }
    

}

