let produto1 = {
	nome:"Cereal",
	valor:10.50,
	codigo:1234,
	tipo:"alimento",
	validade: new Date(2022, 0, 1),

	validar: function(data = new Date()){
		return (data.getTime() < this.validade.getTime()) ? "Valido" : "Vencido";
	}

	
}

console.log(produto1)
console.log(produto1.nome)
console.log(produto1.validar())	//Valida com a data atual
console.log(produto1.validar(new Date(2023, 0, 1)))	//Valida com a data especificada

