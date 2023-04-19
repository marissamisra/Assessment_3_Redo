//color, place, ritual
const color = document.querySelector('#color');
const place = document.querySelector('#place');
const ritual = document.querySelector('#ritual');
//const backgroundColor = document.querySelector('')
let favColor = 'purple'
let favPlace = 'the Superstition Mountains'
let favRitual = 'taking a bubble bath'

function myFavorites(subject, favorite){
	alert('My favorite ' + subject + ' is ' + favorite + '.' );

	if (subject === 'color'){
return null;
	}
}

color.addEventListener('click', () => myFavorites('color', favColor));
place.addEventListener('click', () => myFavorites('place', favPlace));
ritual.addEventListener('click', () => myFavorites('ritual', favRitual));