//Declarar una lista de los productos con los siguientes datos: id, nombre, código, precio
//unitario, tipo de accesorio (anillo, brazalete, collar, aretes, etc.), imágenes, descripción,
//cantidad en stock por color y/o talla

//acá creamos un array con la lista de los productos:
const productos = [
  {
    id: 1,
    nombre: "Aurora Ring",
    codigo: "AN123",
    precioUnitario: 125.28,
    tipoAccesorio: "anillo",
    imagenes: "../images/Aurora Ring.png",
    descripcion: "Anillo diamantado olas",
    cantidadColor: {
      "Rose Gold": 31,
      Silver: 38,
    },
    cantidadTalla: {
      48: 3,
      50: 7,
      52: 0,
      54: 6,
      56: 2,
      58: 9,
      60: 10,
      62: 4,
      64: 15,
      66: 5,
      68: 2,
      70: 6,
    },
  },
  {
    id: 2,
    nombre: "Dreamy Infinity Ring",
    codigo: "AN124",
    precioUnitario: 327.71,
    tipoAccesorio: "anillo",
    imagenes: "../images/Dreamy Infinity Ring.png",
    descripcion: "Anillo diamante rosa",
    cantidadColor: {
      "Rose Gold": 40,
      Silver: 18,
    },
    cantidadTalla: {
      48: 4,
      50: 7,
      52: 0,
      54: 0,
      56: 5,
      58: 10,
      60: 10,
      62: 4,
      64: 5,
      66: 5,
      68: 2,
      70: 6,
    },
  },
  {
    id: 3,
    nombre: "Opulent Jewels Ring",
    codigo: "AN125",
    precioUnitario: 168.76,
    tipoAccesorio: "anillo",
    imagenes: "../images/Opulent Jewels Ring.png",
    descripcion: "Anillo gato",
    cantidadColor: {
      "Rose Gold": 31,
      Silver: 38,
    },
    cantidadTalla: {
      48: 3,
      50: 7,
      52: 0,
      54: 6,
      56: 2,
      58: 9,
      60: 10,
      62: 4,
      64: 15,
      66: 5,
      68: 2,
      70: 6,
    },
  },
  {
    id: 4,
    nombre: "Timeless Elegance Ring",
    codigo: "AN126",
    precioUnitario: 125.28,
    tipoAccesorio: "anillo",
    imagenes: "../images/Timeless Elegance Ring.png",
    descripcion: "3 en 1 lila",
    cantidadColor: {
      "Rose Gold": 40,
      Silver: 18,
    },
    cantidadTalla: {
      48: 4,
      50: 7,
      52: 0,
      54: 0,
      56: 5,
      58: 10,
      60: 10,
      62: 4,
      64: 5,
      66: 5,
      68: 2,
      70: 6,
    },
  },
  {
    id: 5,
    nombre: "Luxury Charms Ring",
    codigo: "AN127",
    precioUnitario: 620.73,
    tipoAccesorio: "anillo",
    imagenes: "../images/Luxury Charms Ring.png",
    descripcion: "Duo perla naranja",
    cantidadColor: {
      "Rose Gold": 31,
      Silver: 38,
    },
    cantidadTalla: {
      48: 3,
      50: 7,
      52: 0,
      54: 6,
      56: 2,
      58: 9,
      60: 10,
      62: 4,
      64: 15,
      66: 5,
      68: 2,
      70: 6,
    },
  },
  {
    id: 6,
    nombre: "Blissful Bloom Ring",
    codigo: "AN128",
    precioUnitario: 620.73,
    tipoAccesorio: "anillo",
    imagenes: "../images/Blissful Bloom Ring.png",
    descripcion: "Anillo hojas",
    cantidadColor: {
      "Rose Gold": 40,
      Silver: 18,
    },
    cantidadTalla: {
      48: 4,
      50: 7,
      52: 0,
      54: 0,
      56: 5,
      58: 10,
      60: 10,
      62: 4,
      64: 5,
      66: 5,
      68: 2,
      70: 6,
    },
  },
  {
    id: 7,
    nombre: "Sparkling Ring",
    codigo: "AN129",
    precioUnitario: 620.73,
    tipoAccesorio: "anillo",
    imagenes: "../images/Sparkling Ring.png",
    descripcion: "Anillo redondo diamantado",
    cantidadColor: {
      "Rose Gold": 31,
      Silver: 38,
    },
    cantidadTalla: {
      48: 3,
      50: 7,
      52: 0,
      54: 6,
      56: 2,
      58: 9,
      60: 10,
      62: 4,
      64: 15,
      66: 5,
      68: 2,
      70: 6,
    },
  },
  {
    id: 8,
    nombre: "Glimmering Ring",
    codigo: "AN130",
    precioUnitario: 620.73,
    tipoAccesorio: "anillo",
    imagenes: ".../images/Glimmering Ring.png",
    descripcion: "Anillo diamantado encadenado",
    cantidadColor: {
      "Rose Gold": 40,
      Silver: 18,
    },
    cantidadTalla: {
      48: 4,
      50: 7,
      52: 0,
      54: 0,
      56: 5,
      58: 10,
      60: 10,
      62: 4,
      64: 5,
      66: 5,
      68: 2,
      70: 6,
    },
  },
  {
    id: 9,
    nombre: "Divine Diamonds",
    codigo: "AN131",
    precioUnitario: 620.73,
    tipoAccesorio: "anillo",
    imagenes: "../images/Image4f.png",
    descripcion: "Anillo diamante",
    cantidadColor: {
      Gold: 31,
      Silver: 38,
    },
    cantidadTalla: {
      48: 3,
      50: 7,
      52: 0,
      54: 6,
      56: 2,
      58: 9,
      60: 10,
      62: 4,
      64: 15,
      66: 5,
      68: 2,
      70: 6,
    },
  },
  {
    id: 10,
    nombre: "Shimmering Stones",
    codigo: "AN132",
    precioUnitario: 168.76,
    tipoAccesorio: "anillo",
    imagenes: "../images/Image 7 (1).png",
    descripcion: "Anillo incrustación rosa",
    cantidadColor: {
      Gold: 40,
      Silver: 18,
    },
    cantidadTalla: {
      48: 4,
      50: 7,
      52: 0,
      54: 0,
      56: 5,
      58: 10,
      60: 10,
      62: 4,
      64: 5,
      66: 5,
      68: 2,
      70: 6,
    },
  },
  {
    id: 11,
    nombre: "Bracelet",
    codigo: "B0123",
    precioUnitario: 125.28,
    tipoAccesorio: "Bracelet",
    imagenes: "../images/",
    descripcion: "Bracelet",
    cantidadColor: {
      "Rose Gold": 0,
      Silver: 0,
      Gold: 0,
    },
    cantidadTalla: {
      48: 0,
      50: 0,
      52: 0,
      54: 0,
      56: 0,
      58: 0,
      60: 0,
      62: 0,
      64: 0,
      66: 0,
      68: 0,
      70: 0,
    },
  },
  {
    id: 12,
    nombre: "Luxury Gems Necklace",
    codigo: "N0123",
    precioUnitario: 168.76,
    tipoAccesorio: "Necklace",
    imagenes: "../images/Luxury Gems Necklace.png",
    descripcion: "Collar gema rosada",
    cantidadColor: {
      "Rose Gold": 0,
      Silver: 0,
      Gold: 0,
    },
    cantidadTalla: {
      48: 0,
      50: 0,
      52: 0,
      54: 0,
      56: 0,
      58: 0,
      60: 0,
      62: 0,
      64: 0,
      66: 0,
      68: 0,
      70: 0,
    },
  },
  {
    id: 13,
    nombre: "Reflections Necklace",
    codigo: "N0124",
    precioUnitario: 620.73,
    tipoAccesorio: "Necklace",
    imagenes: "../images/Reflections Necklace.png",
    descripcion: "Collar serpiente rojo-negro-dorado",
    cantidadColor: {
      "Rose Gold": 0,
      Silver: 0,
      Gold: 0,
    },
    cantidadTalla: {
      48: 0,
      50: 0,
      52: 0,
      54: 0,
      56: 0,
      58: 0,
      60: 0,
      62: 0,
      64: 0,
      66: 0,
      68: 0,
      70: 0,
    },
  },
  {
    id: 14,
    nombre: "Radiance Necklace",
    codigo: "N0125",
    precioUnitario: 168.76,
    tipoAccesorio: "Necklace",
    imagenes: "../images/Image 1(1).jpg",
    descripcion: "collar doble dorado home",
    cantidadColor: {
      "Rose Gold": 0,
      Silver: 0,
      Gold: 0,
    },
    cantidadTalla: {
      48: 0,
      50: 0,
      52: 0,
      54: 0,
      56: 0,
      58: 0,
      60: 0,
      62: 0,
      64: 0,
      66: 0,
      68: 0,
      70: 0,
    },
  },
  {
    id: 15,
    nombre: "Glamour Necklace",
    codigo: "N0126",
    precioUnitario: 620.73,
    tipoAccesorio: "Necklace",
    imagenes: "../images/Image 1 (3).jpg",
    descripcion: "collar 4 circulos home",
    cantidadColor: {
      "Rose Gold": 0,
      Silver: 0,
      Gold: 0,
    },
    cantidadTalla: {
      48: 0,
      50: 0,
      52: 0,
      54: 0,
      56: 0,
      58: 0,
      60: 0,
      62: 0,
      64: 0,
      66: 0,
      68: 0,
      70: 0,
    },
  },

  {
    id: 16,
    nombre: "Radiant Reflections",
    codigo: "N0127",
    precioUnitario: 200.1,
    tipoAccesorio: "Necklace",
    imagenes: "../images/Image 4b.png",
    descripcion: "collar esmeraldas",
    cantidadColor: {
      "Rose Gold": 0,
      Silver: 0,
      Gold: 0,
    },
    cantidadTalla: {
      48: 0,
      50: 0,
      52: 0,
      54: 0,
      56: 0,
      58: 0,
      60: 0,
      62: 0,
      64: 0,
      66: 0,
      68: 0,
      70: 0,
    },
  },
  {
    id: 17,
    nombre: "Majestic Mementos",
    codigo: "N0128",
    precioUnitario: 200.32,
    tipoAccesorio: "Necklace",
    imagenes: "../images/Image 4d.png",
    descripcion: "collar perlas colores",
    cantidadColor: {
      "Rose Gold": 0,
      Silver: 0,
      Gold: 0,
    },
    cantidadTalla: {
      48: 0,
      50: 0,
      52: 0,
      54: 0,
      56: 0,
      58: 0,
      60: 0,
      62: 0,
      64: 0,
      66: 0,
      68: 0,
      70: 0,
    },
  },
  {
    id: 18,
    nombre: "Serene Solitaire Earrings",
    codigo: "AR123",
    precioUnitario: 125.28,
    tipoAccesorio: "aretes",
    imagenes: "../images/Serene Solitaire Earrings.png",
    descripcion: "Aretes de perlas azules en forma de corazón",
    cantidadColor: {
      Gold: 20,
      Silver: 8,
    },
    cantidadTalla: {
      48: 2,
      50: 2,
      52: 2,
      54: 2,
      56: 2,
      58: 2,
      60: 2,
      62: 2,
      64: 2,
      66: 2,
      68: 2,
      70: 4,
    },
  },
  {
    id: 29,
    nombre: "Serene Solitaire Earrings",
    codigo: "AR124",
    precioUnitario: 620.73,
    tipoAccesorio: "aretes",
    imagenes: "../images/Timeless Halo Earrings.png",
    descripcion: "Aretes crital cuadrado",
    cantidadColor: {
      Gold: 2,
      Silver: 18,
    },
    cantidadTalla: {
      48: 2,
      50: 0,
      52: 2,
      54: 2,
      56: 2,
      58: 2,
      60: 2,
      62: 0,
      64: 2,
      66: 2,
      68: 2,
      70: 2,
    },
  },
  {
    id: 20,
    nombre: "Exquisite Earrings",
    codigo: "AR125",
    precioUnitario: 620.73,
    tipoAccesorio: "aretes",
    imagenes: "../images/Exquisite Earrings.png",
    descripcion: "Aretes gota de agua tallados",
    cantidadColor: {
      Gold: 9,
      Silver: 11,
    },
    cantidadTalla: {
      48: 2,
      50: 0,
      52: 2,
      54: 2,
      56: 2,
      58: 2,
      60: 2,
      62: 0,
      64: 2,
      66: 2,
      68: 2,
      70: 2,
    },
  },
  {
    id: 21,
    nombre: "Luxury Charms Ring",
    codigo: "AR126",
    precioUnitario: 620.73,
    tipoAccesorio: "aretes",
    imagenes: "../images/Luxury Charms Ring.png",
    descripcion: "Candongas gruesas",
    cantidadColor: {
      Gold: 4,
      Silver: 21,
    },
    cantidadTalla: {
      48: 2,
      50: 2,
      52: 2,
      54: 2,
      56: 2,
      58: 2,
      60: 2,
      62: 2,
      64: 2,
      66: 2,
      68: 2,
      70: 2,
    },
  },
  {
    id: 22,
    nombre: "Delights Earrings",
    codigo: "AR127",
    precioUnitario: 321.71,
    tipoAccesorio: "aretes",
    imagenes: "../images/Image (2).png",
    descripcion: "Candongas delfines",
    cantidadColor: {
      Gold: 24,
      Silver: 12,
    },
    cantidadTalla: {
      48: 2,
      50: 2,
      52: 2,
      54: 2,
      56: 2,
      58: 2,
      60: 2,
      62: 2,
      64: 2,
      66: 2,
      68: 2,
      70: 14,
    },
  },
  {
    id: 23,
    nombre: "Exquisite Ornaments",
    codigo: "AR128",
    precioUnitario: 125.28,
    tipoAccesorio: "aretes",
    imagenes: " ../images/Image 7 (2).png",
    descripcion: "Ramas verdes menta",
    cantidadColor: {
      Gold: 12,
      Silver: 4,
    },
    cantidadTalla: {
      48: 2,
      50: 1,
      52: 1,
      54: 1,
      56: 1,
      58: 1,
      60: 1,
      62: 1,
      64: 1,
      66: 1,
      68: 1,
      70: 4,
    },
  },
  {
    id: 24,
    nombre: "Luxurious Lustre",
    codigo: "AR129",
    precioUnitario: 425.28,
    tipoAccesorio: "aretes",
    imagenes: " ../images/Image 4a.png",
    descripcion: "Cinco perlas e imagen crital",
    cantidadColor: {
      Gold: 17,
      Silver: 12,
    },
    cantidadTalla: {
      48: 2,
      50: 2,
      52: 2,
      54: 2,
      56: 2,
      58: 2,
      60: 2,
      62: 3,
      64: 3,
      66: 3,
      68: 3,
      70: 3,
    },
  },
  {
    id: 25,
    nombre: "Timeless Treasures",
    codigo: "AR130",
    precioUnitario: 125.28,
    tipoAccesorio: "aretes",
    imagenes: " ../images/Image 4e.png",
    descripcion: "Candongas dobles caracol",
    cantidadColor: {
      Gold: 8,
      Silver: 14,
    },
    cantidadTalla: {
      48: 2,
      50: 2,
      52: 2,
      54: 2,
      56: 2,
      58: 2,
      60: 2,
      62: 1,
      64: 1,
      66: 1,
      68: 1,
      70: 4,
    },
  },
];
// Escribir una función que reciba como parámetros un array de productos y el nombre de
// un tipo de producto, que utilice la función de array que permita filtrar la lista por la
// categoría o tipo y devuelva el array resultante. Luego, llamar la función pasándole como
// argumentos la lista de productos declarado en el ítem anterior y cualquier tipo de
// accesorio que exista en la lista y, por último, mostrar el resultado en la consola del
// navegador.

