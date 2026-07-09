# App de Clima

Aplicação web de clima que busca a previsão de qualquer cidade em tempo real, usando as APIs públicas da Open-Meteo.

Acesse: https://app-clima-lucasramostech.vercel.app/

## Status: v2.0

Nesta versão, os dados reais da API já estão conectados à interface. A busca retorna o clima atual e a previsão dos próximos dias, exibidos com emoji e descrição de acordo com o código de clima (WMO) retornado pela API.

### Funcionalidades

- Formulário de busca por cidade, com validação de campo vazio.
- Busca de coordenadas (latitude/longitude) via API de geocoding da Open-Meteo.
- Busca do clima atual e da previsão dos próximos dias via API de forecast da Open-Meteo.
- Tratamento de erro (cidade não encontrada / falha na busca) com alerta ao usuário.
- Dados reais da API exibidos no clima atual (temperatura, umidade, vento, máx/mín) e nos cards de previsão.
- Tradução dos códigos de clima (`weather_code`) da API em emoji e descrição (`ui.js`).

## Tecnologias

- HTML
- CSS
- JavaScript puro
- [Tailwind CSS](https://tailwindcss.com/) via CDN, para layout e espaçamento
- [Open-Meteo](https://open-meteo.com/) (geocoding + forecast), API pública e gratuita

## Estrutura de arquivos

```
index.html
style.css
js/
  main.js
  api.js
  weatherCodes.js
  ui.js
```

## Como rodar

Basta abrir o arquivo `index.html` direto no navegador, não precisa de servidor nem instalação.

1. Clone o repositório ou baixe os arquivos.
2. Abra `index.html` no navegador.
3. Digite o nome de uma cidade e clique em "Buscar Clima".

## Como funciona

1. `main.js` escuta o clique no botão de busca e valida se o campo não está vazio.
2. `api.js` converte o nome da cidade em latitude/longitude (API de geocoding) e busca o clima atual e a previsão dos próximos dias (API de forecast).
3. `weatherCodes.js` organiza os dados retornados num único objeto `clima` e chama `MostrarClima`.
4. `ui.js` atualiza o DOM: temperatura, umidade, vento, máx/mín, emoji do dia atual e os 5 cards de previsão exibidos na interface.

