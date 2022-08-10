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

console.log(mueblesDisponibles);


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

