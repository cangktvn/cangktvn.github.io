window.onload = function(){
	var start = document.getElementById("start");
	start.stop = true;
	var reset = document.getElementById("reset");
	var record = document.getElementById("record");
	var pasttime = document.getElementById("pasttime");
	start.onclick = starttimer;
	reset.onclick = function(){time = 0};
	record.onclick = function(){
		var para = document.createElement("p");
		var node = document.createTextNode(time);
		para.appendChild(node);
		pasttime.appendChild(para);
	}
};
var time = 0;
var interval;
function starttimer(){
	
	if (this.stop == true){
		interval = setInterval(function(){
        	time++;
            document.getElementById("showtime").innerHTML = time;
        	},100);
		this.stop = false;
	}
	else {
		clearInterval(interval);
		this.stop = true;
	}
	}