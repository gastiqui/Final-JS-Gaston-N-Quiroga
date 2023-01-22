const form = document.getElementById("pokemon-form")
const input = document.getElementById("buscar-pokemon")

form.onsubmit = (e) =>{
    e.preventDefault()
    buscarElementos(input.value)
}

function buscarElementos(palabra){
    const elementoEncontrado = pokemon.find(elemento => {
        return input.value.toLowerCase() == elemento.name.toLowerCase()
    })
    const card = document.createElement("div")
    card.innerHTML = `
        <h1>Has buscado: ${elementoEncontrado.name}<h1>
        <p>Tipo: ${elementoEncontrado.type}</p>
        <img src=${elementoEncontrado.img}>
    `
    document.body.appendChild(card)
}
