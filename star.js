!function(){function t(){i(),a()}function i(){document.addEventListener("mousemove",o),document.addEventListener("touchmove",e),document.addEventListener("touchstart",e),window.addEventListener("resize",n)}function n(t){d=window.innerWidth,window.innerHeight}function e(t){if(t.touches.length>0)for(var i=0;i<t.touches.length;i++)s(t.touches[i].clientX,t.touches[i].clientY,r[Math.floor(Math.random()*r.length)])}function o(t){f.x=t.clientX,f.y=t.clientY,s(f.x,f.y,r[Math.floor(Math.random()*r.length)])}function s(t,i,n){var e=new l;e.init(t,i,n),u.push(e)}function h(){for(var t=0;t<u.length;t++)u[t].update();for(t=u.length-1;t>=0;t--)u[t].lifeSpan<0&&(u[t].die(),u.splice(t,1))}function a(){requestAnimationFrame(a),h()}function l(){this.character="*",this.lifeSpan=120,this.initialStyles={position:"fixed",top:"0",display:"block",pointerEvents:"none","z-index":"10000000",fontSize:"20px","will-change":"transform"},this.init=function(t,i,n){this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/2),y:1},this.position={x:t-10,y:i-20},this.initialStyles.color=n,this.element=document.createElement("span"),this.element.innerHTML=this.character,c(this.element,this.initialStyles),this.update(),document.body.appendChild(this.element)},this.update=function(){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.lifeSpan--,this.element.style.transform="translate3d("+this.position.x+"px,"+this.position.y+"px,0) scale("+this.lifeSpan/120+")"},this.die=function(){this.element.parentNode.removeChild(this.element)}}function c(t,i){for(var n in i)t.style[n]=i[n]}var r=["#f94a70","#ffd12b","#49c99a","#1f90ed"],d=window.innerWidth,f=(window.innerHeight,{x:d/2,y:d/2}),u=[];t()}();
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.POWERMODE=e():t.POWERMODE=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){"use strict";function n(t,e){return Math.random()*(e-t)+t}function r(t){if(d.colorful){var e=n(0,360);return"hsla("+n(e-10,e+10)+", 100%, "+n(50,80)+"%, 1)"}return window.getComputedStyle(t).color}function i(){var t,e=document.activeElement;if("TEXTAREA"===e.tagName||"INPUT"===e.tagName&&"text"===e.getAttribute("type")){var n=o(1)(e,e.selectionStart);return t=e.getBoundingClientRect(),{x:n.left+t.left,y:n.top+t.top,color:r(e)}}var i=window.getSelection();if(i.rangeCount){var a=i.getRangeAt(0),d=a.startContainer;return d.nodeType===document.TEXT_NODE&&(d=d.parentNode),t=a.getBoundingClientRect(),{x:t.left,y:t.top,color:r(d)}}return{x:0,y:0,color:"transparent"}}function a(t,e,o){return{x:t,y:e,alpha:1,color:o,velocity:{x:-1+2*Math.random(),y:-3.5+2*Math.random()}}}function d(){for(var t=i(),e=5+Math.round(10*Math.random());e--;)p[f]=a(t.x,t.y,t.color),f=(f+1)%500;if(d.shake){var o=1+2*Math.random(),n=o*(Math.random()>.5?-1:1),r=o*(Math.random()>.5?-1:1);document.body.style.marginLeft=n+"px",document.body.style.marginTop=r+"px",setTimeout(function(){document.body.style.marginLeft="",document.body.style.marginTop=""},75)}}function l(){requestAnimationFrame(l),u.clearRect(0,0,c.width,c.height);for(var t=0;t<p.length;++t){var e=p[t];e.alpha<=.1||(e.velocity.y+=.075,e.x+=e.velocity.x,e.y+=e.velocity.y,e.alpha*=.96,u.globalAlpha=e.alpha,u.fillStyle=e.color,u.fillRect(Math.round(e.x-1.5),Math.round(e.y-1.5),3,3))}}var c=document.createElement("canvas");c.width=window.innerWidth,c.height=window.innerHeight,c.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:999999",window.addEventListener("resize",function(){c.width=window.innerWidth,c.height=window.innerHeight}),document.body.appendChild(c);var u=c.getContext("2d"),p=[],f=0;d.shake=!0,d.colorful=!1,requestAnimationFrame(l),t.exports=d},function(t,e){!function(){function e(t,e,r){var i=r&&r.debug||!1;if(i){var a=document.querySelector("#input-textarea-caret-position-mirror-div");a&&a.parentNode.removeChild(a)}var d=document.createElement("div");d.id="input-textarea-caret-position-mirror-div",document.body.appendChild(d);var l=d.style,c=window.getComputedStyle?getComputedStyle(t):t.currentStyle;l.whiteSpace="pre-wrap","INPUT"!==t.nodeName&&(l.wordWrap="break-word"),l.position="absolute",i||(l.visibility="hidden"),o.forEach(function(t){l[t]=c[t]}),n?t.scrollHeight>parseInt(c.height)&&(l.overflowY="scroll"):l.overflow="hidden",d.textContent=t.value.substring(0,e),"INPUT"===t.nodeName&&(d.textContent=d.textContent.replace(/\s/g,"聽"));var u=document.createElement("span");u.textContent=t.value.substring(e)||".",d.appendChild(u);var p={top:u.offsetTop+parseInt(c.borderTopWidth),left:u.offsetLeft+parseInt(c.borderLeftWidth)};return i?u.style.backgroundColor="#aaa":document.body.removeChild(d),p}var o=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],n=null!=window.mozInnerScreenX;"undefined"!=typeof t&&"undefined"!=typeof t.exports?t.exports=e:window.getCaretCoordinates=e}()}])}),function(){POWERMODE.colorful=!0,POWERMODE.shake=!1,document.body.addEventListener("input",POWERMODE)}();
// 点击出字bynote.cn
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        ("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
           "color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
      3000,
      function() {
          $i.remove();
      });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}


