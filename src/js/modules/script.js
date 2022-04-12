//================================================================================

if (document.querySelector('.media__video')) {
	const video = document.querySelector('.media__video video');
	const videoPlay = document.querySelector('.media__play');

	videoPlay.addEventListener('click', videoActive);

	function videoActive() {
		videoPlay.classList.add('media__play--active');
		video.parentElement.classList.add('media__video--active');
		video.controls = true;
		video.play();
		videoPlay.removeEventListener('click', videoActive);
	}
}

//================================================================================

const circlesArray = document.querySelectorAll('.facts__circle');
circlesArray.forEach((circle, index) => {
	const value = circle.querySelector('span').textContent;
	const newValue = value.slice(0, value === '100' ? 3 : 2);
	const colors = ['248,152,40', '245,47,110', '90,135,252', '3,206,164'];
	circle.style.background =
		`conic-gradient(
			rgb(${colors[index]}) ${newValue * 3.6}deg,
			rgba(${colors[index]}, 0.3) ${newValue * 3.6}deg
		)`;
});

//================================================================================