function playSound(e) {
  let keySound = document.querySelector(`[id="${e.keyCode}"]`)
  keySound.currentTime = 0;
  keySound.play();

  keySound.parentElement.classList.add("transitionStart")
  keySound.parentElement.addEventListener("transitionend", function(){
    keySound.parentElement.classList.remove("transitionStart");
  });

}
window.addEventListener('keydown', playSound)
