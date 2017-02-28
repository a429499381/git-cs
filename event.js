/**
 * 浏览器兼容事件程序
 * Created by Administrator on 2017/2/28.
 */
var eventutil = {
  //添加句柄
  addHandler:function (element,type,handler)
  {
    if(element.addEventListener)
    {
      element.addEventListener(type,handler,false);
    }else if(element.attachEvent)
    {
      element.attachEvent('on' + type,handler)
    }else
    {
      element['on' + type] = handler;
    }
  },
  //删除句柄
  removeHandler:function (element,type,handler)
  {
    if(element.removeEventListener)
    {
      element.removeEventListener(type,handler,false);
    }else if(element.detachEvent)
    {
      element.detachEvent('on' + type,handler)
    }else
    {
      element['on' + type] = null;
    }
  },
  getEvent:function (event) {
    return event?envent:window.event;
  },
  getType:function (event) {
    return event.type;
  },
  getElement:function (event) {
    return event.traget || event.srcElement;
  },
  //阻止事件默认行为
  preventDefault:function (event) {
    if(event.PreventDefault)
    {
      event.preventDefault();
    }else
    {
      event.returnValue = false;
    }
  },
  stopPropagtion:function (event) {
    if(event.stopPropagtion)
    {
      event.stopPropagtion();
    }else
    {
      event.cancelBubble = true;
    }
  }
};