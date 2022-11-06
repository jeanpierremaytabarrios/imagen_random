let imagen = document.querySelector(".imagen");
let boton = document.getElementById("boton");
const random_between = (min, max) => {
    return Math.round(Math.random()*(max-min) + min);
};

let arr = [
    "banana.jpg",
    "durazno.jpg",
    "mango.png",
    "manzana.jpg",
    "naranja.jpg",
    "papaya.jpg",
    "pera.jpg",
    "piña.jpg",
    "sandia.png",
    "uvas.jpg"
];

boton.addEventListener("click", ()=>{
    imagen.setAttribute("src", `img/${arr[random_between(0, arr.length - 1)]}`);
});