const tipoProductoFiltro = (listaProductos, tipoProducto) => {
  return listaProductos.filter(
    (producto) => producto.tipoAccesorio === tipoProducto
  );
}; //definir paso a paso qué debe hacer una función

const producto /*Cree esta variable para que console imprima y es igual a la función*/ =
  tipoProductoFiltro(productos, "Necklace");
console.log(producto /*aca la llamo inmediatamente*/);

// Escribir una función que realice la búsqueda de productos por nombre, reciba como
// parámetro un array de productos y un término de búsqueda (es decir, una cadena de
// caracteres) y retorne un array con todos los productos cuyos nombres contengan los
// caracteres del segundo parámetro. Luego, llamar la función pasándole como argumentos
// datos de prueba y mostrar el resultado en la consola del navegador

const tipoProductoBusqueda = (listaProductos, productoPorNombre) => {
  return listaProductos.filter(
    (producto) =>
      producto.nombre.toLowerCase().indexOf(productoPorNombre) !== -1
  );
};
// indexOf(elemento): Devuelve el índice de la primera ocurrencia del elemento en el array. Si
// no se encuentra, devuelve -1.
const nombreDeProducto = tipoProductoBusqueda(productos, "rin");
console.log(nombreDeProducto);

<<<<<<< HEAD
=======

