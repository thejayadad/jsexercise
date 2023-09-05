const inputField = document.getElementById("inputField");

inputField.addEventListener("focus", () => {
    inputField.parentElement.classList.add("active");
});

inputField.addEventListener("blur", () => {
    if (inputField.value === "") {
        inputField.parentElement.classList.remove("active");
    }
});
