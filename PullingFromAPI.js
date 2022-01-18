/*
const req = new XMLHttpRequest();
const url = "https://api.nasa.gov/planetary/apod?api_key=";
const api_key = "FEH4szryEj7maWrIue1H5gNL2mABCBWeql1wQS1u";

const formTag = document.getElementById("date-input-space")
const reqData = (input) => {
	const date = input || today
	formTag.action = ${url}${api_key}${date}

	req.open("GET", `${url}${api_key}${date}`)
	req.send()
}

reqData()
*/
req.addEventListener("load", function() {
	if (req.status == 200 && req.readyState == 4){
		console.log("Success")
		var response = JSON.parse(req.responseText);
		
		document.getElementById("title").textContent = response.title;
		document.getElementById("ParticularDay").textContent = response.date;
		document.getElementById("photo").src = response.hdurl;
		document.getElementById("explanation").textContent = response.explanation;
	}
	console.log(`Fail ${req.status}`)
})