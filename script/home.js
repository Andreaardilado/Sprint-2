<<<<<<< HEAD

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
    

=======
>>>>>>> 97e0b0198d8e48aee310b0a3af853e035fb76148

















































































































































































































































































<<<<<<< HEAD
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
=======



















const productos= [
  {
    id: 1, 
    nombre: "Bracelet", 
    codigo: "B0123",
    precioUnitario: 125.28,
    tipoAccesorio: "Bracelet",
    imagenes: "../images/",
    descripcion: "Bracelet",
    cantidadColor:{
       "Rose Gold":0,
       "Silver": 0,
       "Gold": 0,
>>>>>>> 97e0b0198d8e48aee310b0a3af853e035fb76148
    },
    cantidadTalla:{
        "48": 0,
        "50": 0,
        "52": 0,
        "54": 0,
        "56": 0,
        "58": 0,
        "60": 0,
        "62": 0,
        "64": 0,
        "66": 0,
        "68": 0,
        "70": 0,
},
},
];
    
const productos= [
  {
    id: 1, 
    nombre: "Luxury Gems Necklace",
    codigo: "N0123",
    precioUnitario: 168.76,
    tipoAccesorio: "Necklace",
    imagenes: "../images/Luxury Gems Necklace.png",
    descripcion: "Collar gema rosada",
    cantidadColor:{
      "Rose Gold":0,
      "Silver": 0,
      "Gold": 0,
    },
    cantidadTalla:{
        "48": 0,
        "50": 0,
        "52": 0,
        "54": 0,
        "56": 0,
        "58": 0,
        "60": 0,
        "62": 0,
        "64": 0,
        "66": 0,
        "68": 0,
        "70": 0,
},
},

  {
        id:  
        nombre: "Reflections Necklace", 
        codigo: "N0124",
        precioUnitario:620.73,
        tipoAccesorio: "Necklace",
        imagenes: "../images/Reflections Necklace.png",
        descripcion: "Collar serpiente rojo-negro-dorado",
        cantidadColor:{
          "Rose Gold":0,
          "Silver": 0,
          "Gold": 0,
        },
        cantidadTalla:{
            "48": 0,
            "50": 0,
            "52": 0,
            "54": 0,
            "56": 0,
            "58": 0,
            "60": 0,
            "62": 0,
            "64": 0,
            "66": 0,
            "68": 0,
            "70": 0,
    },
  },

  {
    id:  
    nombre: "Radiance Necklace", 
    codigo: "N0125",
    precioUnitario:168.76,
    tipoAccesorio: "Necklace",
    imagenes:  "../images/Image 1(1).jpg" ,
    descripcion: "collar doble dorado home",
    cantidadColor:{
      "Rose Gold":0,
      "Silver": 0,
      "Gold": 0,
    },
    cantidadTalla:{
        "48": 0,
        "50": 0,
        "52": 0,
        "54": 0,
        "56": 0,
        "58": 0,
        "60": 0,
        "62": 0,
        "64": 0,
        "66": 0,
        "68": 0,
        "70": 0,
},
},

{
  id:  
  nombre: "Glamour Necklace", 
  codigo: "N0126",
  precioUnitario:620.73
  tipoAccesorio: "Necklace",
  imagenes:  "../images/Image 1 (3).jpg",
  descripcion: "collar 4 circulos home",
  cantidadColor:{
    "Rose Gold":0,
    "Silver": 0,
    "Gold": 0,
  },
  cantidadTalla:{
      "48": 0,
      "50": 0,
      "52": 0,
      "54": 0,
      "56": 0,
      "58": 0,
      "60": 0,
      "62": 0,
      "64": 0,
      "66": 0,
      "68": 0,
      "70": 0,
},
},

{
  id:  
  nombre: "Radiant Reflections", 
  codigo: "N0127",
  precioUnitario:
  tipoAccesorio: "Necklace",
  imagenes:  "../images/Image 4b.png",
  descripcion: "collar esmeraldas",
  cantidadColor:{
       "Rose Gold":0,
       "Silver": 0,
       "Gold": 0,
  },
  cantidadTalla:{
      "48": 0,
      "50": 0,
      "52": 0,
      "54": 0,
      "56": 0,
      "58": 0,
      "60": 0,
      "62": 0,
      "64": 0,
      "66": 0,
      "68": 0,
      "70": 0,
},
},

{
  id:  
  nombre: "Majestic Mementos", 
  codigo: "N0128",
  precioUnitario:
  tipoAccesorio: "Necklace",
  imagenes: "../images/Image 4d.png",
  descripcion: "collar perlas colores",
  cantidadColor:{
       "Rose Gold":0,
       "Silver": 0,
       "Gold": 0,
  },
  cantidadTalla:{
      "48": 0,
      "50": 0,
      "52": 0,
      "54": 0,
      "56": 0,
      "58": 0,
      "60": 0,
      "62": 0,
      "64": 0,
      "66": 0,
      "68": 0,
      "70": 0,
},
},
];
<<<<<<< HEAD

function tipoProducto(productos, nombreproducto) {
    return productos.filter(producto => producto.tipoAccesorio === nombreproducto);
  }
console.log(filtroProducto);
=======
>>>>>>> 97e0b0198d8e48aee310b0a3af853e035fb76148
