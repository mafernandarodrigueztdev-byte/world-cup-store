function mostrarCarrito() {

    const carrito =
        JSON.parse(localStorage.getItem("carrito"))  [];

    const contenedor =
        document.getElementById("lista-carrito");

    const totalElemento =
        document.getElementById("total");

    contenedor.innerHTML = "";

    let total = 0;

    if (carrito.length === 0) {

        contenedor.innerHTML = 
            <div class="alert alert-info">
                Tu carrito está vacío.
            </div>
        ;

        totalElemento.textContent = "0";
        return;
    }

    carrito.forEach(producto => {

        const subtotal =
            producto.precio * producto.cantidad;

        total += subtotal;

        contenedor.innerHTML += 
            <div class="card mb-3">
                <div class="card-body">

                    <h5>${producto.nombre}</h5>

                    <p>
                        Precio: $${producto.precio}
                    </p>

                    <p>
                        Cantidad: ${producto.cantidad}
                    </p>

                    <p>
                        Subtotal: $${subtotal}
                    </p>

                    <button
                        class="btn btn-outline-danger"
                        onclick="eliminarProducto('${producto.id}')">
                        Eliminar
                    </button>

                </div>
            </div>
        ;
    });

    totalElemento.textContent = total;
}

function eliminarProducto(id) {

    let carrito =
        JSON.parse(localStorage.getItem("carrito"))  [];

    carrito = carrito.filter(
        producto => producto.id !== id
    );

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    mostrarCarrito();
}

function vaciarCarrito() {

    localStorage.removeItem("carrito");

    mostrarCarrito();
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarCarrito();
});