var numSquares=6
var color=generateRandomColors(numSquares)
var h1=document.querySelector("h1")
var squares=document.querySelectorAll(".square")
var colorDisplay=document.querySelector("#colorDisplay")
var pickedColor=pickColor()
var message=document.querySelector("#msg")
var reset=document.querySelector("#reset")
var easy=document.querySelector("#easybtn")
var hard=document.querySelector("#hardbtn")

colorDisplay.textContent=pickedColor


hard.classList.add("selected")

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=color[i]


	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor
		if(clickedColor===pickedColor){
			message.textContent="Correct!"
			changeColor()
			reset.textContent="Play Again!"
		}
		else{
			message.textContent="Try Again"
			this.style.background="#232323"
		}
	})
}


function changeColor(){
	h1.style.background=pickedColor
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=pickedColor
	}
}


function pickColor(){
	var randomColor=Math.floor(Math.random()*color.length)
	return color[randomColor]
}

function generateRandomColors(num){
	var arr=[]
	for(var i=0;i<num;i++){
		var r=Math.floor(Math.random()*256)
		var g=Math.floor(Math.random()*256)
		var b=Math.floor(Math.random()*256)
		var rgb="rgb("+r+", "+g+", "+b+")"
		arr.push(rgb)
	}
	return arr
}

reset.addEventListener("click",function(){
	color=generateRandomColors(numSquares)
	pickedColor=pickColor()
	reset.textContent="NEW COLORS"
	colorDisplay.textContent=pickedColor
	h1.style.background="steelblue"
	message.textContent=""
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color[i]
	}
})


easy.addEventListener("click",function(){
	h1.style.background="steelblue"
	easy.classList.add("selected")
	hard.classList.remove("selected")
	numSquares=3
	color=generateRandomColors(numSquares)
	pickedColor=pickColor()
	message.textContent=""
	reset.textContent="New Colors"
	colorDisplay.textContent=pickedColor
	for(var i=3;i<squares.length;i++){
		squares[i].style.display="none"
	}
	for(var i=0;i<3;i++){
		squares[i].style.backgroundColor=color[i]
	}
})


hard.addEventListener("click",function(){
	h1.style.background="steelblue"
	easy.classList.remove("selected")
	hard.classList.add("selected")
	numSquares=6
	color=generateRandomColors(numSquares)
	pickedColor=pickColor()
	message.textContent=""
	reset.textContent="New Colors"
	colorDisplay.textContent=pickedColor
	for(var i=3;i<squares.length;i++){
		squares[i].style.display="block"
	}
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color[i]
	}
})