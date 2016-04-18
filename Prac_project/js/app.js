function App() {
	this.init();
};
App.prototype = Object.create(Helper.prototype);
App.prototype.init = function() {
	new _iframeLoader(document.querySelector("div.iframe"));
};
function _iframeLoader(currentDiv) {
	if (!currentDiv) {
		return;
	};	
	this.CreateFrames(currentDiv);
};
_iframeLoader.prototype.CreateFrames = function(currentDiv) {	
	var dataAttr = currentDiv.getAttribute("data-frame");
	var frames = dataAttr.split(",");
	var readyHtml = "";
	for (var i = 0; i < frames.length; i++) {
	 	readyHtml += "<div class='val-outer-frame'><span class='val-ico-online'><i>Online</i></span><iframe src='"
		+ frames[i] + "'></iframe>";
	};
	currentDiv.insertAdjacentHTML("afterBegin", readyHtml);
};
window.addEventListener("DOMContentLoaded", new App());
// var divMain = document.getElementById("main");
// divMain.innerHTML = app.CompareDate("ukr", "2016-04-09 11:22:33");