const cardSection = document.querySelector('#cardContainer');
const botonTodos = document.querySelector('#btnTodos');
const botonMesa = document.querySelector('#btnMesa');
const botonSillas = document.querySelector('#btnSillas');
const botonSofas = document.querySelector('#btnSofas');
const botonDeco = document.querySelector('#btnDeco');
const botonEscrit = document.querySelector('#btnEscrit');

const mueblesDisponibles = [];

class Mueble {
    constructor(id, image, tipo, nombre, precio, cantidad) {
        this.id = id
        this.img = image
        this.tipo = tipo
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }
};

const mueble1 = new Mueble(1, "mesa-alaia1.webp", "Mesa", "Alaia", 1690, 5);
mueblesDisponibles.push(mueble1);

const mueble2 = new Mueble(2, "mesa-anit1.webp", "Mesa", "Anit", 665, 7);
mueblesDisponibles.push(mueble2);

const mueble3 = new Mueble(3, "sofa-brida1.webp", "Sofa", "Brida", 1415, 10);
mueblesDisponibles.push(mueble3);

const mueble4 = new Mueble(4, "silla-ralf1.webp", "Silla", "Ralf", 180, 20);
mueblesDisponibles.push(mueble4);

const mueble5 = new Mueble(5, "silla-nayme1.webp", "Silla", "Nayme", 275, 20);
mueblesDisponibles.push(mueble5);

const mueble6 = new Mueble(6, "cuadro-lorelai1.webp", "Cuadro", "Lorelai", 85, 10);
mueblesDisponibles.push(mueble6);

const mueble7 = new Mueble(7, "escritorio-curie1.webp", "Escritorio", "Curie", 586, 15);
mueblesDisponibles.push(mueble7);

const mueble8 = new Mueble(8, "sofa-gilma1.webp", "Sofa", "Gilma", 2135, 10);
mueblesDisponibles.push(mueble8);


mostrarProd(mueblesDisponibles);

function mostrarProd(array) {

    array.forEach((producto)=> {
        const divCard = document.createElement('div');
        divCard.className = "productCard";

        divCard.innerHTML = `
            <h4>${producto.nombre}</h4>
            <img src="./assets/image/${producto.img}" alt="Imagen del Producto ${producto.nombre} en venta">
            <p>${producto.tipo}</p>
            <div class="productBuy">
                <p>U$S ${producto.precio}</p>
                <button id="addToCart-btn" class="cart-btn" type="submit" onclick="addToCart(${producto.id})">Comprar</button>
            <div>
        `;
        cardSection.appendChild(divCard);
    })
};


// Apretar boton y se filtra por tipo

botonTodos.addEventListener('click', mostrarTodo);

function mostrarTodo() {
    cardSection.innerHTML = '';
    mostrarProd(mueblesDisponibles);
};

botonMesa.addEventListener('click', mostrarMesas);

function mostrarMesas() {
    const mesasDisponibles = mueblesDisponibles.filter(elemento => {
        return elemento.tipo.includes('Mesa')
    });
    cardSection.innerHTML = '';
    mostrarProd(mesasDisponibles);
};

botonSillas.addEventListener('click', mostrarSillas);

function mostrarSillas() {
    const sillasDisponibles = mueblesDisponibles.filter(elemento => {
        return elemento.tipo.includes('Silla')
    });
    cardSection.innerHTML = '';
    mostrarProd(sillasDisponibles);
};


botonSofas.addEventListener('click', mostrarSofas);

function mostrarSofas() {
    const sofasDisponibles = mueblesDisponibles.filter(elemento => {
        return elemento.tipo.includes('Sofa')
    });
    cardSection.innerHTML = '';
    mostrarProd(sofasDisponibles);
};


botonDeco.addEventListener('click', mostrarDeco);

function mostrarDeco() {
    const decoDisponibles = mueblesDisponibles.filter(elemento => {
        return elemento.tipo.includes('Cuadro')
    });
    cardSection.innerHTML = '';
    mostrarProd(decoDisponibles);
};


botonEscrit.addEventListener('click', mostrarEscrit)

function mostrarEscrit() {
    const escritDisponibles = mueblesDisponibles.filter(elemento => {
        return elemento.tipo.includes('Escritorio')
    });
    cardSection.innerHTML = '';
    mostrarProd(escritDisponibles);
};