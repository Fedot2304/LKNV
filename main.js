let offset = 0;
const sliderline = document.querySelector('#slider-line');

document.querySelector('#next').addEventListener('click', function () {
	offset = offset + 534; 
	if (offset>2136) {
		offset = 0;
	}
	sliderline.style.left = -offset + 'px';
});

document.querySelector('#prew').addEventListener('click', function () {
	offset = offset - 534; 
	if (offset<0) {
		offset = 2136;
	}
	sliderline.style.left = -offset + 'px';
});


document.querySelector('#next_1').addEventListener('click', function () {
	offset = offset + 414; 
	if (offset>1656) {
		offset = 0;
	}
	sliderline.style.left = -offset + 'px';
});

document.querySelector('#prew_1').addEventListener('click', function () {
	offset = offset - 414; 
	if (offset<0) {
		offset = 1656;
	}
	sliderline.style.left = -offset + 'px';
});