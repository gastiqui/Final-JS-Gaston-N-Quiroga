const cambiarModo = document.getElementById("modo")

chequearModo()

function chequearModo(){
    const modo = localStorage.getItem("modo")
    if(modo == null){
        localStorage.setItem("modo", "claro")
        cambiarClaro()
    }
    if(modo == "oscuro"){
        cambiarOscuro()
    }
    if(modo == "claro"){
        cambiarClaro()
    }
}

cambiarModo.onclick = () =>{
    const modo = localStorage.getItem("modo")
    if(modo == "oscuro"){
        localStorage.setItem("modo", "claro")
        cambiarClaro()
        cambiarModo.textContent = "Modo Oscuro"
    }else{
        localStorage.setItem("modo", "oscuro")
        cambiarOscuro()
        cambiarModo.textContent = "Modo Claro"
    }
}

function cambiarOscuro(){
    document.body.style.backgroundColor = "#333"
}

function cambiarClaro(){
    document.body.style.backgroundColor = "#fff"
}

let infoDelLs = JSON.parse(localStorage.getItem("favoritos"))

const cardHtml = ( array ) => {
    const generarNodos = array.reduce(( acc, element) => {
        return acc + `
            <div class="card" id="pokemon-${element.id}">
                <div class="container-img">
                    <img src=${element.img} alt=${element.name}>
                </div>             
                <h2>
                    ${element.name}
                </h2>
                <button id="boton-${element.id}" class="boton-card">
                    Eliminar de favoritos
                </button>
            </div>
        `
    }, "")

    document.querySelector(".favoritos-contenedor").innerHTML = generarNodos
}

cardHtml(infoDelLs || [])

function borrarDeFavoritos (array) {
    const botonAniadir = document.querySelectorAll(".boton-card")    
    botonAniadir.forEach( boton => {
        boton.onclick = () => {
            const id = boton.id.slice(6)            
            const filtrarProducto = array.filter((elemento, i) => {
                return elemento.id != Number(id)
            })
            infoDelLs = filtrarProducto
            localStorage.setItem("favoritos", JSON.stringify(infoDelLs))
            console.log(infoDelLs)    
            cardHtml(infoDelLs)
            borrarDeFavoritos(infoDelLs)       
        }
        
    })
}

borrarDeFavoritos(infoDelLs)

const botonBorrarFavorito = document.querySelector("#borrar-favoritos")

botonBorrarFavorito.onclick = () => {
    localStorage.removeItem("favoritos")
    document.querySelector(".favoritos-contenedor").innerHTML = "No hay favoritos para eliminar"
}