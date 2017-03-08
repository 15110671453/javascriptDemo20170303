
$().extend('drag',function(tags){
  /*第三版 封装拖拽*/
  for (var i = 0; i <this.elements.length; i++) {
    this.elements[i].onmousedown = function (e) {
   // body...

      // 在mousedown时阻止默认行为 低版本火狐 空的div 拖动 有bug
       // predef(e);
       //我们这里不阻止默认行为就可以 正常在登录框 点击输入
       //之前之所以添加阻止默认行为 是因为空div无法拖拽的 解决

      if(trim(this.innerHTML).length == 0) predef(e);


     var e = getevent(e);
     var _this=this;
     var diffx = e.clientX- _this.offsetLeft;
     var diffy = e.clientY- _this.offsetTop;
    
    //自定义拖拽区域
    var flag =false;

    // alert(tags);
    if (tags) {}
    for (var i = 0; i <tags.length; i++) {
      if (e.target == tags[i]) {
        flag = true;//只要有一个是true 就立刻返回
       //避免下面搞到false

       return flag;
        }
      }

    if (e.target.tagName == 'h2') {
    addEvent(document,'mousemove',move);
      addEvent(document,'mouseup',up);
    }else{
      removeEvent(document,'mousemove',move);
      removeEvent(document,'mouseup',up);
    }
      
     function move(e)
     {
       if (typeof _this.setCapture!='undefined') {
        //捕获
      _this.setCapture();
     }
          var e = e||window.event;
   var left = e.clientX-diffx;
   var top = e.clientY-diffy;
   if (left<0) {
    left=0;

   }else if(left>getinner().width-_this.offsetWidth){
    left=getinner().width-_this.offsetWidth;
   }
   if (top<0) {
    top=0;
   }else if(top>getinner().height-_this.offsetHeight)
   {
    top=getinner().height-_this.offsetHeight;
   }

   _this.style.left=left+'px';
   _this.style.top=top+'px';
     }
   
   function up(e){
      // body...
      // this.onmousemove = null;
      // this.onmouseup = null;

      removeEvent(document,'mousemove',move);
      removeEvent(document,'mouseup',up);
      if (typeof _this.releaseCapture !='undefined' ) {
        _this.releaseCapture();
      }
   }

    //mousedown
   }
  
  }
  return this;
});
