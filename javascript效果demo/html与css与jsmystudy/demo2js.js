window.onload = function()
{
  /*
  $().getClass('personalcenter').hover(over,out);
  设计目标
  */ 
	$().getClass('personalcenter').hover(function(){$().getClass('member-ul').show(); },function(){ $().getClass('member-ul').hidden();});
	
}