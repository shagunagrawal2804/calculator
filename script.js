let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click' , (e) =>{
        if (e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
        string += e.target.innerHTML;
        input.value = string;
        }
    })
})

var icon = document.getElementById("mode");
var logo = document.getElementById("logo").querySelector("img");

icon.onclick= function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src= "./images/sun-solid-24.png";
        logo.src= "./images/Screenshot__22_-removebg-preview.png" ;
        logo.width = 190;
        logo.height = 140;
       
    }
    else{
        icon.src= "./images/moon-solid-24.png";
        logo.src= "./images/Screenshot__26_-removebg-preview.png";
        logo.width = 190;
        logo.height = 140;
        
    }
}

