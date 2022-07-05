


$("#button-1").click(function() {
    loveCalculator();
});

function loveCalculator(){
var randomNum=Math.random()*100;
randomNum=Math.floor(randomNum)+1;
if(randomNum>85){
    $("h2").html(randomNum+"% you both are together like Laila and Majnu.");
}else if(randomNum<85 && randomNum>=70){
    $("h2").html("not bad !");
}else if(randomNum<70 && randomNum>=60){
    $("h2").html(randomNum+"% you both should spend time with each other");
}else if(randomNum>30 && randomNum<60){
    $("h2").html(randomNum+"% you both are together like oil and water");
}else{
    $("h2").html(randomNum+"% you should breakup");
}

}


