// Asignar los datos al formulario
let loginForm = document.querySelector('#loginForm');

// Asignar un evento para enviar información
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let Users = JSON.parse(localStorage.getItem('users')) || [];
    // Buscar los datos email y password para mirar si se encuentran registrados

    let validUser = Users.find(user => user.email === email && user.password === password);

    // Condicional 
    if (!validUser) {
        Swal.fire({
            icon: 'error',
            title: 'Error de datos',
            text: 'EL USUARIO Y/O CLAVE SON INCORRECTOS, INTÉNTALO NUEVAMENTE'
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión',
        text: `Bienvenido de nuevo ${validUser.name}`,
        confirmButtonText: 'Continuar',  // Texto del botón
        allowOutsideClick: false,        // Evita que se cierre al hacer clic fuera
    }).then((result) => {
        if (result.isConfirmed) {
            // Al hacer clic en "Continuar", guarda la información y redirige
            localStorage.setItem('login_success', JSON.stringify(validUser));
            window.location.href = 'index.html';
        }
    });

}); // Aquí cierra el addEventListener correctamente
