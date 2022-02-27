let offset = 0;
const sliderline = document.querySelector('#slider-line');

document.querySelector('#next').addEventListener('click', function () {
	offset = offset + 534; 
	if (offset>1602) {
		offset = 0;
	}
	sliderline.style.left = -offset + 'px';
});

document.querySelector('#prew').addEventListener('click', function () {
	offset = offset - 534; 
	if (offset<0) {
		offset = 1602;
	}
	sliderline.style.left = -offset + 'px';
});