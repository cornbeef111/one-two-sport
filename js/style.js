import { readMoreClick } from "./click.js";
import { blurOut } from "./blur.js";

readMoreClick();
blurOut();

// this is for animation
let sections = document.querySelectorAll('.anime');
window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;

		if(top >= offset && top < offset + height){
			sec.classList.add('show-animate');
		}
		else{
			sec.classList.remove('show-animate');
		}
	})
}
 // this is also to animate the carousel writeup
let writeUp = document.getElementById('write');
document.addEventListener("DOMContentLoaded",function(){
	writeUp.style.display='none'
	writeUp.style.opacity="0";
	writeUp.style.transform='translateX(-100%)';
});
setTimeout(() => writeUp.style.display='block',1000);
setTimeout(()=> {writeUp.style.opacity = "1";
                 writeUp.style.transform='translateX(0)';},2000);

// for the hover effect over event card
let eventCardhover = document.querySelector('#backbtn');
let eventcard = document.querySelector('#eventcardpic');
document.addEventListener("DOMContentLoaded",function(){
	eventCardhover.style.display='none';
})
eventcard.addEventListener("mouseover", ()=>{
	eventCardhover.style.display="block";
})
eventcard.addEventListener("mouseout", ()=>{
	eventCardhover.style.display="none";
})
                      // 2
let eventCardhover2 = document.querySelector('#backbtn2');
let eventcard2 = document.querySelector('#eventcardpic2');
document.addEventListener("DOMContentLoaded",function(){
	eventCardhover2.style.display='none';
})
eventcard2.addEventListener("mouseover", ()=>{
	eventCardhover2.style.display="block";
})
eventcard2.addEventListener("mouseout", ()=>{
	eventCardhover2.style.display="none";
})


