
var $click = 0;

var $multiplicateur = 1;
// var $total_bonus_multi = 0;

var $time = 1;
// var $total_bonus_fabrique = 0;

// COOKIE =========================
var $cookie = document.getElementById("cookie");
var $affichage = document.getElementById("affichage");

// BONUS MULTI ====================
var $multi = document.getElementById("multi");
var $compteur_multi = document.getElementById("compteur_multi");
var $cout_multi = document.getElementById("cout_multi");
var $total_multi = document.getElementById("total_multi");

// BONUS FABRIQUE =================
var $auto = document.getElementById("auto");
var $compteur_auto = document.getElementById("compteur_auto");
var $cout_auto = document.getElementById("cout_auto");
var $total_auto = document.getElementById("total_auto");

// SCORE =============================
// Affiche le 'score' de départ à 0 dans la <div id="affichage"></div>
$affichage.innerHTML = $click;

// BONUS =============================
//Affiche la valeur du prochain bonus
$compteur_multi.innerHTML = $multiplicateur;
// Affiche le montant des bonus multi
$cout_multi.innerHTML = 50*$multiplicateur;
//Affiche le total de bonus
$total_multi.innerHTML = $multiplicateur-1;

//Affiche la valeur du prochain bonus
$compteur_auto.innerHTML = $time;
// Affiche le montant des fabriques
$cout_auto.innerHTML = 200*$time;
//Affiche le total de bonus
$total_auto.innerHTML = $time-1;


// FONCTIONS =========================

//appelle les fonctions ==========
// => quand tu cliques sur id="" tu appelles la fonction
$cookie.onclick = points;
$multi.onclick = bonus; 
$auto.onclick = fabrique;

function points() {
	$click += $multiplicateur;
	// Affiche le 'score' dans la <div id="affichage"></div>
	$affichage.innerHTML = $click;
};

function bonus() {
	if ($click >= 50*$multiplicateur) {
		$click -= 50*$multiplicateur;
		$affichage.innerHTML = $click;
		$multiplicateur += 1;
		// Affichage
		$compteur_multi.innerHTML = $multiplicateur;
		$cout_multi.innerHTML = 50*$multiplicateur;
		$total_multi.innerHTML = $multiplicateur-1;

	}
};

function fabrique() {
	if ($click >= 200*$time) {
		$click -= 200*$time;
		$affichage.innerHTML = $click;
		// $auto = setInterval(points, 1000*$time);
		$auto = setInterval(points, 1000);
		$time += 1;
		// Affichage
		$compteur_auto.innerHTML = $time;
		$cout_auto.innerHTML = 200*$time;
		$total_auto.innerHTML = $time-1;
	}
}