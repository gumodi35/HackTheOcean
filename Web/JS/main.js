//validacion del formulario
// -> declaramos nuestras variables que son los inputs del form
const btnSuscribirte = document.getElementById('suscribirte');

const validacion = (e) => {
    e.preventDefault();
    const nombreUsuario = document.getElementById("nombre");
    const apellidoUsuario = document.getElementById("apellido");
    const emailUsuario = document.getElementById("email");
    const edadUsuario = document.getElementById("edad");
    const ciudadUsuario = document.getElementById("ciudad");
    const playaUsuario = document.getElementById("playa");

    // -> hacemos los casos de validacion para los id
    if (nombre.value === "") {
        alert("Ingresa, por favor tu nombre de usuario.");
        nombre.focus();
        return false;
    }

    if (apellido.value === "") {
        alert("Ingresa, por favor tu apellido.");
        apellido.focus();
        return false;
    }

    if (email.value === "") {
        alert("Ingresa, por favor tu email");
        email.focus();
        return false;
    }

    if (edad.value === "") {
        alert("Ingresa, por favor tu edad");
        edad.focus();
        return false;
    }

    if (ciudad.value === "") {
        alert("Ingresa, por favor tu ciudad");
        ciudad.focus();
        return false;
    }

    if (playa.value === "") {
        alert("Ingresa, por favor tu playa");
        ciudad.focus();
        return false;
    }

    //return true;

    // -> El formulario se envia
    alert("Gracias por participar, tus datos se enviaron");
    document.validacion.submit();
}

// -> Agregamos el evento al boton
btnSuscribirte.addEventListener('click', validacion);