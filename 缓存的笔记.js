/**
 * Created by Administrator on 2017/3/3.
 */

// cookie 方法
document.cookie = "name=csdn";

// 设置过期时间
var time = new Date();
time.setTime(time.getTime() + 1000*60);
document.cookie = "name=csdn; expires=" +time;


//localStorage  每个域名5M ，永久存储
// sessionStorage 临时存储，关闭浏览器后消失
//

localStorage.setItem("csdn","429499381"); // 存储方法

localStorage.getItem("csdn");  //获取值 value

localStorage.key(0); //获取key

localStorage.removeItem("csdn"); //删除一个键值对  sessionStorage同上



// indexdDB  和 web SQL
// 浏览器支持 chrome 11+ firefox 4+ ie 10+  opera 不支持
// http://bbs.9ria.com/thread-241664-1-1.html 案例网址




//离线缓存方法

// HTML5 头部要加入，在根木建立一个 manifest.appcache
<html lang="en" manifest = 'manifest.appcache'>


浏览器检查是否更新 是根据  manfest.appcahe 的版本更变


//WEB SQL 方法
openDatabase: 使用现有数据库或新建
transaction: 事物提交或回滚
executeSql: 执行真实的SQL查询

