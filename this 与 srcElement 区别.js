/**
 * Created by Administrator on 2017/3/5.
 */


this和window.event.srcElement的使用区别是：

如果要直接使用this.属性，此时的函数不能是被调用的而必须是响应函数，

而window.event.srcElement则无此限制。


事件代理详细解释 http://www.cnblogs.com/liugang-vip/p/5616484.html

  e = e || window.event;
var el = e.srcElement || e.target;   兼容 event事件写法。


event.srcElement 事件源元素

ui.parentNode  parentElement  ui元素的父元素  两个用法相同

ui.nextElementSibling  ui父元素下 下一个元素 不含文本节点。
ui.previousElementSibling     ui父元素下  上一个元素  不含文本节点

ui.children[i]  ui父元素下第i个标签

ui.removeChild(li)  ui为父元素， li为父元素下的子元素

ui.setAttribute('total属性名',属性值)   设置UI元素属性  total 的属性值
ui.getAttribute('total属性名',属性值)   获取UI元素属性  total 的属性值

ui.innerHTML ="要写入的内容"   设置要写入标签的内容， 不要 = 号就是获取

克隆元素  cloneNode(true)
var node=document.getElementById("myList2").lastChild.cloneNode(true);
document.getElementById("myList1").appendChild(node);


ui.nodeType ui标签的属性   1 文本  3 标签