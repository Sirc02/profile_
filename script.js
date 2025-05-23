const image = document.getElementById("movingImage");

let posX = 100;
let posY = 100;
let speedX = 2;
let speedY = 2;

function moveImage() {
  const imgWidth = image.offsetWidth;
  const imgHeight = image.offsetHeight;
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;

  posX += speedX;
  posY += speedY;

  // Pantulan horizontal
  if (posX + imgWidth >= containerWidth || posX <= 0) {
    speedX *=-1;
  }

  // Pantulan vertikal
  if (posY + imgHeight >= containerHeight || posY <= 0) {
    speedY *= -1;
  }

  image.style.left = `${posX}px`;
  image.style.top = `${posY}px`;

  requestAnimationFrame(moveImage);
}

// Mulai animasi setelah gambar siap
window.onload = () => {
  moveImage();
};
