const sentences = ["tying my shoe", "holding my umbrella", "buttoning my shirt"];
const typewriter = document.getElementById("typewriter");

let currentSentenceIndex = 0;
let isErasing = false;

// Set the typewriter element with an empty string initially
typewriter.textContent = "";

function typewriterEffect() {
  const sentence = sentences[currentSentenceIndex];
  const currentText = typewriter.textContent;

  if (!isErasing) {
    typewriter.textContent = sentence.substring(0, currentText.length + 1);

    if (currentText === sentence) {
      isErasing = true;
      setTimeout(typewriterEffect, 1500); // Wait 1.5 seconds before starting the erasing
    } else {
      setTimeout(typewriterEffect, 100); // Adjust the typing speed by changing the delay (in milliseconds)
    }
  } else {
    typewriter.textContent = sentence.substring(0, currentText.length - 1);

    if (currentText === "") {
      isErasing = false;
      currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
    }

    setTimeout(typewriterEffect, 50); // Adjust the erasing speed by changing the delay (in milliseconds)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typewriterEffect();
});
