
const  nombreproducto = "anillo";
const filtroProducto = tipoProducto(productos, nombreproducto);
const productos = [
    { 
        id: 1, 
        nombre: "Aurora Ring", 
        codigo: "A0123",
        precioUnitario: 125.28,
        tipoAccesorio: "anillo",
        imagenes: "../images/Aurora Ring.png",
        descripcion: "Anillo diamantado olas",
        cantidadColor:{
           "Rose Gold":31,
           "Silver": 38,
        },
        cantidadTalla:{
            "48": 3,
            "50": 7,
            "52": 0,
            "54": 6,
            "56": 2,
            "58": 9,
            "60": 10,
            "62": 4,
            "64": 15,
            "66": 5,
            "68": 2,
            "70": 6,
        },
    },
    { 
        id: 2, 
        nombre: "Dreamy Infinity Ring", 
        codigo: "A0124",
        precioUnitario: 327.71,
        tipoAccesorio: "anillo",
        imagenes: "../images/Dreamy Infinity Ring.png",
        descripcion: "Anillo diamante rosa",
        cantidadColor:{
           "Rose Gold":40,
           "Silver": 18,
        },
        cantidadTalla:{
            "48": 4,
            "50": 7,
            "52": 0,
            "54": 0,
            "56": 5,
            "58": 10,
            "60": 10,
            "62": 4,
            "64": 5,
            "66": 5,
            "68": 2,
            "70": 6,
        },
    },
    { 
        id: 3, 
        nombre: "Opulent Jewels Ring", 
        codigo: "A0125",
        precioUnitario: 168.76,
        tipoAccesorio: "anillo",
        imagenes: "../images/Opulent Jewels Ring.png",
        descripcion: "Anillo gato",
        cantidadColor:{
            "Rose Gold":31,
           "Silver": 38,
        },
        cantidadTalla:{
            "48": 3,
            "50": 7,
            "52": 0,
            "54": 6,
            "56": 2,
            "58": 9,
            "60": 10,
            "62": 4,
            "64": 15,
            "66": 5,
            "68": 2,
            "70": 6,
        },
    },
    { 
        id: 4, 
        nombre: "Timeless Elegance Ring", 
        codigo: "A0126",
        precioUnitario: 125.28,
        tipoAccesorio: "anillo",
        imagenes: "../images/Timeless Elegance Ring.png",
        descripcion: "3 en 1 lila",
        cantidadColor:{
            "Rose Gold":40,
            "Silver": 18,
         },
         cantidadTalla:{
             "48": 4,
             "50": 7,
             "52": 0,
             "54": 0,
             "56": 5,
             "58": 10,
             "60": 10,
             "62": 4,
             "64": 5,
             "66": 5,
             "68": 2,
             "70": 6,
         },
    },
    { 
        id: 5, 
        nombre: "Luxury Charms Ring", 
        codigo: "A0127",
        precioUnitario: 620.73,
        tipoAccesorio: "anillo",
        imagenes: "../images/Luxury Charms Ring.png",
        descripcion: "Duo perla naranja",
        cantidadColor:{
            "Rose Gold":31,
            "Silver": 38,
         },
         cantidadTalla:{
             "48": 3,
             "50": 7,
             "52": 0,
             "54": 6,
             "56": 2,
             "58": 9,
             "60": 10,
             "62": 4,
             "64": 15,
             "66": 5,
             "68": 2,
             "70": 6,
         },
    },
    { 
        id: 6, 
        nombre: "Blissful Bloom Ring", 
        codigo: "A0128",
        precioUnitario: 620.73,
        tipoAccesorio: "anillo",
        imagenes: "../images/Blissful Bloom Ring.png",
        descripcion: "Anillo hojas",
        cantidadColor:{
            "Rose Gold":40,
            "Silver": 18,
         },
         cantidadTalla:{
             "48": 4,
             "50": 7,
             "52": 0,
             "54": 0,
             "56": 5,
             "58": 10,
             "60": 10,
             "62": 4,
             "64": 5,
             "66": 5,
             "68": 2,
             "70": 6,
         },
    },
    { 
        id: 7, 
        nombre: "Sparkling Ring", 
        codigo: "A0129",
        precioUnitario: 620.73,
        tipoAccesorio: "anillo",
        imagenes: "../images/Sparkling Ring.png",
        descripcion: "Anillo redondo diamantado",
        cantidadColor:{
           "Rose Gold":31,
           "Silver": 38,
        },
        cantidadTalla:{
            "48": 3,
            "50": 7,
            "52": 0,
            "54": 6,
            "56": 2,
            "58": 9,
            "60": 10,
            "62": 4,
            "64": 15,
            "66": 5,
            "68": 2,
            "70": 6,
        },
    },
    { 
        id: 8, 
        nombre: "Glimmering Ring", 
        codigo: "A0110",
        precioUnitario: 620.73,
        tipoAccesorio: "anillo",
        imagenes: ".../images/Glimmering Ring.png",
        descripcion: "Anillo diamantado encadenado",
        cantidadColor:{
           "Rose Gold":40,
           "Silver": 18,
        },
        cantidadTalla:{
            "48": 4,
            "50": 7,
            "52": 0,
            "54": 0,
            "56": 5,
            "58": 10,
            "60": 10,
            "62": 4,
            "64": 5,
            "66": 5,
            "68": 2,
            "70": 6,
        },
    },
    { 
        id: 9, 
        nombre: "Divine Diamonds", 
        codigo: "A0111",
        precioUnitario: 620.73,
        tipoAccesorio: "anillo",
        imagenes: "../images/Image4f.png",
        descripcion: "Anillo diamante",
        cantidadColor:{
           "Gold":31,
           "Silver": 38,
        },
        cantidadTalla:{
            "48": 3,
            "50": 7,
            "52": 0,
            "54": 6,
            "56": 2,
            "58": 9,
            "60": 10,
            "62": 4,
            "64": 15,
            "66": 5,
            "68": 2,
            "70": 6,
        },
    },
    { 
        id: 10, 
        nombre: "Shimmering Stones", 
        codigo: "A0112",
        precioUnitario: 168.76,
        tipoAccesorio: "anillo",
        imagenes: "../images/Image 7 (1).png",
        descripcion: "Anillo incrustación rosa",
        cantidadColor:{
           "Gold":40,
           "Silver": 18,
        },
        cantidadTalla:{
            "48": 4,
            "50": 7,
            "52": 0,
            "54": 0,
            "56": 5,
            "58": 10,
            "60": 10,
            "62": 4,
            "64": 5,
            "66": 5,
            "68": 2,
            "70": 6,
        },
    },
    


















































































































































































































































































    { 
        id: 0 , 
        nombre: "Serene Solitaire Earrings", 
        codigo: "AR123",
        precioUnitario: 125.28,
        tipoAccesorio: "aretes",
        imagenes: "../images/Serene Solitaire Earrings.png",
        descripcion: "Aretes de perlas azules en forma de corazón",
        cantidadColor:{
           "Gold":20,
           "Silver": 8,
        }
    },
    { 
        id: 0 , 
        nombre: "Serene Solitaire Earrings", 
        codigo: "AR124",
        precioUnitario: 620.73,
        tipoAccesorio: "aretes",
        imagenes: "../images/Timeless Halo Earrings.png",
        descripcion: "Aretes crital cuadrado",
        cantidadColor:{
           "Gold":2,
           "Silver": 18,
        }
    },
    { 
        id: 0 , 
        nombre: "Exquisite Earrings", 
        codigo: "AR125",
        precioUnitario: 620.73,
        tipoAccesorio: "aretes",
        imagenes: "../images/Exquisite Earrings.png",
        descripcion: "Aretes gota de agua tallados",
        cantidadColor:{
           "Gold":9,
           "Silver": 11,
        }
    },
    { 
        id: 0 , 
        nombre: "Luxury Charms Ring", 
        codigo: "AR126",
        precioUnitario: 620.73,
        tipoAccesorio: "aretes",
        imagenes: "../images/Luxury Charms Ring.png",
        descripcion: "Candongas gruesas",
        cantidadColor:{
           "Gold":4,
           "Silver": 21,
        }
    },
    { 
        id: 0 , 
        nombre: "Delights Earrings", 
        codigo: "AR127",
        precioUnitario: 321.71,
        tipoAccesorio: "aretes",
        imagenes: "../images/Image (2).png",
        descripcion: "Candongas delfines",
        cantidadColor:{
           "Gold":24,
           "Silver": 11,
        }
    },
    { 
        id: 0 , 
        nombre: "Exquisite Ornaments", 
        codigo: "AR128",
        precioUnitario: 125.28,
        tipoAccesorio: "aretes",
        imagenes: " ../images/Image 7 (2).png",
        descripcion: "Ramas verdes menta",
        cantidadColor:{
           "Gold":12,
           "Silver": 4,
        }
    },
    { 
        id: 0 , 
        nombre: "Luxurious Lustre", 
        codigo: "AR129",
        precioUnitario: 425.28,
        tipoAccesorio: "aretes",
        imagenes: " ../images/Image 4a.png",
        descripcion: "Cinco perlas e imagen crital",
        cantidadColor:{
           "Gold":17,
           "Silver": 14,
        }
    },
    { 
        id: 0 , 
        nombre: "Timeless Treasures", 
        codigo: "AR130",
        precioUnitario: 125.28,
        tipoAccesorio: "aretes",
        imagenes: " ../images/Image 4e.png",
        descripcion: "Candongas dobles caracol",
        cantidadColor:{
           "Gold":7,
           "Silver": 14,
        }
    },
  
    
];

function tipoProducto(productos, nombreproducto) {
    return productos.filter(producto => producto.tipoAccesorio === nombreproducto);
  }
console.log(filtroProducto);
