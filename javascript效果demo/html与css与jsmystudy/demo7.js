// window.onload= function(){

// 	//传统的DOM加载
// 	//我们本来等待DOM加载完毕事件 处理该方法
// 	//但是传统的 如果有图片 那么图片加载完毕 方可执行onload中的内容

// 	var box = document.getElementById('box');
// 	alert(box.innerHTML);
// };

//现代的DOM加载

// addEvent(document,'DOMCotentLoaded',function(){
// 	var box = document.getElementById('box');
// 	alert(box.innerHTML);
// });


//如果有图片 先执行节点操作的内容 然后再缓缓加载图片 也就是说
//DOM树加载完毕 就执行该方法

//IE使用传统DOM加载方式 与其他浏览器一致 但是IE678不支持 现代的DOM加载事件

//IE678模拟DOMContentLoaded

// document.write("<script id='ie_loaded' defer='defer' src='javascript:void(0)'></script>');

// var ie_loaded=document.getElementById('ie_loaded');

// ie_loaded.onreadystatechange = function(){

// 	if (this.readyState == 'complete') {
// 		var box = document.getElementById('box');
// 	   alert(box.innerHTML);
// 	}
// }

//PS：有效 DOM加载完毕后 执行了节点操作 并且后面才加载图片
//以上方法还是有缺憾  就是页面中有iframe 嵌套 163 网站的首页 
//会很久才执行我们的节点操作 在等待iframe中内容加载完毕
//现代DOM加载 会有iframe 问题吗 没有 ；只有IE678 有这问题

//说明 DOMContentLoaded 事件是比较完美的  但是IE 怎么解决呢


//使用doScroll

// var timer = null;
// //IE中 任何一个html元素 都有一个doscroll方法 
// //无论它是否支持滚动条
// timer = setInterval(function(){
// 	try{
// 		document.documentElement.doScroll('left');
// 		var box = document.getElementById('box');
// 	   alert(box.innerHTML);
// 	}catch(e){

// 	}
// });
//setInterval 这个方法的使用 定时器
//这个方法解决 IE 的问题


// function addDomLoaded(fn){

// 	if (document.addEventListener) {
// 		addEvent(document,'DOMContentLoaded',function(){
//               fn();
//              //这里使用匿名函数
//              //添加完 事件 该如何删除该事件呢
//              //我们在匿名函数体内 调用 arguments.callee 
//              //可以调用到函数自己的引用
//              alert(arguments.callee);
//              removeEvent(document,'DOMContentLoaded',arguments.callee);


// 		});
// 	}else{
// 		var timer = null;

// timer = setInterval(function(){
// 	try{
// 		document.documentElement.doScroll('left');
// 		var box = document.getElementById('box');
// 	   alert(box.innerHTML);
// 	}catch(e){

// 	}
// });
// 	}
// }



addDomLoaded(function(){
	alert('优化后的window onload');
});









