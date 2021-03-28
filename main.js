var mouseevent="empty";
var lastpositionofx;
var lastpositionofy;

canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
colour="red";
widthofline=1;
var width=screen.width;
var newwidth=screen.width-70;
var height=screen.height-300;

if(width< 992)
{
    document.getElementById("myCanvas").width =newwidth;
    document.getElementById("myCanvas").height =height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("mouseup",mymouseup);

    function mymouseup(e)
{
    mouseevent="mouseUp";

}

canvas.addEventListener("mouseleave",mymouseleave);
    function mymouseleave(e)
{
    mouseevent="mouseLeave";

}



canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e)
{
    console.log=("my_touchstart");
    colour=document.getElementById("linecolour").value;
    widthofline=document.getElementById("widthline").value;
    lastpositionofx= e.touches[0].clientX - canvas.offsetLeft;
    lastpositionofy= e.touches[0].clientY - canvas.offsetTop;

}

canvas.addEventListener("touchmove",my_touchmove);



function my_touchmove(e)
{
    console.log=("my_touchmove");
    currenetpositionoftouchx=e.touches[0].clientX - canvas.offsetLeft;
    currenetpositionoftouchy=e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=widthofline;
    
    
    
    ctx.moveTo(lastpositionofx,lastpositionofy);

    
    ctx.lineTo(currenetpositionoftouchx,currenetpositionoftouchy);

    ctx.stroke();

    lastpositionofx=currenetpositionoftouchx;
    lastpositionofy=currenetpositionoftouchy;
}
    
       
    


    

    



function cleararea()
{

    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}



