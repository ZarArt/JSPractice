function _iframeLoader() {};

_iframeLoader.prototype.CreateFrames = function(currentDiv) {	
	var dataAttr = currentDiv.getAttribute("data-frame");
	var frames = dataAttr.split(",");
	var readyHtml = "";
	for (var i = 0; i < frames.length; i++) {
	 	var readyHtml += "<div class='val-outer-frame'><span class='val-ico-online'><i>Online</i></span><iframe src='"
		+ frames[i] + "'></iframe>";
	};
	currentDiv.insertAdjacentHTML("afterBagin", readyHtml);
};