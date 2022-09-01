// Carrito
const cartListSection = document.querySelector('#cartSection');
const cartListEmpty = document.querySelector('#cartEmpty');
const cartListFull = document.querySelector('#cartList');
//const botonCarrito = document.querySelector('#btnShop');
const botonCompra = document.querySelector('#cart-buy');
const listProducts = document.querySelector('#list-allProducts');
const totalProducts = document.querySelector('#totalProducts');
const totalProdPrice = document.querySelector('#totalPrice');

let cart = [];

// Agregar articulos al carrito

function addToCart(id) {
    // revisar si el producto ya esta en el carrito
    if(cart.some((item) => item.id === id)){
        Swal.fire({
            title: 'El producto ya está en el carrito!',
            text: 'Haga click en el carrito para ajustar la cantidad',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else {
        const item = mueblesDisponibles.find((mueble) => mueble.id === id);
        cart.push({
            ...item,
            cantidadUnidades: 1,
        });
        // TOAST MESSAGE
        Swal.fire({
            title: '¡Se agregó el producto al carrito!',
            icon: 'success',
            position: 'bottom-right',
            timer: 2000,
            showConfirmButton: false,
            toast: true
        });
    }

    updateCart();
};

// Actualizar carrito

function updateCart() {
    renderCartItems();
    renderTotal();
}

function renderCartItems() {
    listProducts.innerHTML = "";

    cart.forEach((item) => {
        listProducts.innerHTML += `
            <div class="list-product">
                <div>
                    <p>${item.tipo} ${item.nombre}</p>
                </div>
                <div>
                    <div class="counter">
                        <div class="counter-btn" onclick="changeNumUnits('plus', ${item.id})">+</div>
                        <div class="count">${item.cantidadUnidades}</div>
                        <div class="counter-btn" onclick="changeNumUnits('minus', ${item.id})">-</div>
                    </div>
                </div>
                <div class="list-price">
                    <div>
                        <p>U$S ${item.precio}</p>
                    </div>
                    <img id="btnDelete" class="deleteIcon" src="./assets/icons/x-mark.png" onclick="removeCartItems(${item.id})" 
                    alt="Quitar articulo de la compra">
                </div>
            </div>
        `
    });
};

/*function renderCartItems() {
    listProducts.innerHTML = "";

    cart.forEach((item) => {
        listProducts.innerHTML += `
            <div class="list-product">
                <p>${item.tipo} ${item.nombre}</p>
                <p>U$S ${item.precio}</p>
                <div class="counter">
                    <div class="counter-btn" onclick="changeNumUnits('plus', ${item.id})">+</div>
                    <div class="count">${item.cantidadUnidades}</div>
                    <div class="counter-btn" onclick="changeNumUnits('minus', ${item.id})">-</div>
                </div>
                <p>Total</p>
                <div>
                    <button class="cart-btn" type="submit" onclick="removeCartItems(${item.id})">Quitar</button>
                </div>
            </div>
        `
    });
}; */

// Quitar items del carrito

function removeCartItems(id) {
    cart = cart.filter((item) => item.id !== id);

    updateCart();
};

// Cambiar cantidad de items

function changeNumUnits(action, id) {
    cart = cart.map((item) => {
        let cantidadUnidades = item.cantidadUnidades;

        if(item.id === id) {
            if(action === "plus" && cantidadUnidades < item.cantidad){
                cantidadUnidades++;
            }else if(action === "minus" && cantidadUnidades > 1){
                cantidadUnidades--;
            }
        }
        return {
            ...item,
            cantidadUnidades,
        };
    });

    updateCart();
};

function renderTotal() {
    let totalPrice = 0;
    let totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.precio * item.cantidadUnidades;
        totalItems += item.cantidadUnidades;
    });
    totalProducts.innerHTML = `${totalItems}`;
    totalProdPrice.innerHTML = `U$S ${totalPrice}`;
};

// Boton carrito

// botonCarrito.addEventListener('click', showShoppingList);

// function showShoppingList() {
//     if(cart.length === 0){
//         cartListSection.classList.remove("hidden");
//         cartListEmpty.classList.remove("hidden");
//     } else if(cart.length >= 1){
//         cartListSection.classList.remove("hidden");
//         cartListEmpty.classList.add("hidden");
//         cartListFull.classList.remove("hidden");
//     }
// };

// Mensajes de alerta boton comprar

botonCompra.addEventListener('click', buyShoppingList);

function buyShoppingList(){
    if(cart.length >= 1){
        Swal.fire({
            title: '¡La compra se realizó con éxito!',
            text: 'Muchas gracias',
            icon: 'success',
            confirmButtonText: 'Ok'
        });
    } else {
        Swal.fire({
            title: '¡El carrito está vacío!',
            text: 'Elija los artículos a comprar',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    };
    emptyCart()
};

function emptyCart(){
    cart = [];
    setTimeout(reloadPage, 3000);
};

function reloadPage(){
    location.reload()
};

// sidenav carrito

const sectionSideCart = document.getElementById("sidenavCart");

function openNav() {
    sectionSideCart.style.width = "650px";
    document.getElementById("main").style.marginLeft = "650px";
}

function closeNav() {
    sectionSideCart.style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
} 