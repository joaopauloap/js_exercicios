function num2moeda(valor){

	valor = valor.toFixed(2).toString().replace(".",",")

	console.log('R$'+ valor)

}


num2moeda(0.3)