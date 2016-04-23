function _slider(currentUl, divForSpans) {
			if (!currentUl) {
				return;
				console.log("no 1");
			};
			this.currentSlide = 1;
			this.currentSlideWidth = currentUl.children[0].width
			this.CreateSpans(currentUl, divForSpans);
		};
_slider.prototype.CreateSpans = function(currentUl, divForSpans) {	
	var readySpanHTML = "";
	for (var i = 0; i < currentUl.children.length; i++) {
		currentUl.children[i].setAttribute("data-slide", i);
		readySpanHTML += "<span data-controls='"+ i +"'>" + "</span>";
	};
	divForSpans.innerHTML = readySpanHTML;
	divForSpans.children[0].classList.add("-active-slide");
	divForSpans.addEventListener("click", this.ChangeSlide.bind(this));
		};
_slider.prototype.ChangeSlide = function(e) {
	var spanAttrData = e.target.getAttribute("data-controls");
	currentUl = document.querySelector("ul.val-list-slider");
	divForSpans = document.querySelector("div.val-display-controls");
	for (var i = 0; i < divForSpans.children.length; i++) {
		if (divForSpans.children[i].classList.contains("-active-slide")) {
			divForSpans.children[i].classList.remove("-active-slide");
			break;
		}
	}
	divForSpans.children[spanAttrData].classList.add("-active-slide");
	if(Math.abs(spanAttrData - this.currentSlide) < 2){
		currentUl.style.cssText = "transition: 1s; transform: translateX(" +
		(-688 * spanAttrData) + "px)";
	}			
	else{
		currentUl.style.cssText = "transition: 0.5s; transform: translateX(" +
		(-688 * spanAttrData) + "px)";
	}
	this.currentSlide = spanAttrData;
}