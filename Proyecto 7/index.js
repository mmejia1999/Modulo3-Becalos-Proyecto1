
const formulario = document.getElementById('formulario')

const usuarios = [
    {user:'Miguel', pass:'1234'},
    {user:'Zaira', pass:'12345'},
    {user:'Angel', pass:'12346'},
    {user:'Julio', pass:'12347'}
]



function validar(username, password){
    let usuarioEncontrado = false;
    
    for(let i = 0; i<usuarios.length; i++)
    {
        if(username === usuarios[i].user)
        {
            usuarioEncontrado = true;
            if(password === usuarios[i].pass)
            {
                console.log('Bienvenido', usuarios[i].user);
                window.location.href = '/dashboard.html'
            } else {
                console.log('Password incorrecto')
            }

        }
    }

    if(!usuarioEncontrado){
        console.log('Datos incorrectos');
    }
}

//validar('Zaira', '12345')
//CONVERTIR A MINUSCULAS es una buena practica en contraseñas
//se puede con la funcion toLowerCase

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();

    //console.log('me diste click');
    //Con .value podemos acceder a la info que el usuario ingresa a los inputs
   
    let usuario = document.getElementById('inputUsuario').value.toLocaleLowerCase()
    let password = document.getElementById('inputPassword').value.toLocaleLowerCase()

    console.log('credenciales ingresadas', usuario, password);

    validar(usuario, password);
})




//se va a prevenir que se refresque (se borren los registros de eventos y se recargue la pagina) la pagina preventDeafult()
//la solucion directa para esto es pasando un evento como parametro