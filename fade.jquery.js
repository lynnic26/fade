// 封装为jquery or zepto插件
$.extend({
    setOpacity: function(el, opacity) {
        el.style.opacity = opacity / 100;
    }
});
$.fn.fadeBack = function(options) {//duration, delay, opacity
    var defaults = {
    	toOpacity: 100, // 到达的透明度 100以内正整数
        duration: 200, // 过渡时间
        delay: 20,
        callback: null
    }
    var self = this,
        $this = $(this);
 
    // 插件配置
    self.config = $.extend(defaults, options);

    // 初始化函数
    var _init = function () {

        // 初始化ui
        _initUI(); 

        // 加载效果
        _loadEffect();          
    }
    var _initUI = function() {
        $this[0].style.display = 'block';
        $.setOpacity($this[0], 0);
    }
	var _loadEffect = function() {	
		var duration = self.config.duration
		    , delay = self.config.delay
		    , opacity = self.config.toOpacity;
		var count = duration / delay; // 循环次数
		var step = opacity / count;  // 每次的透明度变化
		var cur = 0;
		(function() {
			cur += step;
            $.setOpacity($this[0], cur);
            if(cur < opacity) {
                setTimeout(arguments.callee, delay);
            }
		})();
	}
	
    // 启动
    _init();
    return this;
}

$.fn.fadeAway = function(options) {
    var defaults = {
        toOpacity: 0, // 到达的透明度 100以内正整数
        duration: 200, // 过渡时间
        delay: 20,
        callback: null
    }
    var self = this,
        $this = $(this);
 
    // 插件配置
    self.config = $.extend(defaults, options);

    // 初始化函数
    var _init = function () {

        // 初始化ui
        _initUI(); 

        // 加载效果
        _loadEffect();          
    }
    var _initUI = function() {
        $.setOpacity($this[0], 100);
    }
    var _loadEffect = function() {  
        var duration = self.config.duration
            , delay = self.config.delay
            , opacity = self.config.toOpacity;
        var count = duration / delay; // 循环次数
        var step = (100 - opacity) / count;  // 每次的透明度变化
        var cur = 100;
        (function() {
            cur -= step;
            $.setOpacity($this[0], cur);
            if(cur > opacity) {
                setTimeout(arguments.callee, delay);
            }
        })();
    }
    
    // 启动
    _init();
    return this;
}