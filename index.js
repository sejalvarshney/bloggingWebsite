window.onload = function(){
	tl = new TimelineLite();
	tl.to("#ask", 2, {opacity:0, ease:Power1.easeOut, delay:2})
	.staggerFrom(".mood", 1.2, {autoAlpha:0, scale: 0.8, ease:Power3.easeIn},0.3)
	.set("#ask",{css:{zIndex:-2}})    
};

function motivateclick() {
	TweenMax.to("#motivate",1,{css:{width:"100vw"}});
	TweenMax.set("#motivate",{css:{zIndex:2}})
	TweenMax.set("#motivateContent",{css:{zIndex:3}})
	.to("#motivateContent", 0.5, {autoAlpha:0 , top:"-100%"})
};

function happyclick() {
	happytl = new TimelineLite();
	happytl.to("#happy",1,{css:{width:"100vw"}})
			.set("#happy",{css:{zIndex:2}})
			.set("#happyContent",{css:{zIndex:3}})
			.to("#happyContent", 0.5, {autoAlpha:0 , top:"-100%"})
} ;	