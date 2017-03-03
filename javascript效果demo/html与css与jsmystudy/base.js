//base.js
/*第一版
var Base={

	getid:function (id) {
		// body...
	   return document.getElementById(id);
	},
	getMyName:function (name) {
		// body...
	   return document.getElementsByName(name);
	},
	gettagname:function (tag) {
		// body...
	   return	document.getElementsByTagName(tag);
	},
};
*/

/*
修改 创建的Base可以接受 上下文环境 this 参数
var $=function() {
	// body...
   return	new Base();
};
*/
var $ =function(_this) {
	// body...
   return	new Base(_this);
};


/*这里 将elements通过原型共享 导致一些 
问题 将其移动到 base的创建方法中*/
// Base.prototype.elements=[];
function Base(_this) {
	// body...
	//创建一个数组 来保存获取的节点和节点数组
	this.elements=[];
	if (_this != undefined)
	 {
	 	/*
	 	_this 对象 区别 ，undefined是一个对象 这里的undefined是没有传递值的undefined
	 	区别 typeof 获取到的带单引号的字符串undefined
	 	*/
	 	this.elements[0]=_this;
	 }
	//获取id节点
	this.getid=function (id) {
		// body...
		this.elements.push(document.getElementById(id));
		return this;
		//  返回的是object object
	}
	//获取元素节点
	this.getTagName=function(tagName)
	{
		var tags=document.getElementsByTagName(tagName);
		for (var i = 0; i<tags.length; i++) {
			
			this.elements.push(tags[i]);
		}
		
		return this;
	}

}
/*这里的this作用域 是window this代表window
this.css=function()
{

}

*/
/*给Base 添加方法 不在Base函数体内 而是在外面 语法要这么写 需要添加原型*/
//设置css
Base.prototype.css=function (attr,value) {
	// body...
	for (var i =0; i<this.elements.length; i++) {

		if(arguments.length==1)
		{
			// if(typeof window.getComputedStyle != 'undefined')
			// {
			// 		//w3c
			// 		return window.getComputedStyle(this.elements[i],null)[attr];

			// }
			// else if(typeof this.elements[i].currentStyle != 'undefined')
			// {
			// 		//IE

			// 		return this.elements[i].currentStyle[attr];
			// }

			return getstyle(this.elements[i],attr);


			//获取的时候 破坏连缀 不返回base对象 返回我们要获取的东西
			return this.elements[i].style[attr];
		}else
		{
			this.elements[i].style[attr]=value;
		}

	
	}
	
	return this;

}
//设置innerhtml
Base.prototype.html=function(str)
{

	for (var i =0; i<this.elements.length; i++) {
		if(arguments.length==0)
		{
			//获取的时候 破坏连缀 不返回base对象 返回我们要获取的东西
			return this.elements[i].innerHTML;

		}else
		{
			this.elements[i].innerHTML=str;
		}
	
	}
	return this;
}
//设置点击事件
Base.prototype.click=function(fn)
{

  for (var i = 0; i<this.elements.length; i++) {
	this.elements[i].onclick = fn;
  }
  return this;
}

/*
封装库－CSS上
第一： 获取标签 内容 样式 的值

*/
//获取Class节点数组
 Base.prototype.getClass=function (className,idName) {
 	// body...
 	var node = null;
 	if (arguments.length == 2) {
 		//这里只针对 用id 来限定css 所在 区域  如果要更多适应范围 就会更复杂
 		node = document.getElementById(idName);
 	}else
 	{
 		node = document ;
 	}
 	var all = node.getElementsByTagName('*');
 	for (var i = 0; i<all.length; i++) {
 		if (all[i].className == className) {
 			this.elements.push(all[i]);
 		}
 	}
 	return this;

 }
//获取某一个节点
Base.prototype.getElement = function(num)
{
   //先中转一下
   var element = this.elements[num];
  //再清空
   this.elements=[];
   this.elements[0]=element;
   return this;
}


/*
封装库－CSS下
Clas的添加和移除功能

*/
//添加class
Base.prototype.addClass=function(className)
{
	for (var i = 0; i<this.elements.length; i++) {
		//这里要用到正则 如果数组中没有传递过来的东东话 这里要动态正则语句 不能用自面量 只能new
		// if (!this.elements[i].className.match(new RegExp("'(\\s|^)'+className+'(\\s|$)'"))) {
		// 	 this.elements[i].className += ''+className;
		// }
		if (!hasClass(this.elements[i],className)) {
			 this.elements[i].className += ''+className;
		}
	
	}
	return this;


}
//移除class

