const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const matricula = document.getElementById("matricula")
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <3){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(apellido.value.length <3){
        warnings += `El Apellido no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(matricula.value.length  <8){
        warnings += `La matricula no es valida <br>`
        entrar = true
    }
    if(telefono.value.length < 9){
        warnings += `El Telefono no es valido <br>`
        entrar = true
    }


    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})