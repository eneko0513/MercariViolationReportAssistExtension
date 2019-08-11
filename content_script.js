$(".items-box").each(function(i, o){
	$('<div class="report" href="' + $(o).children('a')[0].href.match(/(.*?)\?/)[1].replace('https://item.mercari.com/jp/', 'https://www.mercari.com/jp/report/') + '">通報</div>').appendTo($(o));
	$('.report').css({
		"background-color": "#ff0000",
		"cursor": "pointer"
	});
});

$('<a class="footer-report"><div>一括通報 ※未実装</div></a>').appendTo('.search-result-head');
$('.footer-report').css({
	"cursor": "pointer"
});


var tempWindow;
var selections;
var evt;
$('.report').click(function() {
	tempWindow = window.open(this.attributes.href.value,"_blank",
	"top=50,left=50,width=500,height=700,scrollbars=1,location=0,menubar=0,toolbar=0,status=1,directories=0,resizable=1");
	$(tempWindow).load(function(){
		selections = tempWindow.document.querySelector('select[name="type_id"]');
		selections.value = 1011;
		evt = document.createEvent("HTMLEvents");
		evt.initEvent("change", true, true);
		selections.dispatchEvent(evt);
		$(tempWindow.document).find('textarea[name="body"]').val('転売禁止の商品を高額出品しているため');
		$(tempWindow.document).find('.contact-big-textarea').css('min-height', '35px');
		$(tempWindow.document).find('.contact-big-textarea').css('height', '35px');
	});
	return false;
})

/*
$('.footer-report').click(function() {
	if(!confirm('一括通報を行いますか？\n※過度な通報は運営への負荷に繋がるので注意')){
		return false;
	}else{
		var list = [];
		var j = 0;
		$(".report").each(function(i, o){
			list[i] = $('.report')[j].attributes.href.value;
			j++;
		});
	}
});

function callback(href){
	tempWindow = window.open(href,"_blank",
	"top=50,left=50,width=500,height=700,scrollbars=1,location=0,menubar=0,toolbar=0,status=1,directories=0,resizable=1");
	$(tempWindow).load(function(){
		selections = tempWindow.document.querySelector('select[name="type_id"]');
		selections.value = 1011;
		evt = document.createEvent("HTMLEvents");
		evt.initEvent("change", true, true);
		selections.dispatchEvent(evt);
		$(tempWindow.document).find('textarea[name="body"]').val('転売禁止の商品を高額出品しているため');
		$(tempWindow.document).find('.contact-big-textarea').css('min-height', '35px');
		$(tempWindow.document).find('.contact-big-textarea').css('height', '35px');
		$(tempWindow.document).find('button[type="submit"]').submit();
	});
}
*/
