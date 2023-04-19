console.log("hello world");

let form = document.querySelector('#contact');
let image = document.querySelector('#cat-picture');

//submitting contact form
function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully');
}

//mouseover photo for compliment
function mouseCompliment(){
	alert('Have you lost weight?');
}

form.addEventListener('submit', handleSubmit);
image.addEventListener('mouseover', mouseCompliment);

