var id=setInterval(timer,1000);
function timer() {
	var ssd=new Date(2016,02,11,0,0,0,0);
	var time=(ssd-new Date())/1000;
	if(time<0) {document.getElementById('countdown').innerHTML="Spree Begins";closeInterval(id);}
	else {
		var s=Math.floor(time%60);
		var m=Math.floor((time/60)%60);
		var h=Math.floor((time/3600)%24);
		var d=Math.floor(time/86400);
		document.getElementById('countdown').innerHTML=d+" <small>days</small> "+h+" <small>hours</small> "+m+" <small>minutes</small> "+s+" <small>seconds</small>";
		}
}