/*样式二*/
/* 控制下雪 */
function snowFall(snow) {
    /* 可配置属性 */
    snow = snow || {};
    this.maxFlake = snow.maxFlake || 200;   /* 最多片数 */
    this.flakeSize = snow.flakeSize || 10;  /* 雪花形状 */
    this.fallSpeed = snow.fallSpeed || 1;   /* 坠落速度 */
}
/* 兼容写法 */
requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function(callback) { setTimeout(callback, 1000 / 60); };

cancelAnimationFrame = window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.msCancelAnimationFrame ||
	window.oCancelAnimationFrame;
/* 开始下雪 */
snowFall.prototype.start = function(){
    /* 创建画布 */
    snowCanvas.apply(this);
    /* 创建雪花形状 */
    createFlakes.apply(this);
    /* 画雪 */
    drawSnow.apply(this)
}
/* 创建画布 */
function snowCanvas() {
    /* 添加Dom结点 */
    var snowcanvas = document.createElement("canvas");
    snowcanvas.id = "snowfall";
    snowcanvas.width = window.innerWidth;
    snowcanvas.height = document.body.clientHeight;
    snowcanvas.setAttribute("style", "position:absolute; top: 0; left: 0; z-index: 1; pointer-events: none;");
    document.getElementsByTagName("body")[0].appendChild(snowcanvas);
    this.canvas = snowcanvas;
    this.ctx = snowcanvas.getContext("2d");
    /* 窗口大小改变的处理 */
    window.onresize = function() {
        snowcanvas.width = window.innerWidth;
        /* snowcanvas.height = window.innerHeight */
    }
}
/* 雪运动对象 */
function flakeMove(canvasWidth, canvasHeight, flakeSize, fallSpeed) {
    this.x = Math.floor(Math.random() * canvasWidth);   /* x坐标 */
    this.y = Math.floor(Math.random() * canvasHeight);  /* y坐标 */
    this.size = Math.random() * flakeSize + 2;          /* 形状 */
    this.maxSize = flakeSize;                           /* 最大形状 */
    this.speed = Math.random() * 1 + fallSpeed;         /* 坠落速度 */
    this.fallSpeed = fallSpeed;                         /* 坠落速度 */
    this.velY = this.speed;                             /* Y方向速度 */
    this.velX = 0;                                      /* X方向速度 */
    this.stepSize = Math.random() / 30;                 /* 步长 */
    this.step = 0                                       /* 步数 */
}
flakeMove.prototype.update = function() {
    var x = this.x,
        y = this.y;
    /* 左右摆动(余弦) */
    this.velX *= 0.98;
    if (this.velY <= this.speed) {
        this.velY = this.speed
    }
    this.velX += Math.cos(this.step += .05) * this.stepSize;

    this.y += this.velY;
    this.x += this.velX;
    /* 飞出边界的处理 */
    if (this.x >= canvas.width || this.x <= 0 || this.y >= canvas.height || this.y <= 0) {
        this.reset(canvas.width, canvas.height)
    }
};
/* 飞出边界-放置最顶端继续坠落 */
flakeMove.prototype.reset = function(width, height) {
    this.x = Math.floor(Math.random() * width);
    this.y = 0;
    this.size = Math.random() * this.maxSize + 2;
    this.speed = Math.random() * 1 + this.fallSpeed;
    this.velY = this.speed;
    this.velX = 0;
};
// 渲染雪花-随机形状（此处可修改雪花颜色！！！）
flakeMove.prototype.render = function(ctx) {
    var snowFlake = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
    snowFlake.addColorStop(0, "rgba(255, 255, 255, 0.9)");  /* 此处是雪花颜色，默认是白色 */
    snowFlake.addColorStop(.5, "rgba(255, 255, 255, 0.5)"); /* 若要改为其他颜色，请自行查 */
    snowFlake.addColorStop(1, "rgba(255, 255, 255, 0)");    /* 找16进制的RGB 颜色代码。 */
    ctx.save();
    ctx.fillStyle = snowFlake;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
};
/* 创建雪花-定义形状 */
function createFlakes() {
    var maxFlake = this.maxFlake,
        flakes = this.flakes = [],
        canvas = this.canvas;
    for (var i = 0; i < maxFlake; i++) {
        flakes.push(new flakeMove(canvas.width, canvas.height, this.flakeSize, this.fallSpeed))
    }
}
/* 画雪 */
function drawSnow() {
    var maxFlake = this.maxFlake,
        flakes = this.flakes;
    ctx = this.ctx, canvas = this.canvas, that = this;
    /* 清空雪花 */
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var e = 0; e < maxFlake; e++) {
        flakes[e].update();
        flakes[e].render(ctx);
    }
    /*  一帧一帧的画 */
    this.loop = requestAnimationFrame(function() {
        drawSnow.apply(that);
    });
}
/* 调用及控制方法 */
var snow = new snowFall({maxFlake:60});
snow.start();

