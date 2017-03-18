/**
 * Created by Administrator on 2017/3/18.
 */

*** offsetWidth   元素的高度   border + padding + width + 滚轴宽度

***   scrollTop  元素卷起的高度 即滚动条  滚动距离  可读写


innerHeight  浏览器可视区域高度

outerHeight  整个浏览器的高度

screen.availHeight  设备显示器 的高度  也就是分辨率

screenTop  screenY  浏览器 距离 显示器 顶部  整个浏览器的高度


clientWidth  元素可视 宽度    即  padding + content
             有滚动条 要减去滚动条的  宽度。

clientTop    元素 边框 的  宽度


offsetTop     去元素 最近定位的父 元素  的  距离， 没有定位就是body 的距离
              margin-left + 父标签的 offsetHeight + margin-top

document.body.scrollWidth
  内容宽度 + 其他所有的padding margin border
  内容小与  body宽度  就等于 body 宽度
  无滚动条    scrollWidth  == clientWidth
  有滚动条    实际内容宽度 + padding*2


clientX 相对与浏览器的坐标
screenX 设备与浏览器坐标
offsetX 事件源与事件左上角坐标
pageX   整个网页左上角的坐标
X











