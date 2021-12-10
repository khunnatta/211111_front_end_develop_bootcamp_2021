const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
console.log(container);

for (let i=1; i<=151; i++) {

    const image = document.createElement('img');
    image.src = `${baseURL}${i}.png`;

    const label = document.createElement("p");
    label.innerText = `#${i}`;

    const pokemon = document.createElement("div");
    pokemon.className = "pokemon";

    pokemon.appendChild(image);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}