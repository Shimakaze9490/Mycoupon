$(function() {
	//统计张数
	$(".Coupcounts").text($(".items").length);

	//折扣券事件
	$(".stamp").each(function(index, item) {
		$(this).tap(function() {
			console.log("点击使用折扣券");
		});
	});

	//选项卡事件
	$(".tabs li").each(function(index, item) {
		$(this).tap(function() {
			$(this).addClass("active").siblings().removeClass("active");

			//切换内容
			$(".actionCount").eq(index).show().siblings().hide();
		});
	});
});