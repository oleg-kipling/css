$(function(){
	//window.alert("Alert!");
	$(window).scroll(function(event) {
		var y = $(this).scrollTop();

		if(y >= 300) {
			$('#monitor').addClass('.animate');
			$('#phone').addClass('.animate');
		}

		if(y >= 650) {
			$('#speed').addClass('.animate grow-img');
			$('#support').addClass('.animate grow-img');
			$('#smart').addClass('.animate grow-img');

			$('.center-icons span').addClass('.animate grow-img');
		}

		if(y >= 1000) {
			$('#s1').addClass('.animate-down');
			setTimeout(function() { $('#s2').addClass('.animate-down'); }, 100);
			setTimeout(function() { $('#s3').addClass('.animate-down'); }, 200);
			setTimeout(function() { $('#s4').addClass('.animate-down'); }, 300);
			setTimeout(function() { $('#s5').addClass('.animate-down'); }, 400);
			setTimeout(function() { $('#s6').addClass('.animate-down'); }, 500);
			setTimeout(function() { $('#s7').addClass('.animate-down'); }, 600);
			setTimeout(function() { $('#s8').addClass('.animate-down'); }, 700);
			setTimeout(function() { $('#s9').addClass('.animate-down'); }, 800);
			setTimeout(function() { $('#s10').addClass('.animate-down'); }, 900);
		}

	});
});