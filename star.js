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
//动态彩带
(function (name, factory) {
    if (typeof window === "object") {
        window[name] = factory()
    }
})("Ribbons", function () {
    var _w = window,
        _b = document.body,
        _d = document.documentElement;
    var random = function () {
        if (arguments.length === 1) {
            if (Array.isArray(arguments[0])) {
                var index = Math.round(random(0, arguments[0].length - 1));
                return arguments[0][index]
            }
            return random(0, arguments[0])
        } else if (arguments.length === 2) {
            return Math.random() * (arguments[1] - arguments[0]) + arguments[0]
        }
        return 0
    };
    var screenInfo = function (e) {
        var width = Math.max(0, _w.innerWidth || _d.clientWidth || _b.clientWidth || 0),
            height = Math.max(0, _w.innerHeight || _d.clientHeight || _b.clientHeight || 0),
            scrollx = Math.max(0, _w.pageXOffset || _d.scrollLeft || _b.scrollLeft || 0) - (_d.clientLeft || 0),
            scrolly = Math.max(0, _w.pageYOffset || _d.scrollTop || _b.scrollTop || 0) - (_d.clientTop || 0);
        return {
            width: width,
            height: height,
            ratio: width / height,
            centerx: width / 2,
            centery: height / 2,
            scrollx: scrollx,
            scrolly: scrolly
        }
    };
    var mouseInfo = function (e) {
        var screen = screenInfo(e),
            mousex = e ? Math.max(0, e.pageX || e.clientX || 0) : 0,
            mousey = e ? Math.max(0, e.pageY || e.clientY || 0) : 0;
        return {
            mousex: mousex,
            mousey: mousey,
            centerx: mousex - screen.width / 2,
            centery: mousey - screen.height / 2
        }
    };
    var Point = function (x, y) {
        this.x = 0;
        this.y = 0;
        this.set(x, y)
    };
    Point.prototype = {
        constructor: Point,
        set: function (x, y) {
            this.x = x || 0;
            this.y = y || 0
        },
        copy: function (point) {
            this.x = point.x || 0;
            this.y = point.y || 0;
            return this
        },
        multiply: function (x, y) {
            this.x *= x || 1;
            this.y *= y || 1;
            return this
        },
        divide: function (x, y) {
            this.x /= x || 1;
            this.y /= y || 1;
            return this
        },
        add: function (x, y) {
            this.x += x || 0;
            this.y += y || 0;
            return this
        },
        subtract: function (x, y) {
            this.x -= x || 0;
            this.y -= y || 0;
            return this
        },
        clampX: function (min, max) {
            this.x = Math.max(min, Math.min(this.x, max));
            return this
        },
        clampY: function (min, max) {
            this.y = Math.max(min, Math.min(this.y, max));
            return this
        },
        flipX: function () {
            this.x *= -1;
            return this
        },
        flipY: function () {
            this.y *= -1;
            return this
        }
    };
    var Factory = function (options) {
        this._canvas = null;
        this._context = null;
        this._sto = null;
        this._width = 0;
        this._height = 0;
        this._scroll = 0;
        this._ribbons = [];
        this._options = {
            colorSaturation: "80%",
            colorBrightness: "60%",
            colorAlpha: 0.65,
            colorCycleSpeed: 6,
            verticalPosition: "center",
            horizontalSpeed: 150,
            ribbonCount: 5,
            strokeSize: 5,
            parallaxAmount: -0.5,
            animateSections: true
        };
        this._onDraw = this._onDraw.bind(this);
        this._onResize = this._onResize.bind(this);
        this._onScroll = this._onScroll.bind(this);
        this.setOptions(options);
        this.init()
    };
    Factory.prototype = {
        constructor: Factory,
        setOptions: function (options) {
            if (typeof options === "object") {
                for (var key in options) {
                    if (options.hasOwnProperty(key)) {
                        this._options[key] = options[key]
                    }
                }
            }
        },
        init: function () {
            try {
                this._canvas = document.createElement("canvas");
                this._canvas.style["display"] = "block";
                this._canvas.style["position"] = "fixed";
                this._canvas.style["margin"] = "0";
                this._canvas.style["padding"] = "0";
                this._canvas.style["border"] = "0";
                this._canvas.style["outline"] = "0";
                this._canvas.style["left"] = "0";
                this._canvas.style["top"] = "0";
                this._canvas.style["width"] = "100%";
                this._canvas.style["height"] = "100%";
                this._canvas.style["z-index"] = "-1";
                this._onResize();
                this._context = this._canvas.getContext("2d");
                this._context.clearRect(0, 0, this._width, this._height);
                this._context.globalAlpha = this._options.colorAlpha;
                window.addEventListener("resize", this._onResize);
                window.addEventListener("scroll", this._onScroll);
                document.body.appendChild(this._canvas)
            } catch (e) {
                console.warn("Canvas Context Error: " + e.toString());
                return
            }
            this._onDraw()
        },
        addRibbon: function () {
            var dir = Math.round(random(1, 9)) > 5 ? "right" : "left",
                stop = 1000,
                hide = 200,
                min = 0 - hide,
                max = this._width + hide,
                movex = 0,
                movey = 0,
                startx = dir === "right" ? min : max,
                starty = Math.round(random(0, this._height));
            if (/^(top|min)$/i.test(this._options.verticalPosition)) {
                starty = 0 + hide
            } else if (/^(middle|center)$/i.test(this._options.verticalPosition)) {
                starty = this._height / 2
            } else if (/^(bottom|max)$/i.test(this._options.verticalPosition)) {
                starty = this._height - hide
            }
            var ribbon = [],
                point1 = new Point(startx, starty),
                point2 = new Point(startx, starty),
                point3 = null,
                color = Math.round(random(0, 360)),
                delay = 0;
            while (true) {
                if (stop <= 0) break;
                stop--;
                movex = Math.round((Math.random() * 1 - 0.2) * this._options.horizontalSpeed);
                movey = Math.round((Math.random() * 1 - 0.5) * (this._height * 0.25));
                point3 = new Point();
                point3.copy(point2);
                if (dir === "right") {
                    point3.add(movex, movey);
                    if (point2.x >= max) break
                } else if (dir === "left") {
                    point3.subtract(movex, movey);
                    if (point2.x <= min) break
                }
                ribbon.push({
                    point1: new Point(point1.x, point1.y),
                    point2: new Point(point2.x, point2.y),
                    point3: point3,
                    color: color,
                    delay: delay,
                    dir: dir,
                    alpha: 0,
                    phase: 0
                });
                point1.copy(point2);
                point2.copy(point3);
                delay += 4;
                color += this._options.colorCycleSpeed
            }
            this._ribbons.push(ribbon)
        },
        _drawRibbonSection: function (section) {
            if (section) {
                if (section.phase >= 1 && section.alpha <= 0) {
                    return true
                }
                if (section.delay <= 0) {
                    section.phase += 0.02;
                    section.alpha = Math.sin(section.phase) * 1;
                    section.alpha = section.alpha <= 0 ? 0 : section.alpha;
                    section.alpha = section.alpha >= 1 ? 1 : section.alpha;
                    if (this._options.animateSections) {
                        var mod = Math.sin(1 + section.phase * Math.PI / 2) * 0.1;
                        if (section.dir === "right") {
                            section.point1.add(mod, 0);
                            section.point2.add(mod, 0);
                            section.point3.add(mod, 0)
                        } else {
                            section.point1.subtract(mod, 0);
                            section.point2.subtract(mod, 0);
                            section.point3.subtract(mod, 0)
                        }
                        section.point1.add(0, mod);
                        section.point2.add(0, mod);
                        section.point3.add(0, mod)
                    }
                } else {
                    section.delay -= 0.5
                }
                var s = this._options.colorSaturation,
                    l = this._options.colorBrightness,
                    c = "hsla(" + section.color + ", " + s + ", " + l + ", " + section.alpha + " )";
                this._context.save();
                if (this._options.parallaxAmount !== 0) {
                    this._context.translate(0, this._scroll * this._options.parallaxAmount)
                }
                this._context.beginPath();
                this._context.moveTo(section.point1.x, section.point1.y);
                this._context.lineTo(section.point2.x, section.point2.y);
                this._context.lineTo(section.point3.x, section.point3.y);
                this._context.fillStyle = c;
                this._context.fill();
                if (this._options.strokeSize > 0) {
                    this._context.lineWidth = this._options.strokeSize;
                    this._context.strokeStyle = c;
                    this._context.lineCap = "round";
                    this._context.stroke()
                }
                this._context.restore()
            }
            return false
        },
        _onDraw: function () {
            for (var i = 0, t = this._ribbons.length; i < t; ++i) {
                if (!this._ribbons[i]) {
                    this._ribbons.splice(i, 1)
                }
            }
            this._context.clearRect(0, 0, this._width, this._height);
            for (var a = 0; a < this._ribbons.length; ++a) {
                var ribbon = this._ribbons[a],
                    numSections = ribbon.length,
                    numDone = 0;
                for (var b = 0; b < numSections; ++b) {
                    if (this._drawRibbonSection(ribbon[b])) {
                        numDone++
                    }
                }
                if (numDone >= numSections) {
                    this._ribbons[a] = null
                }
            }
            if (this._ribbons.length < this._options.ribbonCount) {
                this.addRibbon()
            }
            requestAnimationFrame(this._onDraw)
        },
        _onResize: function (e) {
            var screen = screenInfo(e);
            this._width = screen.width;
            this._height = screen.height;
            if (this._canvas) {
                this._canvas.width = this._width;
                this._canvas.height = this._height;
                if (this._context) {
                    this._context.globalAlpha = this._options.colorAlpha
                }
            }
        },
        _onScroll: function (e) {
            var screen = screenInfo(e);
            this._scroll = screen.scrolly
        }
    };
    return Factory
});
new Ribbons({
    colorSaturation: "60%",
    colorBrightness: "50%",
    colorAlpha: 0.5,
    colorCycleSpeed: 5,
    verticalPosition: "random",
    horizontalSpeed: 200,
    ribbonCount: 3,
    strokeSize: 0,
    parallaxAmount: -0.2,
    animateSections: true
});
!function(){function o(w,v,i){return w.getAttribute(v)||i}function j(i){return document.getElementsByTagName(i)}function l(){var i=j("script"),w=i.length,v=i[w-1];return{l:w,z:o(v,"zIndex",-1),o:o(v,"opacity",0.5),c:o(v,"color","0,0,0"),n:o(v,"count",99)}}function k(){r=u.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n=u.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function b(){e.clearRect(0,0,r,n);var w=[f].concat(t);var x,v,A,B,z,y;t.forEach(function(i){i.x+=i.xa,i.y+=i.ya,i.xa*=i.x>r||i.x<0?-1:1,i.ya*=i.y>n||i.y<0?-1:1,e.fillRect(i.x-0.5,i.y-0.5,1,1);for(v=0;v<w.length;v++){x=w[v];if(i!==x&&null!==x.x&&null!==x.y){B=i.x-x.x,z=i.y-x.y,y=B*B+z*z;y<x.max&&(x===f&&y>=x.max/2&&(i.x-=0.03*B,i.y-=0.03*z),A=(x.max-y)/x.max,e.beginPath(),e.lineWidth=A/2,e.strokeStyle="rgba("+s.c+","+(A+0.2)+")",e.moveTo(i.x,i.y),e.lineTo(x.x,x.y),e.stroke())}}w.splice(w.indexOf(i),1)}),m(b)}var u=document.createElement("canvas"),s=l(),c="c_n"+s.l,e=u.getContext("2d"),r,n,m=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(i){window.setTimeout(i,1000/45)},a=Math.random,f={x:null,y:null,max:20000};u.id=c;u.style.cssText="position:fixed;top:0;left:0;z-index:"+s.z+";opacity:"+s.o;j("body")[0].appendChild(u);k(),window.onresize=k;window.onmousemove=function(i){i=i||window.event,f.x=i.clientX,f.y=i.clientY},window.onmouseout=function(){f.x=null,f.y=null};for(var t=[],p=0;s.n>p;p++){var h=a()*r,g=a()*n,q=2*a()-1,d=2*a()-1;t.push({x:h,y:g,xa:q,ya:d,max:6000})}setTimeout(function(){b()},100)}();
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