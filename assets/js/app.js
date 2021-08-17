var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 11){
        counter = 1;
    }
},5000);


const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

let date = new Date();
// let getHours = date.getHours() * 60 * 60 * 1000;
let newHours = date.getMilliseconds() + (3*60*60*1000);


// Update countdown time
function updateCountdown() {
    const currentTime = new Date().getMilliseconds();
    let diff = newHours - currentTime;
    // console.log(diff);

	const h = Math.floor(diff / 1000 / 60 / 60);
	const m = Math.floor(diff / 1000 / 60) % 60;
	const s = Math.floor(diff / 1000) % 60;

	hours.innerHTML = h < 10 ? '0' + h : h;
	minutes.innerHTML = m < 10 ? '0' + m : m;
	seconds.innerHTML = s < 10 ? '0' + s : s;
    diff = diff - 1000;
}

setInterval(updateCountdown, 1000);