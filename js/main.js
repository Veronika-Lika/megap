let btn = document.getElementById('btn');
btn.onclick= function () {
	let text = document.querySelector(' p.intro');
	text.classList.add('red');
}

$(function(){
 $(window).scroll(function(){
	$('.skill-time ').each(function(){
		let imagePos = $(this).offset().top;

		let topOFWindow =$(window).scrollTop();
		if (imagePos < topOFWindow+650) {
			$(this).addClass('animate__animated animate__slideInLeft');
		}
	});

 });

 $(window).scroll(function(){
	$('.skill-travel').each(function(){
		let imagePos = $(this).offset().top;

		let topOFWindow =$(window).scrollTop();
		if (imagePos < topOFWindow+650) {
			$(this).addClass('animate__animated animate__slideInDown');
		}
	});

 });

 $(window).scroll(function(){
	$('.skill-value ').each(function(){
		let imagePos = $(this).offset().top;

		let topOFWindow =$(window).scrollTop();
		if (imagePos < topOFWindow+650) {
			$(this).addClass('animate__animated animate__slideInRight');
		}
	});

 });


})




