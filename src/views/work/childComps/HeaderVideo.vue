<template>
  <div class="intro">
    <p>
      ·Header部分摆视频是一种非常常见的技术。其实现的基本方法就是定一个div。这个div需要一个高度，我写了height=30vh，这样div的高度可以根据浏览器窗口的高度进行一个调节。给div一个相对定位（relative）。然后在这个div内部插入一个视频标签。让视频绝对定位（absolute）水平和垂直都居中。然后给视频一个宽度百分百。此时你就可以在这个div看到视频的中间位置了。然后再给div上一个overflow:hidden就可以把多出来的视频部分给砍掉啦。原理可以看下图
    </p>
    <img src="~assets/workImg/headVideoPaint.png" alt="" />
    <p>
      ·然后就是如何把logo加上视频并且给视频一个薄膜。我的做法依旧简单。先来个h1加在视频的下方,可以把他当做一个div。然后给他来个相对定位，height=百分百，然后background:rgba。此时一张膜就已经出来了。再在这个h1内部添加一个div，在div中添加文字或者图片。然后让这个div绝对定位水平垂直居中。你的logo就制作完成了
    </p>
    <img class="bigimg" src="~assets/workImg/headVideoLogo.png" alt="" />
    <img src="~assets/workImg/headVideoCss.png" alt="" />
    <p>
      ·在完成了上面的操作之后，一个酷炫的头部部分就完成了。当然，为了使这个头部更加有看点。我还添加了一些功能性的东西。
    </p>
    <p>
      ·让鼠标放在视频区域的时候，可以弹出控制视频播放，和开启视频声音的switch。这样对用户体验好
    </p>
    <img class="bigimg" src="~assets/workImg/headVideoSwitch.png" alt="" />
    <p>
      ·其实做法也很简单，你已经知道怎么做了。先在data()里面定义一个isShowBox变量，默认为false。然后给这个大div绑定一个鼠标经过触发的事件
      @mouseenter，这个事件触发的时候执行一个函数
      mouseOn()，这个函数可以修改isShowBox的值为反值（也就是true）。
    </p>

    <p>
      ·然后再在h1标签中添加两个switch
      box，给他们上一个v-show="isShowBox"。完成了上述的操作，这个显示和隐藏switch
      box的功能也就完成了。然后再把它们用绝对定位定到右下角就Ok了
    </p>
    <img class="bigimg" src="~assets/workImg/headVideoShowBox.png" alt="" />
    <p>
      ·别忘了，刚刚的操作只是鼠标放在上面让其显示，当鼠标离开的时候他们不会隐藏。你还需要加一步操作，就是@mouseleave的时候再执行一次mouseOn()函数。这样当你鼠标离开的时候isShowbox当前的值（true）又会被取反变为false。那么这个switch
      box则会被隐藏
    </p>
    <img src="~assets/workImg/mouseOn.png" alt="" />
    <img class="bigimg" src="~assets/workImg/headerVideoData.png" alt="" />
    <p>
      ·当你学会怎么做显示和隐藏switch
      box的话，你可以利用其核心原理把视频的静音和关闭功能也做出来。还是一样的套路，还是那个味。细心的你一定也留意到transition坨臃肿的标签。它的主要功能是让switch
      box的隐藏和显示做一个过渡效果。其实有一个trick（小技巧）可以实现这个功能，能少写很多代码。我会在一个折叠面板中专门谈这个技巧
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.intro p {
  margin: 10px 0;
}
@media screen and (max-width: 479px) {
  img {
    width: 100%;
  }
}
@media screen and (max-width: 1280px) {
  .bigimg {
    width: 100%;
  }
}
</style>
