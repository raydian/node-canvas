(function($){
	
	var canvas = $('#canvas');

	function imgsize(img){
		var dh = $(window).height();
		var dw = $(window).width();
//		img.removeAttr("height");
//		img.removeAttr("width");
		var v1 = dh/dw;
		var img_height = img[0].height;
		var img_width = img[0].width;
		var cvs_height = 0;
		var cvs_width = 0;
		var v2 = img_height/img_width;
		console.log('height: '+img_height +' ,width: ' + img_width);
//		console.log('window width:' + dw);
//		console.log('window height:'+ dh);
//		console.log('document width:'+ $(document).width());
//		console.log('document height:'+ $(document).height());
		//alert(v1);
		//alert(v2);
		if(v1 < v2){
			cvs_height = dh - 30;
			cvs_width = cvs_height * img_width/img_height;
			img.attr("height",cvs_height);
		}else{
			cvs_width = dw - 100;
			cvs_height = cvs_width * img_height/img_width;
			img.attr("width",cvs_width);
		}
		
		var s = $('.slides');
		//img.show();
		canvas.attr('height',cvs_height);
		canvas.attr('width',cvs_width);
		canvas[0].getContext("2d").drawImage(img[0], 0, 0,cvs_width,cvs_height);
		s.append(img);
//		setTimeout(function(){
//			console.log('img src:' + img.attr('src'));
//			console.log('img:'+JSON.stringify(img.offset()));
//		},1000);
//		console.log('slide offset: '+JSON.stringify($('.slides').offset()));
//		console.log('slide size: '+JSON.stringify('height:'+$('.slides').height() + ',width: ' + $('.slides').width()));

	}
	
	
  $(window).resize(function(){
	  
  });
  
	
	//var img_node = imgNode();
	//img_node.hide();
//	img_node.load(function(){
	//	imgsize($(this));
		//$(this).show();
		//alert($(this).height());
		//alert($(this).width());
	//});
	//img_node.attr("width",$(document).width());
	//img_node.attr("height",$(document).height());
	//alert('window height: '+$(window).height());
	//alert('window width: '+$(window).width());
	//alert('doc width: '+ $(document).width());
	//alert('doc height: '+$(document).height());
  var len = 1;
	for(var j=0;j< len;j++){
		var _img = '<img id="slide_'+j+'" data-key="'+j+'" src="'+ ppt_array[48] +'" />';
		console.log(_img);
		var img_node = $(_img);
		add_pos = j;
		img_node.hide();
		img_node.load(function(){
			imgsize($(this));
		});
	}
	
	
	setTimeout(function(){
	},1000);
	
})($);