# App de Clima

Aplicação web de clima

## Status: v1.0

Nesta versão, a base de busca de dados está funcional. A interface visual já está montada com dados fixos (placeholder), ainda não conectados aos dados reais da API.

### O que já funciona

- Formulário de busca por cidade, com validação de campo vazio.
- Busca de coordenadas (latitude/longitude) via API de geocoding da Open-Meteo.
- Busca do clima atual e da previsão dos próximos dias via API de forecast da Open-Meteo.
- Tratamento de erro (cidade não encontrada / falha na busca) com alerta ao usuário.
- Layout completo do clima atual e da previsão de 5 dias (com dados de exemplo).

### O que falta (próxima versão)

- Ligar os dados retornados pela API aos elementos da tela (`ui.js`).
- Traduzir os códigos de clima (`weather_code`) da API em texto e emoji (`weatherCodes.js`).
- Alternar entre o estado de placeholder e os dados reais após a busca.

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
  ui.js
  weatherCodes.js
```

## Como rodar

Basta abrir o arquivo `index.html` direto no navegador não precisa de servidor nem instalação.
