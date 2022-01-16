// Create new XML Http request object using XMLHttpsRequest function
const request = new XMLHttpRequest();
const paragraphApi = document.getElementById("paragraphApi");

console.log(paragraphApi);
paragraphApi.value = "Test";

request.onload = () => {
	console.log("Done");
	console.log(this);
};

request.onerror = () => {
	console.log("ERROR");
	console.log(this);
};

request.open("GET", "https://api.cryptonator.com/api/ticker/btc-usd");
request.send();

paragraphApi.innerText = "Chop Hee";
