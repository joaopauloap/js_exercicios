function calcularVenda(cod,qtd){

	switch (cod){

		case 100:
		return 3*qtd

		case 200:
		return 4*qtd

		case 300:
		return 5.50*qtd

		case 400:
		return 7.50*qtd

		case 500:
		return 3.50*qtd

		case 600:
		return 2.80*qtd

		default:
		return 'Produto não encontrado.'

	}



}

console.log(calcularVenda(100, 2))
console.log(calcularVenda(200, 2))
console.log(calcularVenda(300, 2))
console.log(calcularVenda(400, 2))
console.log(calcularVenda(500, 2))
console.log(calcularVenda(600, 2))
console.log(calcularVenda(700, 2))
