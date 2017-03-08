/*
DOM加载下
Opera8 不支持 Chrome 与 safari3.1 的webkit浏览器525版本不支持
Firefox2 有严重bug


*/

// window.onload=function(){


// };


// //计时器 清除

// var timer = null;
// var isReady = false;
// //保证在定时器只执行一次
// function doReady(fn){
// 	if(timer) clearInterval(timer);
// 	if (isReady) return;
// 	isReady=true;
// 	fn();
// }

// function  addDomLoaded(fn){
// /*
// 这种方法 目前在 主流浏览器 判断的都是complete
// 类似于onload 即图片加载后 才加载
// 用于非主流浏览器的向下兼容
// */
//  // timer = setInterval(function(){
// 	// if(/loaded|complete/.test(document.readyState)){
// 	// 	//loaded 是部分加载 
// 	// doReady(fn);
// 	// }
//  //  },1);

// //方法二
// timer = setInterval(function(){
// 	if (document&&document.getElementById
// 		&&document.getElementsByTagName&&document.body)
// 		 {
// 		 	doReady(fn);
// 	}

// },1);


// }
// //repeat 传 yes or no 表明是否重复执行 不加毫秒数 google 与 safari 会 一直执行


addDomLoaded(function(){
  alert('兼容完毕');
});







