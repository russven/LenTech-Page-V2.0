//asignar los datos al formulario
let loginForm = document.querySelector('#loginForm')
// asginar un evento para enviar informacion

loginForm.addEventListener('submit',(e)=>  {
    e.preventDefault()

    let email = document.querySelector('#email').value 
    let password = document.querySelector('#password').value

    
    let Users = JSON.parse(localStorage.getItem('users')) || []
    // buscar los datos email y password para mirar si se encuentran registrado

    let validUser = Users.find(user => user.email === email && user.password === password)
    
    // condicional 
    if(!validUser) {
        Swal.fire({
            icon: 'ERROR',
            title: 'ERROR GARRAFAL',
            text: 'EL USUARIO Y/O CLAVE SON INCORRECTOS, INTENTALO'
    })
    return
}
    Swal.fire({
            icon: 'success',
            title: 'inicio de sesion',
            text: `bienvenido de nuevo ${validUser.name}`
    })
    localStorage.setItem ('login_success',JSON.stringify(validUser));
    window.location.href = 'index.html'
})