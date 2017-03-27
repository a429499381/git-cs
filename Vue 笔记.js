/**
 * Created by Administrator on 2017/3/23.
 */

1 执行一次性插值， 数据改变时，插值出的内容不更新  v-once

2 双大括号会将数据解释为纯文本，而非 HTML 。为了输出真正的 HTML ，你需要使用 v-html 指令

3 Mustache 不能在 HTML 属性中使用，应使用 v-bind 指令

4  v-if 指令将根据表达式 seen 的值的真假来移除/插入 <p> 元素。

5 一些指令能接受一个“参数”，在指令后以冒号指明。例如， v-bind 指令被用来响应地更新 HTML 属性：
  <a v-on:click="doSomething">

6 另一个例子是 v-on 指令，它用于监听 DOM 事件：
  <a v-on:click="doSomething">

7