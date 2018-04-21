function playSound(e) {
  let keySound = document.querySelector(`[id="${e.keyCode}"]`)
  keySound.currentTime = 0;
  keySound.play();
}
window.addEventListener('keydown', playSound)
