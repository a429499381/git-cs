/**
 * Created by Administrator on 2017/3/4.
 */

parse用于从一个字符串中解析出json对象,如

var str = '{"name":"huangxiaojian","age":"23"}'

结果：
JSON.parse(str)



stringify()用于从一个对象解析出字符串，如

var a = {a:1,b:2}

JSON.stringify(a)

结果
"{"a":1,"b":2}"



//        AJAX

var xmlhttp;
//定义ajax 函数  方便多次条用
function loadXMLDoc(url,cfunc)
{
  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  // 响应AJAX 改变  要执行动作
  xmlhttp.onreadystatechange=cfunc;
  // 请求 向服务器 获取内容， URL 就是请求地址
  xmlhttp.open("GET",url,true);
  //发送请求
  xmlhttp.send();
}

// 调用 AJAX 函数
function myFunction()
{
  // 执行请求 传入 url  回调函数
  loadXMLDoc("/ajax/test1.txt",function()
  {
    // 响应成功 ，开始执行下一步
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      // ajax 获取信息写入 mydiv 中
      document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  });
}