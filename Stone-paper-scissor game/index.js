var choices=['stone','paper','scissors'];
var movecontent=document.getElementById("moves")
var yourans=document.getElementById("yourans")
var compans=document.getElementById("compans")
var yourscore=document.getElementById("yourscore")
var compscore=document.getElementById("compscore")
var result=document.getElementById("result")
var reset=document.getElementById("reset")
var finalresult=document.getElementById("finalresult");

var moves=5;
var resultdata='';
var playerscore=0;
var Computerscore=0;
function func(data)
{

    if(moves!=0)
{
        var index=Math.floor(Math.random()*3);
        var ans=choices[index];
        var c=0;
        moves--;
    result.style.color="black";
        if(ans===data)
        {
            resultdata="Its A Tie 😯";
            result.textContent=resultdata;
        }
        else
        {
            switch(data)
            {
                case 'paper':
                resultdata=(ans==='stone')?"YOU WIN🤩":"YOU LOSE🤕";
                break;

                case 'stone':
                resultdata=(ans==='scissors')?"YOU WIN🤩":"YOU LOSE🤕";
                break;

                case 'scissors':
                resultdata=(ans=='paper')?"YOU WIN🤩" :"YOU LOSE🤕";
                break;

            }
        }
        if(resultdata==='YOU WIN🤩')
        {
                playerscore++;
                yourscore.textContent=playerscore;
                c=1;

        }
        else if(resultdata==='YOU LOSE🤕')
        {
            Computerscore++;
            compscore.textContent=Computerscore;
            c=2;
        }
        if(c==1)
        {
            result.style.color="green"
            result.textContent="Boom! You Won 🤩!";
        }
        else if(c==2){
            result.style.color="red"
            result.textContent="Oh No! You Lost 🤕!";
        }
        movecontent.textContent="Moves Left:"+moves;
    
        yourans.textContent="Your Choice : "+data.toUpperCase();
        compans.textContent="Computer Choice : "+ans.toUpperCase();
    
}
else{

    result.textContent="";
    reset.style.display="block";
    if(Computerscore>playerscore)
{
    finalresult.style.color="red";
    finalresult.textContent="Better Luck Next Time! 🤕";
}
else if(playerscore>Computerscore)
{
    finalresult.style.color="green";
    finalresult.textContent="You Won! Congratulations!🏆"

}
else{
    finalresult.style.color="black";
    finalresult.textContent="It's a Draw! 🤝";
}



}
}
function resett()
{
moves=5;
resultdata='';
Computerscore=0;
playerscore=0;
movecontent.textContent="Moves Left:"+moves;
reset.style.display="none";
result.textContent=''
yourscore.textContent=0;
compscore.textContent=0;
yourans.textContent="Your Choice:";
compans.textContent="Computer Choice";
finalresult.textContent='';


}

