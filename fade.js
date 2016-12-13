var Fade = {
	setOpacity: function(el, v) {
        el.style.opacity = v;
	},
	fadeIn: function(el, duration, delay, opacity) {
		var delay = delay || 20
		    , opacity = opacity || 1
		    , _this = this;

		// 初始化
		el.style.display = 'block';
		_this.setOpacity(el, 0);
		
		var count = duration / delay; // 循环次数
		var step = opacity / count;  // 每次的透明度变化
		var cur = 0;
		(function() {
			cur += step;
            _this.setOpacity(el, cur);
            if(cur <= opacity) {
                setTimeout(arguments.callee, delay);
            }
		})();
	},
	fadeOut: function(el, duration, delay, opacity) {
        var delay = delay || 20
            , opacity = opacity || 0
            , _this = this;

        _this.setOpacity(el, 1);

        var count = duration / delay;
        var step = (1 - opacity) / count;
        var cur = 1;
        (function() {
            cur -= step;
            _this.setOpacity(el, cur);
            if(cur <= 0) {

            	// 透明度为0的时候要移除元素的占位
                el.style.display = 'none';
            }
            if(cur > opacity) {
            	setTimeout(arguments.callee, delay);
            }
        })();
	}
}
var btnIn = document.getElementById('fadeInBtn');
var btnOut = document.getElementById('fadeOutBtn');
var elAfter = document.getElementById('after');
btnIn.onclick = function() {
	Fade.fadeIn(elAfter, 400, 20);
}
btnOut.onclick = function() {
	Fade.fadeOut(elAfter, 200, 20);
}