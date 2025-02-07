/**let nombre = 'Miguel';
//JavaScript funciona en cascada
console.log(nombre);
//Let si permite cambiar el valor despues 
let nombre = 'Angel'

//Cuando es una constante no se puede cambiar el valor, ya que pone una restriccion donde la misma constante no puede tener otro valor asignado
const apellido = Monterroso;

console.log(apellido);

// IF
if(10 > 20){
   console.log('10 es mayor que 5')
}
else if(20 < 30){
   console.log('20 es menor que 30')
}
else if(5 == 5){
   console.log(5 es igual a 5)
}
else if(5 == 5{
   console.log(5 es igual a 5)
}


//CONDICIONALES
// && AND

console.log(10 == 10 && 20 === 20)

// || OR

console.log((10 === 10 || 20 === 20) && (5 < 4 || 3 > 5))


// Hacer una app que se encargue de validar si la persona es apta para recibir la licencia de conducir.

//Validar que el usuario haya ganado el examen teorico, practico y tenga buena vision.

let teorico = true;
let practico = true;
let vista = true;

if(teorico === true && practico === true && vista === true){
    alert('Felicidades tienes tu licencia de conducir')
}
else if(practico === false){
    alert('Fallaste el examen practico, repitelo')
}
else if (vista === false){
    alert('Consideramos que no obtener la licencia por temas de la vista')
}
else if(teorico === false){
    alert('Fallaste el teorico, ponte a repasar')
}
else{
    alert('Contacta al administrador')
}

**/

//APP PARA VALIDAR ENTRADA AL PARQUE TEMATICO

// 1. Edad y altura, tener 12 años o medir mas de 140 cm

// 2. Pago o pase, debe haber hecho el pago de $20 o tener un pase VIP

// 3. Condicion de salud, no debe tener restricciones medicas

// 4. Aconpañante, si el visitante es menor de 16 años debe estar aconpañado por un adulto

let edad = Number(prompt('Ingresa tu edad:'))

let altura = Number(prompt('Ingresa tu altura en CM:'))

let pago = prompt('Hiciste el pago de la entrada? si - no').
toLocaleLowerCase()

let pase = prompt('Tienes un pase VIP? si - no').
toLocaleLowerCase()

let salud = prompt('Tienes alguna condicion medica? si - no').
toLocaleLowerCase()

if(edad >= 12 && altura >= 140){
    if(edad < 16){
        let acompañante = prompt('Te acompaña un adulto? si - no').
        toLocaleLowerCase()
        if(acompañante === 'si'){
            if((pago === 'si' || pase === 'si') && salud === 'no'){
                console.log('Puedes ingresar al parque con tu acompañante, bienvenidos!')
            }
            else if(pago === 'no' || pase === 'no'){
                console.log('No puedes entrar porque no tienes ningun pago ni pase.')
            }
            else{
                console.log('No puedes ingresar por tu condicion de salud');
            }
        }
        else{
            console.log('ya que eres menor y no te acompaña un adulto, no puedes ingresar');
        }
    }
    else{
        if((pago === 'si' || pase === 'si') && salud === 'no'){
            console.log('Puedes ingresar al parque, bienvenido!')
        }
        else if(pago === 'no' || pase === 'no'){
            console.log('No puedes entrar porque no tienes ningun pago ni pase.')
        }
        else{
            console.log('No puedes ingresar por tu condicion de salud');
        }

    }
}
else{
    console.log('No cumples con los requisitos para ingresar');
}