var clickedArray = []
var showed = 0;
window.onload = function (){
	
	
	
	
	var arr = document.getElementsByTagName("td")
	for (var x = 0; x < arr.length; x++) {
		arr[x].value = num[x];
		arr[x].completed = false;
		arr[x].clicked = false;
		arr[x].onmouseover = mIn;
		arr[x].onmouseout = mOut;
		arr[x].addEventListener('click', function(){
			this.style.backgroundColor = "red";
			
			if(this.clicked == false && this.completed == false){
                clickedArray.push(this);
                reveal(this);
            }
			
			if(clickedArray.length == 2)
			{
				if(clickedArray[0].value == clickedArray[1].value)
				{
					clickedArray = []
					showed += 2;
					if(showed == 8) setTimeout(function(){alert("You won")},100);
				}
				else
				{
					setTimeout(function(){
					hide(clickedArray[0]);
                    hide(clickedArray[1]);
					clickedArray = [];
					}, 500);
				}
			}
		});
	}
}

function reveal(cell){
        cell.style.backgroundColor = "red";
        cell.innerHTML = cell.value;
        cell.clicked = true;
    }
	
function hide(cell){
        cell.style.backgroundColor = "blue";
        cell.innerHTML = "";
        cell.clicked = false;
    }

function mIn() {
	if(this.completed == false && this.clicked == false)
	this.style.backgroundColor = "orange";
};


function mOut() {
	if(this.completed == false && this.clicked == false)
	{
	this.style.backgroundColor = "blue";
	this.innerHTML = '';
	}
};


function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min) ) + min;
}

var num = [];
var times = [];
for(var i = 0;i < 5; i++) times[i] = 0;


var x = 0

do{
	x = getRndInteger(0,5);
	if (times[x] == 2) continue;
	else {
		times[x]++;
		num.push(x);
	}
}
while(num.length < 9);

	

console.log(times);
console.log(num);
