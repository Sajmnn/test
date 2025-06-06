const red = document.getElementById('btn1');
const yellow = document.getElementById('btn2');
const green = document.getElementById('btn3');


red.addEventListener('click',function(){
    red.style.backgroundColor = red.textContent;
    red.style.color = "black";
})
yellow.addEventListener('click',function(){
    yellow.style.backgroundColor = yellow.textContent;
    yellow.style.color = "black";
})
green.addEventListener('click',function(){
    green.style.backgroundColor = green.textContent;
    green.style.color = "black";
})


