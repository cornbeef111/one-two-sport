let text = document.getElementById('txthide');
let text1 = document.getElementById('txthide1');
let show = document.getElementById('hide')
let show1 = document.getElementById('hide1')


document.addEventListener('DOMContentLoaded',function(){
  show.style.display ="none"; 
  show1.style.display ="none"; 
})

document.addEventListener('click',function(){
	if(true){
		show.style.display="block";
		text.style.display="none";
	}
})
document.addEventListener('click',function(){
	if(true){
		show1.style.display="block";
		text1.style.display="none";
	}
})