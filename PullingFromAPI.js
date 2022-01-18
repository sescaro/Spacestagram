const req = new XMLHttpRequest();
const url = "https://api.nasa.gov/planetary/apod?api_key=";
let api_key = "FEH4szryEj7maWrIue1H5gNL2mABCBWeql1wQS1u";

const params = (new URL(document.location)).searchParams
const date = params.get("user input") || today

req.open("GET", `${url}${api_key}&date=${date}`)
req.send()

req.addEventListener("load", function() {
	if (req.status == 200 && req.readyState == 4){
		var response = JSON.parse(req.responseText);
		
		document.getElementById("title").textContent = response.title;
		document.getElementById("ParticularDay").textContent = response.date;
		document.getElementById("photo").src = response.hdurl;
		document.getElementById("explanation").textContent = response.explanation;
	}
})