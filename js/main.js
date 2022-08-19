const mueblesDisponibles = [];

class Mueble {
    constructor(id, image, tipo, nombre, precio) {
        this.id = id
        this.img = image
        this.tipo = tipo
        this.nombre = nombre
        this.precio = precio
    }
};

const mueble1 = new Mueble(1, "mesa-alaia1.webp", "Mesa", "Alaia", 1690);
mueblesDisponibles.push(mueble1);

const mueble2 = new Mueble(2, "mesa-anit1.webp", "Mesa", "Anit", 665);
mueblesDisponibles.push(mueble2);

const mueble3 = new Mueble(3, "sofa-brida1.webp", "Sofa", "Brida", 1415);
mueblesDisponibles.push(mueble3);

const mueble4 = new Mueble(4, "silla-ralf1.webp", "Silla", "Ralf", 180);
mueblesDisponibles.push(mueble4);

const mueble5 = new Mueble(5, "silla-nayme1.webp", "Silla", "Nayme", 275);
mueblesDisponibles.push(mueble5);

const mueble6 = new Mueble(6, "cuadro-lorelai1.webp", "Cuadro", "Lorelai", 85);
mueblesDisponibles.push(mueble6);

const mueble7 = new Mueble(7, "escritorio-curie1.webp", "Escritorio", "Curie", 586);
mueblesDisponibles.push(mueble7);

const mueble8 = new Mueble(8, "sofa-gilma1.webp", "Sofa", "Gilma", 2135);
mueblesDisponibles.push(mueble8);



const cardSection = document.querySelector('#cardContainer');

mostrarProd(mueblesDisponibles);

function mostrarProd(array) {

    array.forEach((producto)=> {
        const divCard = document.createElement('div');
        divCard.className = "productCard";

        divCard.innerHTML = `
            <h4>${producto.nombre}</h4>
            <img src="./assets/image/${producto.img}" alt="Imagen del Producto ${producto.nombre} en venta">
            <p>${producto.tipo}</p>
            <p>U$S ${producto.precio}</p>
        `;
        cardSection.appendChild(divCard);
    })
};



// Apretar boton y se filtra por tipo

const botonTodos = document.querySelector('#btnTodos')

botonTodos.addEventListener('click', mostrarTodo)

function mostrarTodo() {
    cardSection.innerHTML = '';
    mostrarProd(mueblesDisponibles);
}

const botonMesa = document.querySelector('#btnMesa')

botonMesa.addEventListener('click', mostrarMesas)

function mostrarMesas() {
    const mesasDisponibles = mueblesDisponibles.filter(elemento => {
        return elemento.tipo.includes('Mesa')
    });
    cardSection.innerHTML = '';
    mostrarProd(mesasDisponibles);
}

const botonSillas = document.querySelector('#btnSillas')

botonSillas.addEventListener('click', mostrarSillas)

function mostrarSillas() {
    const sillasDisponibles = mueblesDisponibles.filter(elemento => {
        return elemento.tipo.includes('Silla')
    });
    cardSection.innerHTML = '';
    mostrarProd(sillasDisponibles);
}


const botonSofas = document.querySelector('#btnSofas')

botonSofas.addEventListener('click', mostrarSofas)

function mostrarSofas() {
    const sofasDisponibles = mueblesDisponibles.filter(elemento => {
        return elemento.tipo.includes('Sofa')
    });
    cardSection.innerHTML = '';
    mostrarProd(sofasDisponibles);
}


const botonDeco = document.querySelector('#btnDeco')

botonDeco.addEventListener('click', mostrarDeco)

function mostrarDeco() {
    const decoDisponibles = mueblesDisponibles.filter(elemento => {
        return elemento.tipo.includes('Cuadro')
    });
    cardSection.innerHTML = '';
    mostrarProd(decoDisponibles);
}


const botonEscrit = document.querySelector('#btnEscrit')

botonEscrit.addEventListener('click', mostrarEscrit)

function mostrarEscrit() {
    const escritDisponibles = mueblesDisponibles.filter(elemento => {
        return elemento.tipo.includes('Escritorio')
    });
    cardSection.innerHTML = '';
    mostrarProd(escritDisponibles);
}