<<<<<<< HEAD
/* 4. Crear una función que ordene un array de productos por precios de manera ascendente y descendente 
  y retorne el array resultante. Ejecutar la función y mostrar el resultado en consola.*/
  
  const ordenar = (productos, ascendente = true) => {
    return [...productos].sort((a, b) =>
      ascendente
        ? a.precioUnitario - b.precioUnitario
        : b.precioUnitario - a.precioUnitario
    );
  };
  
  console.log("Descendente: ", ordenar(productos, false));
  console.log("Ascendente: ", ordenar(productos));
=======





>>>>>>> 4bf74bbd19217cfc3dfbf179afe1c8971eeab30c

// 5- Crear una función que calcule el total a pagar de una compra, reciba como parámetros un array de productos donde cada producto, 
// tenga como propiedades la cantidad y precio unitario del producto y devuelva el valor que corresponda a la sumatoria de la cantidad por el precio de cada producto.
// Ejecutar la función con datos de prueba y mostrar el resultado en la consola del navegador.
  let total = 0;
  const productos = [
    { nombre: 'Glamour Necklace', precio: 620.73},
    { nombre: 'Luxury Gems Necklace', precio:168.76},
    { nombre: 'Radiance Necklace', precio: 168.76 },
    { nombre: 'eflections Necklace', precio: 620.73 },
  ]; 
  
  // Ejecutarlo con un .reduce
  const totalCuenta = productos.reduce((total, producto) => {
    return total + producto.precio;
  }, 0);
  // total es el acumulador
  // producto es el objeto del arreglo
  // En producto se acumula todos los precios con las iteraciones y luego se las pasa al acumulador que es total*/
  
  console.log("Total Cuenta", totalCuenta);
  
>>>>>>> a94994670e51e4295365ee327810ceb6e84e3916
