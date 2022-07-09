let gamepattern=[]
level=0;
started=false
$(document).keypress(function(){
    console.log(started)
    if(!started){
        nextsequence()
        print(level);
        started=true;
    }
});
start=(e)=>{
$(e).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).click(function(){
    if(!started){
        nextsequence()
        print(level);
        started=true;
    }
});}
start("span");
print=(l)=>{
$("h1").text(`Level-${l}`); 
}
let buttoncolor=["red", "blue", "green", "yellow"]
animate=(clr)=>{
    $("#"+clr).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);   
}
sound=(clr)=>{
let audio=new Audio(`sounds/${clr}.mp3`)
audio.play()
}
nextsequence=()=>{
usrptrn=[]
let no=Math.floor(Math.random()*4);
console.log(no)
let randomchosencolors=buttoncolor[no]
console.log(randomchosencolors)
gamepattern.push(randomchosencolors)
console.log(gamepattern)
animate(randomchosencolors);
sound(randomchosencolors);
level+=1;
print(level);
}
let usrptrn=[];
pressanimate=(clr)=>{
    $("#"+clr).addClass("pressed")
    setTimeout(()=>{
        $("#"+clr).removeClass("pressed")
    },200)
}
$(".btn").click(function(){
    var usrclr = $(this).attr("id");
   console.log(usrclr);
   pressanimate(usrclr)
   sound(usrclr)
   usrptrn.push(usrclr)
   checkanswer(usrptrn.length-1);
   
}) 
checkanswer=(clevel)=>{
    if(usrptrn[clevel]===gamepattern[clevel]){
        if (usrptrn.length==gamepattern.length){
            console.log("5t")
            setTimeout(() => {
                nextsequence()
            },1000);
        }
    }
        else {
            sound("wrong");
            $("body").addClass("game-over");
            $("#level-title").html("Game Over, Press Any Key to <span>Restart</span>");
            setTimeout(function () {
                $("body").removeClass("game-over");
              }, 200);
        
              startover();
              start("span");
            }
        }
startover=()=>{
level=0;
gamepattern=[];
started=false;
}
        
    