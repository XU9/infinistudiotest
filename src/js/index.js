$('.nav  a').click(function(){
	// console.log($(this).index());
	$(this).addClass('active').siblings().removeClass("active");
});


$('.con').hover(function(){
	// alert("Aaaaaaaa");
	$(this).children('.word').fadeIn(100);
},function(){
	$(this).children('.word').fadeOut(100);
});


 var mySwiper = new Swiper ('.swiper-container', {    
    // 如果需要分页器
    pagination: '.pagination',
    
    // 如果需要前进后退按钮
    nextButton: '.arrow-right',
    prevButton: '.arrow-left',
    onSlideChangeStart:function(swiper){
    	if(swiper.activeIndex==0){
    		$('.message').children('p').eq(0).slideDown(300).siblings().slideUp();
    	}
    	if(swiper.activeIndex==1){
    		$('.message').children('p').eq(1).slideDown(300).siblings().slideUp();
    	}
    	if(swiper.activeIndex==2){
    		$('.message').children('p').eq(2).slideDown(300).siblings().slideUp();
    	}
    	if(swiper.activeIndex==3){
    		$('.message').children('p').eq(3).slideDown(300).siblings().slideUp();
    	}
    }
    
  });    

// var mq=window.matchMedia('@media screen and (max-width:640px)');
// if (mq) {
// 	$('.device').css('style','height:320px');
// }
// @media screen and (max-width:640px){
// 	$('.wrap').click(function(){
// 		alert('AAAAAAAAAAa');
// 	})
// }    