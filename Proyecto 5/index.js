
// OBJETOS

//Estructuras fundamentales que nos permiten organizar datos y funcionalidades de manera eficiente,
// se utilizan para modelar entidades del mundo real, agrupando propiedades, datos y metodos de funciones que operan sobre esos datos
// Que son, como definirlos, acceder a propiedades, agregar metodos dentro de un objeto
//Son una coleccion de pares llave-valor, cada llave es una propiedad y su valor puede ser cualquier tipo de dato 
//sintaxis: const persona = {}


//THIS referencia al objeto
// const persona = {
//     nombre: 'Michelle', 
//     edad:26, 
//     profesion: 'desarrollador', 
//     saludar: function(){
//         return `Hola, mi nombre es ${this.nombre} y soy ${this.profesion}`
//     }
// }

// console.log(persona.nombre)
// //imprime la sintaxis de la funcion
// console.log(persona.saludar)
// //Manda a llamra a la funcion 
// console.log(persona.saludar())

const libro = {
    titulo: 'El principito',
    autor: 'Antoine de Saint',
    piblicacion: '1943',
    capitulos: ['Introduccion', 'El encuentro con el zorro', 'El asteriode B-612'],
    //Funcion anonima para mostrar la informacion de libro
    mostrarInfo: function(){
        return `${this.titulo} de ${this.autor} publicado en ${this.piblicacion}`
    },
    //Funcion para mostrar los capitulos
    listarCapitulos: function(){
        console.log(`Capitulos de ${this.titulo}`);
        //Se creara una llave nueva dentro de la funcion
        //forEach es para recorrer cada elemento de la llave
        //forEach((capitulo, index)) - uno es para el elemento y otro para el contador que llevamos
        this.capitulos.forEach((capitulo, index) => {
            console.log(`${index + 1} - ${capitulo}`);
        })
    },
    //Funcion para agregar un nuevo capitulo 
    // agregarCapitulo: function(){
    //     let nuevoCapitulo = prompt('Nombre del capitulo que desea agregar:');
    //     alert('capitulo agregado con exitogg')
    //     this.capitulos.push(nuevoCapitulo)
    // }
    agregarCapitulo: function(nuevoCapitulo){
        this.capitulos.push(nuevoCapitulo)
        console.log(`Capitulo "${nuevoCapitulo}" agregado`)
    }
}

console.log(libro.mostrarInfo());
libro.listarCapitulos();

libro.agregarCapitulo('test');
console.log(libro.);