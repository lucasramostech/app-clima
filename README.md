# App de Clima

Aplicação web de clima que busca a previsão de qualquer cidade em tempo real, usando as APIs públicas da Open-Meteo.

Acesse: https://app-clima-lucasramostech.vercel.app/

## Status: v3.0

Nesta versão, além dos dados reais da API conectados à interface, o app ganhou um estado de carregamento e um sistema de cidades favoritas persistido no navegador via `localStorage`.

### Funcionalidades

- Formulário de busca por cidade, com validação de campo vazio.
- Busca de coordenadas (latitude/longitude) via API de geocoding da Open-Meteo.
- Busca do clima atual e da previsão dos próximos dias via API de forecast da Open-Meteo.
- Tratamento de erro (cidade não encontrada / falha na busca) com alerta ao usuário.
- Dados reais da API exibidos no clima atual (temperatura, umidade, vento, máx/mín) e nos cards de previsão.
- Tradução dos códigos de clima (`weather_code`) da API em emoji e descrição (`ui.js`).
- Indicador de "Carregando..." exibido enquanto a busca está em andamento.
- Botão "⭐ Favoritar" para salvar a cidade pesquisada na lista de favoritos.
- Favoritos persistidos no `localStorage`, exibidos num painel lateral e restaurados automaticamente ao recarregar a página.
- Clique em uma cidade favorita refaz a busca do clima para ela.
- Layout responsivo e operante

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
  storage.js
```

## Como rodar

Basta abrir o arquivo `index.html` direto no navegador, não precisa de servidor nem instalação.

1. Clone o repositório ou baixe os arquivos.
2. Abra `index.html` no navegador.
3. Digite o nome de uma cidade e clique em "Buscar Clima".

## Como funciona

1. `main.js` valida o input e dispara a busca (`RastrearTemp`), tanto pelo formulário quanto pelo clique em um favorito.
2. `api.js` converte a cidade em coordenadas e busca o clima atual e a previsão na Open-Meteo.
3. `weatherCodes.js` organiza os dados numa única estrutura e chama `MostrarClima`.
4. `ui.js` atualiza o DOM com os dados do clima e exibe o resultado.
5. `storage.js` cuida dos favoritos: salva no `localStorage` e os restaura ao recarregar a página.

