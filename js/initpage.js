var step1 = prompt('Souhaiter vous une couleur de fond ?\n Si la réponse est différente de oui génération du backround en blanc');
if (step1 != null && step1 == 'oui') {
		var step2 = prompt('Quel est votre couleur ? ex : black');
		$("#paint").css("background-color", step2)
	}
	else
		$("#paint").css("background-color", 'white');
var step3 = prompt("Quel est votre nom d'artiste ?")
if (step3 != null && step3 != '') {
	$('<p>').html('artiste : '+step3).appendTo('body');
}