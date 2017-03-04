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