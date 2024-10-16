const cartItems = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total');
let total = 0;

// Función para dar formato a los números con separador de miles y con apóstrofe después de seis dígitos
function formatPrice(price) {
    // Primero, formateamos el número usando 'toLocaleString' para que tenga separadores de miles
    let formattedPrice = price.toLocaleString('es-CO'); // Cambia a 'es-CO' para usar el formato con coma en los miles
    // Si el número tiene más de seis dígitos, agregamos un apóstrofe después de los seis primeros dígitos
    if (formattedPrice.length > 6) {
        formattedPrice = formattedPrice.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');
    }
    return formattedPrice;
}

// Agregar evento a cada botón de agregar al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.parentElement.querySelector('h3').innerText;
        const productPrice = parseFloat(e.target.getAttribute('data-price'));

        // Agregar producto al carrito
        const li = document.createElement('li');
        li.textContent = `${productName} - $${formatPrice(productPrice)}`;

        // Botón para quitar producto
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Quitar';
        removeButton.style.marginLeft = '10px';
        removeButton.addEventListener('click', () => {
            cartItems.removeChild(li);
            total -= productPrice;
            updateTotal();
        });

        li.appendChild(removeButton);
        cartItems.appendChild(li);

        // Actualizar total
        total += productPrice;
        updateTotal();
    });
});

function updateTotal() {
    totalDisplay.textContent = `$${formatPrice(total)}`;
}

// Evento para el botón de compra
document.getElementById('buy-button').addEventListener('click', () => {
    if (total > 0) {
        alert(`Gracias por tu compra. Total: $${formatPrice(total)}`);
        cartItems.innerHTML = '';
        total = 0;
        updateTotal();
    } else {
        alert('Tu carrito está vacío.');
    }
});
