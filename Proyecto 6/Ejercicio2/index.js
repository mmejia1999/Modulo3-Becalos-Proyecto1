
const body = document.getElementById('body');
const titulo = document.getElementById('titulo');
const button= document.getElementById('accion');


const colores = ['#2596be','#e28743','#873e23','#063970','#eeeee4','#76b5c5'];

function generarColorRandom(){
    const colorRandom = colores[Math.floor(Math.random() * 6)];
    console.log(colorRandom)
    return colorRandom
}


//generarColorRandom()


button.addEventListener('click', () => {
    /*Codigo para cambiar el color en caso de que coincidan */
    do{
       randNum1=generarColorRandom();
       randNum2=generarColorRandom();
       randNum3=generarColorRandom();
    
    } while( randNum1 === randNum2 || randNum1 === randNum3 || randNum2 === randNum3 );
        body.style.backgroundColor = randNum1;
        button.style.backgroundColor = randNum2;
        titulo.style.color = randNum3;
  



});

/*do{
    randNum1=generarColorRandom();
    randNum2=generarColorRandom();
    randNum3=generarColorRandom();

} while( randNum1 === randNum2 || randNum1 === randNum3 || randNum2 === randNum3 );
    body.style.backgroundColor = colores[randNum1];
    button.style.backgroundColor = colores[randNum2];
    titulo.style.color = colores[randNum3];
    
    
        body.style.backgroundColor = generarColorRandom();
    button.style.backgroundColor = generarColorRandom();
    titulo.style.color = generarColorRandom();
    
    
    
    */