//tool.js
//跨浏览器获取视口大小
function getinner()
{
	if (typeof window.innerWidth != 'undefined') {
		return {
				width:window.innerWidth,
				height:window.innerHeight
		}
	}else
	{
			return {
				width:document.documentElement.clientWidth,
				height:document.documentElement.clientHeight
		}
	}	

}

//跨浏览器获取style
function getstyle(element,attr)
{
	if(typeof window.getComputedStyle != 'undefined')
			{
					//w3c
					return window.getComputedStyle(element,null)[attr];

			}
			else if(typeof element.currentStyle != 'undefined')
			{
					//IE

					return element.currentStyle[attr];
			}

}




//判断class是否存在
function hasClass(element,className) {
	// body...
 return	element.className.match(new RegExp("'(\\s|^)'+className+'(\\s|$)'"));å
}

//跨浏览器添加link规则
function insertRule(sheet,selectorText,cssText,position) {
	// body...
		if (typeof sheet.insertRule != 'undefined') {
		//w3c
		// sheet.insertRule('body{background:red}',0);
		  sheet.insertRule(selectorText+'{'+cssText+'}',position);
	}else if (typeof sheet.addRule != 'undefined') 
	{//IE
		//第一个参数 选择器 第二个 css样式 第三个 位置
		// sheet.insertRule('body','background:red',0);
     sheet.addRule(selectorText,cssText,position);
	}
}



//获取event对象
function getevent(event)
{
	return  event || window.event;
}



// 阻止默认行为
 function predef(event)
 {
 	var e = getevent(event);
 	if (typeof e.preventDefault != 'undefined') {
 		//w3c

 		e.preventDefault();

 	}else
 	{


 		//IE
 		e.returnValue = false;
 	}
 }







