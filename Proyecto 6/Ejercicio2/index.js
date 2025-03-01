const body = document.getElementById('body')
const titulo = document.getElementById('titulo')
const button= document.getElementById('accion')

const colores = ['#2596be','#e28743','#873e23','#063970','#eeeee4','#76b5c5']

function generarColorRandom(){
    const colorRandom = colores[Math.floor(Math.random() * 6)];
    console.log(colorRandom)
    return colorRandom
}


//generarColorRandom()


button.addEventListener('click', () => {
    
    body.style.backgroundColor = generarColorRandom();
    button.style.backgroundColor = generarColorRandom();
    titulo.style.color = generarColorRandom();

})