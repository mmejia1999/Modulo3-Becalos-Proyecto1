/*let index = 1;

while (index <= 10){
    console.log(index);
    index++
    //index += 2; para hacer que las iteraciones sean de 2 en 2
}

for(let index = 1; index <= 10; index ++){
    console.log('iteracion',index)
    if (index == 3){
        //index=10;
        console.log('Tercer iteracion');
    }
}*/

/* CONTADOR: Cuenta cuantas veces que se ha cumplido una condicion, generalmente inicia en 0
ACUMULADOR: Acumula el resultado de una operacion

CICLO FOR:
Procesamiento de listas: Como resultados de consultas de bases de datos
Generacion de Reportes: Iterar sobre datos y generar analisis

ARRAYS

Comienzan en 0
Pueden almacenar datos de diferentes tipos, p. e. ['Ana', 1, true]

METODOS DE LOS ARRAYS: Acciones o funciones especiales que podemos usar en los arrays(modificar, recorrer, hacer calculos)
            push() - Agregar un elemento al final
            pop() - Quitar el ultimo elemento 
            unshift() - Agregar un elemento al inicio
            shift() - Quitar el primer elemento
            sort() - Ordenar un array
            map() - Modificar todos los elementos


ctrl + shift + p -- acceder a emojis



console.log(emojis);
console.log(emojis[3])//acceder a un elemento del array

emojis.push('SOY NUEVO')

console.log(emojis);

emojis.pop();
console.log(emojis);

emojis.shift();
console.log(emojis);

emojis.unshift('PRIMERO');
console.log(emojis);
*/



/* ITERAR UN ARRAY

Recorrer cada uno de sus elementos para hacer algo con ellos


const emojis = ['🌚','🌝','🌙', 100, true, 20, 30, 40, 456]

console.log(emojis.length);//Saber el tamaño del array

for(let index = 0; index <= emojis.length; index ++)
{console.log('Iteracion', index)
    console.log(emojis[index]);
}

OBJETO
const obj = {}

const obj = {
    marca:'Toyota',
    modelo: 'Corolla',
    color:'rojo'
}

console.log(obj);

console.log(obj.marca);//acceder a llave especifica

LOS ARRAYS TAMBIEN PUEDEN GUARDAR OBJETOS
console.log(arrayDeCarros[1].marca);
*/

let usuarioMarca = prompt('Ingresa la marca que quieres buscar')
let usuarioColor = prompt('Ingresa el color que quieres buscar')

const autos = 
[
    { marca:'Toyota', modelo: 'Corolla', color:'azul'},
    { marca:'Honda', modelo: 'Civic', color:'rojo'},
    { marca:'Subaru', modelo: 'WRX', color:'gris'},
    { marca:'BMW', modelo: 'M4', color:'azul'},
    { marca:'Ford', modelo: 'Mustang', color:'rojo'},
    { marca:'Tesla', modelo: 'Model 3', color:'gris'},
    { marca:'Chevrolet', modelo: 'Silverado', color:'Blanco'}

]

console.log(autos[2].color);


// Filtrar por marca
let autoBuscado = null;

for(let index = 0; index < autos.length; index ++)
{
    if(autos[index].marca === usuarioMarca)
    {
        autoBuscado = autos[index];
        break;//Se sale del bucle directamente al encontrar el resultado buscado
    }
}

//if(autoBuscado === false) esto es VERDADERO ya que null se toma como FALSE

//Entonces si autoBuscado ya tiene contenido el siguiente IF  es VERDADERO

if(autoBuscado){
    console.log('Auto Encontrado:', autoBuscado);
}else{
    console.log('No se encontro la marca');
}


//Filtrar por color
const autosDeColor = [] //ARRAY VACIO

for(let index = 0; index < autos.length; index++){
    if(autos[index].color === usuarioColor){
        autosDeColor.push(autos[index]);
    }
}

if(autosDeColor == true){
    console.log('Lista de autos de color:', autosDeColor);
}else{
    console.log('No se encontro el color');
}


/* 
    FizzBuzz 
    Fizzbuzz es un ejercicio clasico en programacion que ayuda a mejorar el pensamiento logico
    y la estructura de los bucles condicionales. Tu tarea es escribir  un programa en JavaScript
    que recorra los numeros del 1 al 100 y siga estas reglas:

    Si un numero es multiplo de 3, imprime "Fizz".
    Si un numero es multiplo de 5, imprime "Buzz".
    Si un numero es multiplo de 3 y de 5, imprime "FizzBuzz".
    Si un numero no es multiplo de 3 y ni de 5, simplemente imprime el numero.
    % - con este simbolo sabra si es un multiplo

*/



for(let index = 0; index <= 100; index ++){
 if(index % 3 === 0 && index % 5 === 0){
    console.log('FizzBuzz');
 } else if(index % 3 === 0){
    console.log('Fizz');
 }else if(index % 5 === 0){
    console.log('Buzz');
 } else{
    console.log(index);
 }
}