!(function () {
    // 前面补零
    function prefixInteger(num, n) {
      return (Array(n).join(0) + num).slice(-n);
    }
  
    // 计时起始时间，仿照格式自行修改
    var start = Date.parse("2024-10-07T23:03:05");
  
    function update() {
      var now = Date.now() + 250;
      var interval = (now - start) / 1000;
      var days = Math.floor(interval / 60 / 60 / 24);
      var hours = Math.floor((interval / 60 / 60) % 24);
      var minutes = Math.floor((interval / 60) % 60);
      var seconds = Math.floor(interval % 60);
  
      hours = prefixInteger(hours, 2);
      minutes = prefixInteger(minutes, 2);
      seconds = prefixInteger(seconds, 2);
  
      document.getElementById(
        "website-duration"
      ).innerHTML = `本站已运行 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒`;
    }
  
    update();
    setInterval(update, 250);
  })();

 // 在手机端显示的背景图片链接
const mobileBgImageUrl = "url('/img/R-C.jpg')";

// 在电脑端显示的背景图片链接
const desktopBgImageUrl = "url('/img/R-C.jpg')";

// 在手机端设置背景图片
if (window.innerWidth < 768) {
  document.querySelector('#web_bg').setAttribute('style', `background-image: ${mobileBgImageUrl};position: fixed;width: 100%;height: 100%;z-index: -1;background-size: cover;`);
} else {
  // 在电脑端设置背景图片
  document.querySelector('#web_bg').setAttribute('style', `background-image: ${desktopBgImageUrl};position: fixed;width: 100%;height: 100%;z-index: -1;background-size: cover;`);
}

// 设置banner的背景图片为空
document.querySelector("#banner").setAttribute('style', 'background-image: none');

// 设置banner的.mask背景颜色透明
document.querySelector("#banner .mask").setAttribute('style', 'background-color: rgba(0,0,0,0)');

const cards = document.querySelectorAll('.index-card')
if (cards.length) {
  document.querySelector('.row').setAttribute('style', 'overflow: hidden;')
  const coefficient = document.documentElement.clientWidth > 768 ? .5 : .3
  const origin = document.documentElement.clientHeight - cards[0].getBoundingClientRect().height * coefficient

  function throttle(fn, wait) {
    let timer = null;
    return function () {
      const context = this;
      const args = arguments;
      if (!timer) {
        timer = setTimeout(function () {
          fn.apply(context, args);
          timer = null;
        }, wait)
      }
    }
  }

  function handle() {
    cards.forEach(card => {
      card.setAttribute('style', `--state: ${(card.getBoundingClientRect().top - origin) < 0 ? 1 : 0};`)
    })
    console.log(1)
  }


  document.addEventListener("scroll", throttle(handle, 100));
}