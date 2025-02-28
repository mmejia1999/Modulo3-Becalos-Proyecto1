

// function saludar(){ //la palabra reservada es function
//     console.log('Hola, bienvenidos a la clase!');
// }

// saludar()//cada llamada hace referencia al codigo anterior
// saludar()


// function mostrarMensaje(){
//     console.log('Estoy aprendiendo funciones! :D');
// }

// mostrarMensaje()

// //Se modificara la funcion para que reciba el resultado que ingreso el usuario con parametros
// //Los parametros le van a permitir a la funcion que reciba valores para personalizar su ejecucion
// //Siempre que declaremos parametros, nuestra funcion siempre los estara esperando por defecto para que
// //la funcion se realice correctamente
// /*Siempre te vas a tener que asegurar que si el parametro es un string, que siempre que el usuario pase data
// a esa funcion, le llegue como un string.
// Esto se realiza con validaciones.

// */
// function sumar(){
//     let resultado = 3 + 3;
//     console.log('El resultado es:', resultado);
// }

// sumar()



// //La funcion sdebe recibir dos numeros
// //Le estoy diciendo a la funcion que los debe esperar
// function sumarParametros(numero1, numero2){
//     console.log(numero1 + numero2);
// }

// sumarParametros(10, 20)
// sumarParametros(50, 50)
// sumarParametros('100', '100')

// let edadUsuario = Number(prompt('Ingresa tu edad:'))
// function saludoDiferente(nombre, apellido, edad, pasatiempo)
// {
//     console.log(`Hola soy ${nombre} ${apellido}, tengo la edad de ${edad} y me gusta ${pasatiempo}`);
// }

// //El orden que le demos a los parametros importa para que lo detecte
// saludoDiferente('Miguel', 'Monterroso', edadUsuario, 'caminar')

// saludoDiferente('Michelle', 'Mejia', 28, 'jugar videojuegos')

// //El tipo de dato que pasara el usuario, tu te tienes que asegurar de como llegue
// saludoDiferente(100, true, 28, false)

// function restar1(num1, num2){
// console.log(num1 - num2);
// }

// let resultado1 = restar1(5, 1)
// //No se guardo en memoria la variable resultado solo se ejecuto la funccion anterior
// //Como puedo hacer para preservar el dato y usarlo en diferentes aplicaciones
// console.log(resultado1);


// function restar(num1, num2){
//     console.log(num1 - num2);
//     return num1 - num2; //Con esto le estas diciendo que guarde en memoria para el resto de la aplicacion
//     }
    
//     let resultado = restar(5, 1)
//     resultado = restar(3, 1)
//     //Gracias a return este no imprime undefined ya que se guardo en memoria
//     console.log(resultado);

//     function mostrarResultado(){
//         console.log('Desde la funcion', resultado);
//     }

//     mostrarResultado()

//     /*let es una variable en la cual podemos sobreescribir el valor que ya se le habia asignado

//     con const marca error
//      Lo ideal seria usar const

//      const resultado1 = restar(5, 1)
//      const resultado2 = restar(3, 1)

//      return - guarda en memoria
//      console.log - imprime en consola
//     */
    

//      /*   MANERAS DE DECLARAR FUNCIONES

//     ARROW FUNCTION: La funcion dse va a ejcutar especificamente cuando nosotros la necesitemos en un bloque de codigo especifico
//     const hola = (parametros) => {funcion}

//      */

//     const hola = (letra1, letra2) => {console.log(letra1, letra2);}

//     hola('👩‍🎤','🌑')

//     setTimeout(()=>{alert('Se acabo el tiempo')}, 3000) //Vamos a pasar un codigo que va a terne que ejecutar despues de un tiempo especifico
//     //por ejemplo "pasaron 5 seg se te acabo el tiempo", espera dos parametros
//     //funcion con el codigo que va a ejecutar y el segundo es el tiempo que tiene que esperar para ejecutar esa funcion


//     //ANONIMAS: Hereda el nombre de la constante

//     const hola2 = function(){
//         console.log('SOY UNA ANONIMA');
//     }

//     hola2()


