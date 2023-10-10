// - Inserire tutte le immagini dinamicamente servendoci dell’array
const images = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp",
]
console.log(images)

// - recuperare l'elemento "carousel" dal dom
const carouselDOMElement = document.querySelector(".carousel")

// - Inizializzare il ciclo for per il carosello
for (let i = 0; i < images.length; i++){
    let imageCarousel = images[i]
    
// - concatenare un template literal
const carouselString = `
<div>
    <img src="${imageCarousel}">
</div>
`

// - Stampare in pagina le immagini del carosello
carouselDOMElement.innerHTML = carouselString
}

// const btnUpString = `
// <button>
//     <i class="fa-solid fa-chevron-up"></i>
// </button>
// `
// const btnDownString = `
// <button>
//     <i class="fa-solid fa-chevron-down">
// </i></button>
// `

