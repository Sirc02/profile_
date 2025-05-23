const video = document.getElementById("bgVideo");
const image = document.getElementById("movingImage");

let posX = 100;
let posY = 100;
let speedX = 2;
let speedY = 2;

// Menyesuaikan ukuran video 9:16 agar tetap proporsional
function resizeVideo() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const videoRatio = 9 / 16;
  const windowRatio = vw / vh;

  if (windowRatio > videoRatio) {
    // Layar lebih lebar → sesuaikan tinggi
    video.style.height = "100vh";
    video.style.width = "auto";
  } else {
    // Layar lebih tinggi → sesuaikan lebar
    video.style.width = "100vw";
    video.style.height = "auto";
  }
}

// Fungsi untuk menggerakkan gambar memantul
function moveImage() {
  const imgWidth = image.offsetWidth;
  const imgHeight = image.offsetHeight;
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;

  posX += speedX;
  posY += speedY;

  if (posX + imgWidth >= containerWidth || posX <= 0) {
    speedX *= -1;
  }

  if (posY + imgHeight >= containerHeight || posY <= 0) {
    speedY *= -1;
  }

  image.style.left = `${posX}px`;
  image.style.top = `${posY}px`;

  requestAnimationFrame(moveImage);
}

// Inisialisasi
window.addEventListener("resize", resizeVideo);
window.addEventListener("load", () => {
  resizeVideo();
  moveImage();
});
