// Desprimatizar o obj que a API retorna

// Função que limpa os dados da API e transforma em variáveis const
function DadosAPI(data) {
    const temperaturaAtual = data.current.temperature_2m
    const sensacaoTermica = data.current.apparent_temperature
    const umidade = data.current.relative_humidity_2m
    const vento = data.current.wind_speed_10m
    const codigoClimaAtual = data.current.weather_code
    const maxima = data.daily.temperature_2m_max[0]
    const minima = data.daily.temperature_2m_min[0]
    const dataHoje = data.daily.time[0]


    // Loop que pega as previsões dos próximos dias e guarda num array com objetos
    const previsao = []
    for (let i = 1; i < data.daily.time.length; i++) {
        const dataDia = new Date(data.daily.time[i] + "T00:00:00")

        previsao.push({
            data: data.daily.time[i],
            diaSemana: dataDia.toLocaleDateString('pt-BR', { weekday: 'long' }),
            maxima: data.daily.temperature_2m_max[i],
            minima: data.daily.temperature_2m_min[i],
            codigoClima: data.daily.weather_code[i]
        })
    }
    
   
    // Coloca as variáveis dentro de um objeto unificado
    const clima = {
        temperaturaAtual,
        sensacaoTermica,
        umidade,
        vento,
        codigoClimaAtual,
        maxima,
        minima,
        dataHoje,
        previsao
    }
    
    MostrarClima(clima)
    return clima
}
