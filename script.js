
var d = document.querySelectorAll("button").length;

 for(var i=0; i<d; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        makeAnimation(buttonInnerHTML);
    });     
 }

 
 document.addEventListener("keypress", function(event){
    makeSound(event.key);
    makeAnimation(event.key);

 });


 
    
 function makeSound(key){
    

     switch(key) {
         case "w":
             var tom_1 = new Audio("sounds/tom-1.mp3");
             tom_1.play();
             break;
         case "a":
             var tom2 = new Audio("sounds/tom-2.mp3");
             tom2.play();
             break;
         case "s":
             var audio = new Audio("sounds/tom-3.mp3");
             audio.play();
             break;
         case "d":
             var audio = new Audio("sounds/tom-4.mp3");
             audio.play();
             break;
         case "j":
             var audio = new Audio("sounds/kick-bass.mp3");
             audio.play();
             break;
         case "k":
             var audio = new Audio("sounds/snare.mp3");
             audio.play();
             break;
         case "l":
             var audio = new Audio("sounds/crash.mp3");
             audio.play();
             break;
         default:
             console.log(buttonInnerHTML);
             
     }
 }


 function makeAnimation(currentKey) {
   var activeButton = document.querySelector("."+currentKey);
  
   activeButton.classList.add("pressed");
   setTimeout(function() {
    activeButton.classList.remove("pressed");
   }, 200);
    
   
 }





