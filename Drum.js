var n=document.querySelectorAll(".drum").length;

for(let i=0;i<n;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){

//this.style.color="white";
var buttonInnerHTML=this.innerHTML;

switch(buttonInnerHTML)
{
    case "l":
        var s1=new Audio('sounds/crash.mp3');
        s1.play();
        break;

    case "e":
        var s2=new Audio('sounds/kick-bass.mp3');
        s2.play();
        break;
    case "t":
        var s3=new Audio('sounds/snare.mp3');
        s3.play();
        break;

     case "s":
        var s4=new Audio('sounds/tom-1.mp3');
        s4.play();
        break;
        case "f":
        var s5=new Audio('sounds/tom-2.mp3');
        s5.play();
        break;

    case "u":
        var s6=new Audio('sounds/tom-3.mp3');
        s6.play();
        break;
    case "n":
        var s7=new Audio('sounds/tom-4.mp3');
        s7.play();
        break;

        default:
            console.log("Invalid buton");
    
}
});
    
}