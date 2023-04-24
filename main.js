

function check(){

	var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    
	var correct = 0;


    if (question1 == "2") {
    correct++;
}
    if (question2 == "6") {
    correct++;
}
    if (question3 == "3") {
    correct++;
    }

	var messages = ["Celé špatně", "Docela dobré", "Výborně"];
	var score;

	if (correct == 0) {
		score = 0;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 2;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "CELKOVÝ POČET BODŮ : " + correct + " ze 3";

	}
	