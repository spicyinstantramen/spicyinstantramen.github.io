let count = 0;
document.querySelector("#counter").innerHTML = count;

// Set event listeners for counter images
// Listener 1 runs the animation on click
// Listener 2 resets the animation when it's finished
document.querySelectorAll('.image-count').forEach(x => {
  x.addEventListener('click', runAnimation);
  x.addEventListener('animationend', removeAnimation);
})

function runAnimation(ev) {
    // Reset the animation in case it's already running when image is clicked
    removeAnimation(ev);
    // Increment the counter and update the DOM display
    count++;
    document.querySelector("#counter").innerHTML = count;
    // setTimeout allows the DOM to update and remove the animate class before it's added again
    // Without this, the animation wouldn't reset
    setTimeout(() => {
      ev.target.classList.add("animate");
    },0)
}

function removeAnimation(ev) {
  ev.target.classList.remove("animate");
}
