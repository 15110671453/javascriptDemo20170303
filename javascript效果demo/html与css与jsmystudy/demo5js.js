
// window.onscroll= function(){

//   document.documentElement.scrollTop = 0;
//   document.body.scrollTop=0;
// }

window.onload = function()
{
  /*
  $().getClass('personalcenter').hover(over,out);
  设计目标
  */ 
  //个人中心
	$().getClass('personalcenter').hover(function(){$().getClass('member-ul').show(); },function(){ $().getClass('member-ul').hidden();});




/*
window.onresize = function () {
	// body...
	//登录框
var top = (document.documentElement.clientHeight-250)/2;
var left = (document.documentElement.clientWidth-350)/2;
$().getid('login').css('top',top+'px').css('left',left+'px');	

}
设计目标 遮罩
*/

	 var login1 = $().getid('login2');


     var screen = $().getid('screen');
      login1.center(350,250);
   $().resize(function(){ 
    login1.center(350,250);
    if (login1.css('display')=='block') {
      screen.lock();
    }


  });

    $().getClass('login').click(function() { login1.css('display','block');
       screen.lock();

  });

  $().getClass('close').click(function () {login1.css('display','none');

       screen.unlock();
  });


/*
 
 怎样实现 拖拽 ；各个浏览器的兼容性
 实现拖拽 需要三个事件处理
 mousedown 点下去
 mousemove 拖拽移动
 mouseup 抬起来

 封装 设计目标
 var odiv = document.getElementById('login2');
 
 //拖拽流程
 // 1 先点下去 
 //2 在点下的物体被选中 进行move移动 
 //3 抬起鼠标
 //点击某个物体 使用odiv即可 move up 是全局 也就是整个文档区域 document
 odiv.onmousedown = function (e) {
   // body...

     var e = e||window.event;
     var diffx = e.clientX- odiv.offsetLeft;
     var diffy = e.clientY- odiv.offsetTop;
   document.onmousemove = function () {
      // body...
        var e = e||window.event;
   var x = e.clientX;
   var y = e.clientY;
   odiv.style.left=x-diffx+'px';
   odiv.style.top=y-diffy+'px';

    }
    document.onmouseup = function () {
      // body...
      document.onmousemove = null;
      document.onmouseup = null;

    }

 };

*/

/*
第二版 拖拽
var odiv = document.getElementById('login2');
odiv.onmousedown = function (e) {
   // body...

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
*/
 
  login1.drag();


  /*

低版本 火狐 没有内容的div 拖动 有 bug  需要取消 或者 阻止默认行为








  */
 



}



