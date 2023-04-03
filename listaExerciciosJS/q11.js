/*
Para ser bissexto, o ano deve ser:
	Divisível por 4. Sendo assim, a divisão é exata com o resto igual a zero;
	Não pode ser divisível por 100. Com isso, a divisão não é exata, ou seja, deixa resto diferente de zero;
	Pode ser que seja divisível por 400. Caso seja divisível por 400, a divisão deve ser exata, deixando o resto igual a zero.
*/

function isbi6(ano){

	if((ano%4==0)&&(ano%100!=0)){
		return true;
	}else if(ano%400==0){
		return true;
	}else{
		return false;
	}

	
}


console.log(isbi6(0))
console.log(isbi6(4))
console.log(isbi6(100))
console.log(isbi6(400))
console.log(isbi6(800))
console.log(isbi6(2020))
console.log(isbi6(2021))

/*gabarito

false
true
false
true
true
true
false

*/