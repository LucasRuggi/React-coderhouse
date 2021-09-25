const productos = [
  {
    titulo: "Velador Cubo",
    categoria: "veladores",
    img: "/img/imgProductos/VeladorCubo.png",
    descripcion:
      "Es un velador cubo de 7x7 de madera de pino, cuenta con un acabado de barniz para una mejor terminacion",
    precio: 1799,
    id: "1",
    cantidad: 3,
  },
  {
    titulo: "Velador Tulipa",
    categoria: "veladores",
    img: "/img/imgProductos/VeladorTulipa.png",
    descripcion:
      "El velador tulipa cuenta con una base de madera de aglomerado con un acabado en barniz y una tulipa de vidrio",
    precio: 2199,
    id: "2",
    cantidad: 2,
  },
  {
    titulo: "Espejo Loren",
    categoria: "espejos",
    img: "/img/imgProductos/espejoLoren.png",
    descripcion:
      "Es un espejo con luces, su medida es de 45cm x 70 cm, las luces son leds con un consumo de 3W y tiene una terminacion en color blanco",
    precio: 6699,
    id: "3",
    cantidad: 4,
  },
  {
    titulo: "Lampara Colgante",
    categoria: "lamparas",
    img: "/img/imgProductos/lamparaColgante.png",
    descripcion:
      "Es una lampara para pared, que cuenta con un cable de color negro y un acabado de barniz. La madera es de pino para mejor terminacion",
    precio: 2199,
    id: "4",
    cantidad: 5,
  },
];

export const getFetch = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos);
  }, 100);
});
