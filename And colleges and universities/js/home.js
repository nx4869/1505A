window.onload = function() {
	var mySwiper = new Swiper('.swiper-container', {
		mousewheelControl: true,
		loop: true,
//		effect : 'cube',
		autoplay: 3000,
		autoplayDisableOnInteraction : false,
		pagination: '.swiper-pagination',
	})

	$(".footer").on("click","li",function(){
		//先获取到移除样式之前的上一个亮着的图片下标
		var prevEle = $(this).siblings().filter("[class=active]");
		//让上一个红色变成灰色，如果知道上一个红色是谁
		prevEle.find("img").attr("src","img/nav_init_"+parseInt(prevEle.index()+1)+".jpg");
		//通过on方法绑定事件，采用事件监听的方式绑定事件
		$(this).addClass("active").siblings().removeClass("active");
		//点击切换当前状态的图片。同时兄弟元素中的图片变为灰色
		//1.获取当前点击的图片，然后改了它的src值
		//让当前图片变红
		$(this).find("img").attr("src","img/nav_active_"+parseInt($(this).index()+1)+".jpg");
	})
}