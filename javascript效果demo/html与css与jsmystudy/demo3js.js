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
设计目标
*/

	 var login1 = $().getid('login2');


 
  login1.center(350,250).resize(function(){ login1.center(350,250);});

    $().getClass('login').click(function() { login1.css('display','block');});

  $().getClass('close').click(function () {login1.css('display','none');});
}



