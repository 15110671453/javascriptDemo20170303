//myquery.js
/*基础代码
window.onload=function () {
	// body...
	alert(document.getElementById("box").innerHTML);
		alert(document.getElementsByName('sex')[0].value);
		alert(document.getElementsByTagName('p')[0].innerHTML);
}
*/

/*函数式封装

function $(id) {
	// body...
	return document.getElementById(id)
}
*/
/*对象式*/
/*第一版

window.onload=function function_name() {
	// body...
	alert(Base.gettagname('p')[0].innerHTML);
};
*/

/*封装库 连缀

连缀使用情景
Base.getid('box').css('color','red').css('backgroundColor','black').html('pox').click(function(){
	alert('a');
})
Base 是一个基础库的核心对象
Base.getid('box')返回的是一个HtmlDivElement 这个对象没有css方法
将Base.getid('box')返回改成Base即可 而
在base对象添加一个CSS方法 CSS方法也是返回Base对象
html方法 html方法也是返回Base对象
click方法 click方法也是返回Base对象
这就是设计目标
*/
window.onload=function () {
	// body...
	var base=new Base();
	// alert(base.getid('box'));
	// alert(base.getid('box').elements.length);
	// $().getid('box').css('color','red');
 //    $().getTagName('p').css('color','green').html('gaibian').click(function(){
 //     	alert('nannanann');
 //     });
    alert($().getid('box').addClass('a'));
    /*
    共用一个对象 导致 属性 传染 解决
    */
};





