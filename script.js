let carritoDeCompras = [
    { nombre: "The Legend of Zelda: Tears of the Kingdom",
      precio: 4200.00,
      cantidad: 3
    },

    { nombre: "Red Dead Redemption 2",
      precio: 3500.00,
      cantidad: 1
    },

    { nombre: "Hollow Knight",
      precio: 900.00,
      cantidad: 2
    }
]

function calcularTotalCarrito() {
    let subtotal = 0;
    let cantidadTotal = 0;

    for (let i = 0; i < carritoDeCompras.length; i++) {
        let juego = carritoDeCompras[i];
        subtotal += juego.precio * juego.cantidad;
        cantidadTotal += juego.cantidad;
    }

console.log("Subtotal: RD$" + subtotal);

let descuento = 0;

if (subtotal > 10000) {
    descuento += 1000;
    console.log("Se aplicó el descuento de RD$1,000 por compra mayor");
}

if (cantidadTotal >= 5) {
    descuento += subtotal * 0.05;
}

let totalConDescuento = (subtotal - descuento); 

console.log("Total con descuento: RD$" + totalConDescuento);

let itbis = totalConDescuento * 0.18;

console.log("ITBIS: RD$" + itbis);

let total = totalConDescuento + itbis;
console.log("Total: RD$" + total);
}

calcularTotalCarrito();