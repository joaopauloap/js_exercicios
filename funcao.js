console.log(dobro(2));	//function declaration pode ser chamada antes de ser declarada

function dobro(num){ //funcao comum (function declaration)
	num=2*num;
	return num;
}

console.log(dobro(3));


const triplo = function(numero){ //funcao anonima (function expression)
	numero = 3*numero;
	return numero
}

console.log(triplo(5));	//function expression só pode ser chamada apos ser declarada

const square = num => num*num //arrow function
console.log(square(6));
