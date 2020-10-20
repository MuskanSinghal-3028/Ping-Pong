var ball=document.getElementById("ball");
var r1=document.getElementById("r1");
var r2=document.getElementById("r2");
let name;
let max;
let bspeedX=2;
let bspeedY=2;
let gameon;
let score,id;
let storescore="ags";
let storename="bdd";

function reset(rname)
	{
		r1.style.left=(window.innerWidth-r1.offsetWidth)/2 + "px";
		r2.style.left=(window.innerWidth-r2.offsetWidth)/2  + "px";
		ball.style.left=(window.innerWidth-ball.offsetWidth)/2 + "px";
if(rname==="rod1")
{
ball.style.top=(r2.offsetTop-r2.offsetHeight-10)+ "px";
bspeedY=-2;
	}
	else if(rname==="rod2")
	{
ball.style.top=(r1.offsetTop+r1.offsetHeight)+ "px";
bspeedY=2;
	}
	gameon=false;
	score=0;
};
function start(){
	 name=localStorage.getItem(storename);
	 max=localStorage.getItem(storescore);
	if(name===null|| max===null)
	{
		alert("Its your first Time...Let's Start");
max=0;
name="rod1";
// reset(name);
	}
	else{
		alert(name + " " +"has max score"+" "+max);
	}
reset(name);
};
start();







function store(r,s)
{
if(s>max)
{
	max=s;
	name=r;
	localStorage.setItem(storename,r);
	localStorage.setItem(storescore,s);
}
clearInterval(id);

alert(r +" "+"wins with score"+" "+s+"...."+name +"has max"+" "+max);
reset(r);




};

window.addEventListener("keypress",function(){
	let kc=event.code;
	let rodspeed=10;
	let rd=r1.getBoundingClientRect();
	if((kc==="KeyD") && ((rd.x+rd.width)<window.innerWidth))
	{
		r1.style.left=(rd.x) + rodspeed + 'px';
		r2.style.left=r1.style.left;
	}
	else if(kc==="KeyA" && rd.x>0)
	{
		r1.style.left=(rd.x) - rodspeed + 'px';
		r2.style.left=r1.style.left;
	}
	if(kc==="Enter")
	{ $("#al").remove();
		if(!gameon){
		gameon=true;
// let ballrect=ball.getBoundingClientRect();
// let ballX = ballrect.x;
//             let ballY = ballrect.y;
id=setInterval(function(){
let ballrect=ball.getBoundingClientRect();
let ballX = ballrect.x;
             let ballY = ballrect.y;	
// ball.style.left=ballrect.x+bspeedX;
// ball.style.top=ballrect.y+bspeedY;
 ballX += bspeedX;
                ballY += bspeedY;

let rod1X=r1.getBoundingClientRect().x;
let rod2X=r2.getBoundingClientRect().x;
 ball.style.left = ballX + 'px';
                ball.style.top = ballY + 'px';
if(ballX<0 || (window.innerWidth<(ballX+ballrect.width)))
{
	bspeedX=-bspeedX;
}
let ballpos=ballX+(ball.offsetWidth)/2;
if(ballY<=r1.offsetHeight)
{
	bspeedY=-bspeedY;
	score++;
	 if((ballpos<rod1X) || (ballpos>(r1.offsetWidth+rod1X)))
{
store("rod2",score);
}
}

if((ballY+ ballrect.width)>=(window.innerHeight-r2.offsetHeight))
{
	bspeedY=-bspeedY;
	score++;
	if((ballpos<rod2X) || (ballpos>(r2.getBoundingClientRect().right)))
{
store("rod1",score);
}
}

 },10);
}
	}
});





























