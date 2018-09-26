function myFunction(x) {
	x.classList.toggle("change");
}

$('.roundRight').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.arrowRight').toggleClass('moveRight');
});

$('.roundLeft').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.arrowLeft').toggleClass('moveLeft');
});

$('.roundUp').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.arrowUp').toggleClass('moveUp');
});

$('.roundDown').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.arrowDown').toggleClass('moveDown');
});