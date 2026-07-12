// Local Storage

// Ao carregar a página, recria os botões de favoritos já salvos no localStorage ---> anti-redresh
function carregarFavoritos() {
    const historic = document.querySelector('#historic')
    const listaFavoritos = JSON.parse(localStorage.getItem('favoritos')) || []

    listaFavoritos.forEach(function(cidade) {
        historic.innerHTML += `<button type="button" class="sub-favoritos rounded-xl min-h-[4rem] flex items-center justify-center font-serif text-gray-600">${cidade}</button>`
    })
}

carregarFavoritos()


// Funcão que detecta o clique no botaõ de favoritos & add no localstorage
const botaoFavoritos = document.querySelector('#botaoFavoritos')
botaoFavoritos.addEventListener('click', favoritosPressionado)

// Função que identifica o botão de favoritos pressionadoe 
function favoritosPressionado() {
  

    const cidadeFavorita = favoritos[favoritos.length - 1]
    const listaFavoritos = JSON.parse(localStorage.getItem('favoritos')) || []

    if (!listaFavoritos.includes(cidadeFavorita)) {
        listaFavoritos.push(cidadeFavorita)

        localStorage.setItem('favoritos', JSON.stringify(listaFavoritos))

        favoritosLista()
    }

    // Função que injeta o html dentro do favoritos
    function favoritosLista() {
        const historic = document.querySelector('#historic')
        historic.innerHTML += `<button type="button" class="sub-favoritos rounded-xl min-h-[4rem] flex items-center justify-center font-serif text-gray-600">${cidadeFavorita}</button>`
    }
}