Base.prototype.removeClass=function(className)
{
	for (var i = 0; i<this.elements.length; i++) {
		//这里要用到正则 如果数组中没有传递过来的东东话 这里要动态正则语句 不能用自面量 只能new
		// if (this.elements[i].className.match(new RegExp("'(\\s|^)'+className+'(\\s|$)'"))) {
		// this.elements.className = this.elements[i].className.replace(new RegExp("'(\\s|^)'+className+'(\\s|$)'"),'');
		// }
		if (hasClass(this.elements[i],className)) {
		this.elements.className = this.elements[i].className.replace(new RegExp("'(\\s|^)'+className+'(\\s|$)'"),'');
	     }
	
	}
	return this;

}
//添加link或style的css规则 (会破坏整个css结构 少用)
Base.prototype.addRule=function(num,selectorText,cssText,position)
{
	var sheet = document.styleSheets[num];
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
	return this;
}
//移除link或style的css规则 根据行数来删 而不是按照选择器删 要是按照选择器删更麻烦封装
Base.prototype.removeRule=function(num,index)
{
  var sheet= document.styleSheets[num];
  if (typeof sheet.deleteRule != 'undefined') {
  	//w3c

  	sheet.deleteRule(index);

  }else if (typeof sheet.removeRule != 'undefined' ) {
  	//IE
    sheet.removeRule(index);

  }
 
	return this;  

}
//设置鼠标移入移出方法
Base.prototype.hover = function (over,out) {
	// body...
	for (var i = 0; i <this.elements.length; i++) {
		this.elements[i].onmouseover = over;
		this.elements[i].onmouseout = out;
	}

	return this;

}

//设置显示

Base.prototype.show = function () {
	// body...

	for (var i = 0; i<this.elements.length; i++) {
		this.elements[i].style.display = 'block';
	}
	return this;
}

//设置隐藏

Base.prototype.hidden = function () {
	// body...
	for (var i = 0; i<this.elements.length; i++) {
		this.elements[i].style.display = 'none';
	}
   return this;

}

//设置物体居中
Base.prototype.center = function (wid,height)
{
	var top = (document.documentElement.clientHeight-height)/2;
	var left = (document.documentElement.clientWidth-wid)/2;
	for (var i = 0; i<this.elements.length; i++) {
		this.elements[i].style.top = top+'px';
		this.elements[i].style.left = left+'px';
	}

	return this;

}

// 触发浏览器窗口事件

Base.prototype.resize = function (fn) {
	// body...
	window.onresize = fn;

	return this;
}


//锁屏功能
Base.prototype.lock = function () {
	// body...
	for (var i = 0; i <this.elements.length; i++) {
		this.elements[i].style.width = getinner().width+'px';
		this.elements[i].style.height = getinner().height+'px';
		this.elements[i].style.display = 'block';

 /*当弹窗的时候把滚动条禁掉 当弹窗取消时 将滚动条设为默认状况 auto*/

     document.documentElement.style.overflow='hidden';

	}
	return this;
}
//解锁
Base.prototype.unlock = function () {
	// body...
	for (var i = 0; i <this.elements.length; i++) {
		this.elements[i].style.display = 'none';
		 /*当弹窗的时候把滚动条禁掉 当弹窗取消时 将滚动条设为默认状况 auto*/

     document.documentElement.style.overflow='auto';
	}
	return this;
}

//拖拽
Base.prototype.drag = function () 
{
  /*第三版 封装拖拽*/
  for (var i = 0; i <this.elements.length; i++) {
		this.elements[i].onmousedown = function (e) {
   // body...

// 在mousedown时阻止默认行为 低版本火狐 空的div 拖动 有bug
       predef(e);
     var e = getevent(e);
     var _this=this;
     var diffx = e.clientX- _this.offsetLeft;
     var diffy = e.clientY- _this.offsetTop;
   document.onmousemove = function () {
      // body...
        var e = e||window.event;
   var x = e.clientX;
   var y = e.clientY;
   _this.style.left=x-diffx+'px';
   _this.style.top=y-diffy+'px';

    }
    document.onmouseup = function () {
      // body...
      this.onmousemove = null;
      this.onmouseup = null;

    }

    };
	}
	return this;
 

}














