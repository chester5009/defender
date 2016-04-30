var canvas,ctx;
var width,height;
$(document).ready(function(){
   canvas= document.getElementById("canvas");
   ctx=canvas.getContext('2d');
   width=canvas.width;
   height=canvas.height;
   
});

function engine(){
    ctx.font="24px Verdana";
    if(isKeyDown('D')){
       ctx.clearRect(0,0,width,height);
       ctx.fillText("нажата D",50,70);
   }
   else if(isKeyDown('W')){
       ctx.clearRect(0,0,width,height);
       ctx.fillText("нажата W",50,70);
   }
   else if(isKeyDown('A')){
       ctx.clearRect(0,0,width,height);
       ctx.fillText("нажата A",50,70);
   }
   else if(isKeyDown('S')){
       ctx.clearRect(0,0,width,height);
       ctx.fillText("нажата S",50,70);
   }
};