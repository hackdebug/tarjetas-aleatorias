// Lista de imágenes de tarjetas
const cards = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/4.png',
    'images/5.png',
    'images/6.png',
    'images/7.png',
    'images/8.png',
    'images/9.png',
    'images/10.png',
    'images/11.png',
    'images/12.png',
    'images/13.png',
    'images/14.png',
    'images/15.png',
    'images/16.png',
    'images/17.png',
    'images/18.png',
    'images/19.png',
    'images/20.png',
    'images/21.png',
    'images/22.png',
    'images/23.png',
    'images/24.png',
    'images/25.png',
    'images/26.png',
    'images/27.png',
    'images/28.png',
    'images/29.png',
    'images/30.png',
    'images/31.png',
    'images/32.png',
    'images/33.png',
    'images/34.png',
    'images/35.png',
    'images/36.png',
    'images/37.png',
    'images/38.png',
    'images/39.png',
    'images/40.png',
    // Añade más nombres de imágenes si tienes más tarjetas
];

// Función para mostrar una tarjeta aleatoria
function showRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomIndex];
    
    // Mostrar la imagen en el contenedor
    document.getElementById('card').src = randomCard;
}
