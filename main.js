// Funciones extensas

// function calculateTotal(cart) {
//     const subtotal = cart.reduce((total, product) => total + product.price, 0);
//     if (subtotal >= 11000) {
//         const discount = subtotal * 0.1;
//         return subtotal - discount;
//     }
//     return subtotal;
// }




// //EMPIEZA LOGIN/SING UP
// const estadoCliente = parseInt(prompt("Debe iniciar sesión o registrarse: 1-Inicio de sesion 2-Registrarse"));

// switch (estadoCliente){
//     case 1:
//         const emailRegistrado = prompt("Ingrese el email que utilizo al crear la cuenta. ");
//         const userRegistrado = prompt("Ingrese su nombre de usuario")
//         const contraseñaRegistrada = prompt("Ingrese su contraseña.");
//         alert("Ha realizado su inicio de sesion correctamente.");
//     break;

//     case 2:
//         const emalNuevo = prompt("Ingrese el email para registrarse.");
//         const userNuevo = prompt("Ingrese un nombre de usuario.")
//         const contraseñaNueva = prompt("Ingrese una contraseña.");
//         alert("Ha realizado su registro correctamente.");
//     break;

//     default:
//         alert("Seleccion invalida, refresque la página y vuelva a intentarlo.");
//     break;
    
// }
// //TERMINA LOGIN/SING UP
// if(estadoCliente=="1" || estadoCliente=="2"){
//     //EMPIEZA FUNCIONAMIENTO CARRITO

// Arrays

class producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productos = [
    new producto("Botella de Vodka 1L", 2500),
    new producto("Botella de Vodka 750ml", 1800),
    new producto("Aperitivo sabor limón 1L", 1500),
    new producto("Aperitivo sabor limón 750ml", 1000),
    new producto("Vino mendocino 750ml", 2000),
    new producto("Tetra de vino 1L", 1000),
    new producto ("Aperitivo de hierbas 1L", 3000),
    new producto ("Apertitivo de hierbas 750ml", 1900),
    new producto ("Gaseosa sabor cola, 2,25L", 800),
    new producto ("Gaseosa sabor cola 1,5L", 600),
    new producto ("Gaseosa sabor limón 2,25L", 700),
    new producto ("Gaseosa sabor limón 1,5L", 500),
    new producto ("Lata de energizante 553ml", 350),
    new producto ("Gaseosa sabor naranja 2,25L", 700),
    new producto ("Gaseosa sabor naranja 1,5L", 500),

]



// //EMPIEZA FUNCIONAMIENTO CARRITO
// function añadirProductosAlCarrito() {
//     let carrito = []; 
//     let seleccionProducto= "";
    


//     do {
//         seleccionProducto = parseInt(prompt("Seleccione qué producto desea añadir al carrito: \n1-Botella de Vodka 1L ($2500) \n2-Botella de vodka 750ml ($1800) \n3-Aperitivo sabor limón 1L ($1500) \n4-Aperitivo sabor limón 750ml ($1000) \n5-Vino mendocino 750ml ($2000 ) \n6-Tetra de vino 1L ($1000) \n(Ingresar 0 para terminar la selección)\nRecuerde que al superar los $11.000 recibira un 10% de descuento en el precio final."));
        
//         switch (seleccionProducto) {
//             case 1:
//                 carrito.push({nombre :productos [0], precio: productos[0]});
//             break;


//             case 2:
//                 carrito.push({ nombre: productos[1], precio: productos[1] });
//                 break;


//             case 3:
//                 carrito.push({ nombre: productos[2], precio: productos[2] });
//                 break;



//             case 4:
//                 carrito.push({ nombre: productos[3], precio: productos[3] });
//                 break;


//             case 5:
//                 carrito.push({ nombre: productos[4], precio: productos[4] });
//                 break;


//             case 6:
//                 carrito.push({ nombre: productos[5], precio: productos[5] });
//                 break;


//             case 0:
//                 break;
//             default:
//                 alert("Producto no válido. Vuelva a intentarlo.");
//                 break;
            
//         }
//     } while (seleccionProducto !== 0);


//     const total = calculateTotal(carrito);

//     alert("Total a pagar: $" + carrito);
//     const fechaHoy = (new Date());
//     alert("La factura será impresa con la fecha:" +fechaHoy)
// }

// añadirProductosAlCarrito();
// //TERMINA CARRITO
// }


// empieza la modificacion del index (dom)
// Arrays


let carrito = [];
let total = 0;

function renderizarProductos(productos) {
    const contenedor = document.getElementById("contenedor");

    for (const producto of productos) {
        const divPadre = document.createElement("div");
        divPadre.className = "col-12 col-sm-4 mb-4";

        const divCard = document.createElement("div");
        divCard.className = "card";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerText = producto.nombre;

        const p = document.createElement("p");
        p.className = "card-text";
        p.innerHTML = `<strong> Precio: </strong> $${producto.precio}`;

        const button = document.createElement("button");
        button.className = "btn btn-success";
        button.innerHTML = "Añadir al carrito";

        button.addEventListener("click", function () {
            agregarAlCarrito(producto);
        });

        // Insertar elementos uno dentro del otro (de abajo para arriba)
        cardBody.append(h5, p, button);
        divCard.append(cardBody);
        divPadre.append(divCard);

        contenedor.append(divPadre);
    }
}

//empieza funcion para agregar al carrito 
function agregarAlCarrito(producto) {
    carrito.push({ producto, precio: producto.precio });
    saveLocal();
    total += producto.precio;

    if (total >= 15000) {
        aplicarDescuento();
    }

    console.log("Carrito:", carrito);
    console.log("Total:", total);
}

// funcion empieza en casp de aplicar el descuento de 20%
function aplicarDescuento() {
    const descuento = total * 0.2;
    total -= descuento;

    console.log("Descuento aplicado:", descuento);
    console.log("Total después del descuento:", total);
}


document.addEventListener("DOMContentLoaded", function () {
    // Llamada a la función para renderizar productos (hecho con ayuda de IA ya que no podia ejecutarlo de manera correcta por mi cuenta y no encontraba el error para corregirlo.)
    renderizarProductos(productos);
});


// funcion para guardar carro en localStorage

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}