// //L arrow function hereda los parametros al vivir dentro de la funcion
//     // function limite (nombre){
//     //     setTimeout(() => {alert(`entrega tu examen, ${nombre}`)}, 5000)
//     // }

//     // limite('Michelle mejia')

// //variable global permite acceder a los datos en cualquier parte del codigo
// //scope global
//     const global='soy un global'

//     function mostrar()
//     {
//         console.log(global);
//     }

//     mostrar()
//     console.log(global)


// // scope local
// //cuando son locales se definen adentro de un bloque de codigo especifico
//  function local(){
//     let varLocal = 'SOY UNA VARIABLE LOCAL'
//     console.log(varLocal);
//  }

//  local();
//  //como es local no hay problema si se declara como global aunque se repita
//  // varLocal = 'SOY UNA LOCAL PERO GLOBAL'
//  //console.log(varLocal) --marca error porque varLocal es LOCAL no GLOBAL


//  //NOTA: los nombre de los parametros de pueden repetir en otras funciones ya que solo viven dentro de la funcion


 


//EJEMPLOS

//Crea una funcion que reciba un array de numero y retorne cuantos numeros son pares

function contarPares(numeros){
let contador = 0;
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        contador++;
    }
}
return contador;
}

console.log(contarPares([1,2,3,4,5,6,7,8]))

//Crear una funcion que reciba un array de numeros y retorne el numero mas grande 


function encontrarMayor(numeros){
let mayor = numeros[0];
    for(let i=0;i<numeros.length;i++){
        if(mayor<numeros[i])
            {
                mayor= numeros[i];
            }
    }
    
    return mayor;
}

console.log(encontrarMayor([45,3,4,5,6,200,8,300]));
console.log(encontrarMayor([1,2,3]));


//Crear un objeto estudiante con nombre, edad y un array de notas,
//tambiencrear una funcion que reciba un objeto y que retorne el promedio de las notas




// const estudiante = 
// [
//     { nombre:'Juan', edad: '17', notas:[5,6,10]},
//     { nombre:'Mich', edad: '17', notas:[5,6,10]}

// ]

console.log('EJERCICIO PROMEDIO:');
const estudiante={ nombre:'Juan', edad: '17', notas:[5,6,10]}

console.log(promedioNotas(estudiante))

console.log(promedioNotas({ nombre:'Vic', edad: '17', notas:[60,60,70]}))

function promedioNotas(estudiante){
let suma = 0;
for(let i = 0; i < estudiante.notas.length; i++){
    
    suma += estudiante.notas[i];
    //suma++;
}
let promedio = suma/estudiante.notas.length;
return promedio

}


console.log('El promedio de:', estudiante.nombre, 'es', promedioNotas(estudiante))


//Crear una funcion que reciba un array de objetos con estudiantes y que retorne
//un nuevo array con los nombres y los promedios.
console.log('EJERCICIO ARRAY DE OBJETOS CON ESTUDIANTES:');

const estudiantes =[
    { nombre:'Daniel', edad: '21', notas:[8,9,10]},
    { nombre:'Mich', edad: '15', notas:[5,6,10]},
    { nombre:'Vic', edad: '26', notas:[5,9,10]},
    { nombre:'Ana', edad: '17', notas:[5,6,5]},
]


function generarReporte(estudiantes){
    //console.log(estudiantes[1].edad);
    
    let reporte = [];
    
    for(let i=0; i<estudiantes.length; i++)
    {
        let suma = 0;
        //console.log(estudiantes[i].notas);
        for(let j=0;j<estudiantes[i].notas.length;j++)
        {
            suma+= estudiantes[i].notas[j];
            
        }
        let promedio = suma/estudiantes[i].notas.length;
       // console.log(estudiantes[i].nombre, ':', promedio);
        //suma=0;
       // reporte[i]=promedio;
       //reporte.push(promedio);
       reporte.push({nombre: estudiantes[i].nombre, edad: estudiantes[i].edad, notas: estudiantes[i].notas, promedio: promedio})
    }
    return reporte
}


//console.log(generarReporte(estudiantes));
const archivoReporte = generarReporte(estudiantes);
console.log(archivoReporte)

//generarReporte(estudiantes)