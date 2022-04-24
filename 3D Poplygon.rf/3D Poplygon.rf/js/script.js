$('.price__switch-btn').click(function () {
	$(this).toggleClass('price__switch-on');
});

let fields = document.querySelectorAll('.feedback__file');
Array.prototype.forEach.call(fields, function (input) {
	let label = input.nextElementSibling,
		labelVal = label.querySelector('.feedback__file-fake').innerText;

	input.addEventListener('change', function (e) {
		let countFiles = '';
		if (this.files && this.files.length >= 1)
			countFiles = this.files.length;

		if (countFiles)
			label.querySelector('.feedback__file-fake').innerText = 'Выбрано файлов: ' + countFiles;
		else
			label.querySelector('.feedback__file-fake').innerText = labelVal;
	});
});

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');

	});
});

$(document).ready(function () {
	$('.price-calc__btn').click(function (event) {
		$('.price-calc__btn,.price-calc__calc,.price-calc__column').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.price-calc__exit').click(function (event) {
		$('.price-calc__btn,.price-calc__calc,.price-calc__column').removeClass('active');
		$('body').removeClass('lock');
	});
});
$(document).ready(function(){
	$('.material__slider').slick({
		slidesToShow:6,
		variableWidth:true
	});
});