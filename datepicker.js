const url = "https://api.nasa.gov/planetary/apod?api_key=";
const api_key = "FEH4szryEj7maWrIue1H5gNL2mABCBWeql1wQS1u";
const formTag = document.getElementById("date-input-space")

const input = document.querySelector("#date-field")
const searchBut = document.querySelector("#search-button");
searchBut.addEventListener(`click`, () => {
	//If Valid...
	formTag.action = `${url}${api_key}${input.value}` 
})
