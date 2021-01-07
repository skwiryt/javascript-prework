function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	let messages = document.getElementById('messages');
	messages.appendChild(div);
	messages.classList.add("highlight");
}

function clearMessages(){
	let messages = document.getElementById('messages');
	messages.innerHTML = '';
	messages.classList.remove("highlight");

}

function showScores(yourScore, computerScore){
 document.getElementById("your-score").innerHTML = yourScore;
 document.getElementById("computer-score").innerHTML = computerScore;
}

function clearScores() {
	document.getElementById("your-score").innerHTML = 0;
 document.getElementById("computer-score").innerHTML = 0;
}