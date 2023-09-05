const textElement = document.getElementById("text");
const textToType = "Hello, I am a typing animation.";

function typeText() {
    let index = 0;
    const typingInterval = setInterval(() => {
        textElement.textContent += textToType[index];
        index++;

        if (index === textToType.length) {
            clearInterval(typingInterval);
        }
    }, 100);
}
typeText();
