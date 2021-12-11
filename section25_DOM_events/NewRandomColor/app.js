const body = document.body;
const colorVal = document.getElementById("colorVal");
let changeColorBtn = document.getElementById("changeColorBtn");

console.log(body)

changeColorBtn.addEventListener("click", () => {
    console.log("clicked!");

    const R = Math.floor(Math.random() * 255);
    const G = Math.floor(Math.random() * 255);
    const B = Math.floor(Math.random() * 255);

    const colorText = `rgb(${R},${G},${B})`;
    colorVal.innerText = colorText;
    body.style.backgroundColor = colorText;
});
