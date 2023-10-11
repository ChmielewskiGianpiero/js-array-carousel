// - Inserire tutte le immagini dinamicamente servendoci dell’array
const images = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp",
]
console.log(images);


// - recuperare l"elemento "carousel" dal dom
const carouselDOMElement = document.querySelector(".carousel")


// - Inizializzare il ciclo for per il carosello
for (let i = 0; i < images.length; i++){
let imageCarousel = images[i];
    
// - concatenare un template literal
const carouselString = `<img class="carousel-item" src="${imageCarousel}">`;


// - Stampare in pagina le immagini del carosello
carouselDOMElement.innerHTML = carouselString + carouselDOMElement.innerHTML;
console.log (imageCarousel, i, carouselString, carouselDOMElement)

}


// - Recuperare le immagini all"interno del carousel dal dom
const itemDOMElements = document.querySelectorAll(".carousel-item");


// - Memorizzare lo stato del carosello
let currentIndex = 0;


// - Aggiungere la classe active all"immagine attiva
let currentImg = itemDOMElements[currentIndex];
currentImg.classList.add("active");
console.log(currentImg)



// - Dichiarare i controlli del carosello
const btnTop = document.querySelector(".btn-up");
const btnBottom = document.querySelector(".btn-down");

btnTop.addEventListener("click", function () {
    itemDOMElements[currentIndex].classList.remove("active");
    currentIndex++;
    itemDOMElements[currentIndex].classList.add("active");
	console.log(currentImg, currentIndex);
})

btnBottom.addEventListener("click", function () {
    itemDOMElements[currentIndex].classList.remove("active");
    currentIndex--;
    itemDOMElements[currentIndex].classList.add("active");
	console.log(currentImg, currentIndex);
})



