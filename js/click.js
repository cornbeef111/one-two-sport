export function readMoreClick(){
    let text = document.querySelector('#txthide');
    let text1 = document.querySelector('#txthide1');
    let show = document.querySelector('#hide');
    let show1 = document.querySelector('#hide1');


    document.addEventListener('DOMContentLoaded',function(){
    show.style.display ="none"; 
    show1.style.display ="none"; 
    })

    document.addEventListener('click',function(){
            show.style.display="block";
            text.style.display="none";
    })
    document.addEventListener('click',function(){
            show1.style.display="block";
            text1.style.display="none";
    })
}