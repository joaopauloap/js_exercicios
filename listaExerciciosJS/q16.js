function calculadora(num1,op,num2){


	switch (op){

		case '+':
		return num1+num2;

		case '-':
		return num1-num2;

		case '*':
		return num1*num2;

		case '/':
		return num1/num2;

		default:
		return 'Operação inválida'

	}

}


console.log(calculadora(2, '+', 3));
console.log(calculadora(2, '-', 3));
console.log(calculadora(2, '*', 3));
console.log(calculadora(2, '/', 3));
console.log(calculadora(2, 'a', 3));
