function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let lightMode = changeMode(12, "normal", "lowercase", "white", "black");

    const paragraphe = document.body.appendChild(document.createElement("p"))
    paragraphe.textContent = "Welcome Holberton!"

    const buttonSpooky = document.body.appendChild(document.createElement("button"))
    const buttonDark = document.body.appendChild(document.createElement("button"))
    const buttonLight = document.body.appendChild(document.createElement("button"))

    buttonSpooky.textContent = "Spooky"; // ajout du texte au button
    buttonDark.textContent = "Dark Mode";
    buttonLight.textContent = "Scream Mode";

    buttonSpooky.addEventListener("click", spooky); // crée un event onclick qui appele l'objet spooky
    buttonDark.addEventListener("click", darkMode);
    buttonLight.addEventListener("click", lightMode);

}

main();