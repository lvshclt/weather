const $html = document.querySelector('html');
const images = ['0.jpg', '1.jpg', '2.jpg'];

const chosenImg = images[Math.floor(Math.random() * images.length)];
$html.style.background = `url(./img/${chosenImg}) no-repeat center center fixed`;
