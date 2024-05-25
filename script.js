const options = {
	method: 'GET',
	headers: {

	}
};

fetch('https://official-joke-api.appspot.com/random_joke', options)
	.then(response => response.json())
	.then(response => {
		document.getElementById("setup").innerText = response["setup"];
		document.getElementById("punchline").innerText = response["punchline"];
        console.log(response);    
    })
	.catch(err => console.error(err));