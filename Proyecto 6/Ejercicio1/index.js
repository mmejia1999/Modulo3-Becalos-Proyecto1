//EN HTML
    // <h1 id="principal2">DOM</h1>
    // <h1 id="principal3">DOM</h1>
    // <p class="carta">hola</p>


// //Hay metodos para acceder a los nodos de html y modificarlos a mi gusto

// const h1 = document.getElementById("principal1")
// //Busca todos los elementos que tengan la misma etiqueta
// console.log(document.getElementsByTagName("h1"))
// console.log(document.getElementsByTagName("div"))
// console.log(document.getElementsByTagName("p"))

// console.log(document.getElementsByClassName("carta"))

// const h1 = document.getElementById("principal")

// console.log(h1)

// h1.innerHTML = 'SOY UN TEXTO ENVIADO DESDE JS'


const render = document.getElementById("render");
//console.log(render)
const emojis = ['🆔','👨‍👦','🚡','🀄','🧑‍🔧','🌆']
//render.innerHTML = emojis
const button = document.getElementById('accion');

//console.log(button)


//crea el elemento span en el documento html y le añade la classlist carta
function crearElemento(){
    let elemento = document.createElement('span')
    elemento.classList.add('carta')

    //console.log(elemento);

    return elemento
}

function pintarElemento(){
    for(let i=0; i< emojis.length; i++){
       // console.log(emojis[i]);
       let elemento = crearElemento();
       elemento.innerHTML = `${emojis[i]}`
       //console.log(elemento.innerHTML = `${emojis[i]}`)

        //la siguiente funcion se encarga de que al elemento padre que vamos a utilizar
        //inyectarle los demas nodos como hijos
        //a render se lee crearan hijos
        render.appendChild(elemento)

    }
}
//no llamaremos a pitar elemento todavia para que no se renderice 
//pintarElemento()

//EVENLISTENER nos sirve para estar pendientes de eventos que ocurren en el dom
//puede ser un hover, un click, un tecladazo de la barra de espacios
//aqui haremos uso de una arrow function
//sirve para registrar eventos o acciones que se realizan en nuestra pagina 
button.addEventListener('click', () => {
    //console.log('me diste click')
    pintarElemento();
    render.classList.remove('hide')
    button.classList.add('hide')
    setTimeout(()=>{
        button.classList.remove('hide')
        render.classList.add('hide')
        //render.innerHTML = ''; otra opcion para evitar validaciones 
        location.reload();
    }, 5000)
})