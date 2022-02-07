document.addEventListener("DOMContentLoaded", () => {
	/*APP*/
	console.log("charged")
	
	let button1, button2, button3, button4, button5, button6, button7, button8, button9, button0
	let resultat, plus, moins,fois, diviser, egal, remove

	resultat = document.querySelector("section p");

	button1 = document.querySelector("ul li:nth-child(1)");
	button2 = document.querySelector("ul li:nth-child(2)");
	button3 = document.querySelector("ul li:nth-child(3)");
	button4 = document.querySelector("ul li:nth-child(5)");
	button5 = document.querySelector("ul li:nth-child(6)");
	button6 = document.querySelector("ul li:nth-child(7)");
	button7 = document.querySelector("ul li:nth-child(9)");
	button8 = document.querySelector("ul li:nth-child(10)");
	button9 = document.querySelector("ul li:nth-child(11)");
	button0 = document.querySelector("ul li:nth-child(14)");

	remove = document.querySelector("ul li:nth-child(4)");
	plus = document.querySelector("ul li:nth-child(8)");
	fois = document.querySelector("ul li:nth-child(13)");
	diviser = document.querySelector("ul li:nth-child(15)");
	moins = document.querySelector("ul li:nth-child(12)");
	egal= document.querySelector("ul li:nth-child(16)");
	
	
	button1.addEventListener("click", () => {
		resultat.innerHTML += "7";
	});
	button2.addEventListener("click", () => {
		resultat.innerHTML += "8";
	});
	button3.addEventListener("click", () => {
		resultat.innerHTML += "9";
	});
	button4.addEventListener("click", () => {
		resultat.innerHTML += "4";
	});
	button5.addEventListener("click", () => {
		resultat.innerHTML += "5";
	});
	button6.addEventListener("click", () => {
		resultat.innerHTML += "6";
	});
	button7.addEventListener("click", () => {
		resultat.innerHTML += "1";
	});
	button8.addEventListener("click", () => {
		resultat.innerHTML += "2";
	});
	button9.addEventListener("click", () => {
		resultat.innerHTML += "3";
	});
	button0.addEventListener("click", () => {
		resultat.innerHTML += "0";
	});

	plus.addEventListener("click", () => {
		resultat.innerHTML += "+";
	});
	moins.addEventListener("click", () => {
		resultat.innerHTML += "-";
	});
	diviser.addEventListener("click", () => {
		resultat.innerHTML += "/";
	});
	fois.addEventListener("click", () => {
		resultat.innerHTML += "*";
	});
	remove.addEventListener("click", () => {
		resultat.innerHTML = "";
	});

	egal.addEventListener("click", () => {
		let resultat2 = eval(resultat.innerHTML);
		resultat.innerHTML = resultat2;
	});

	

});