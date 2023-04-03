const carrinho = [
'{"nome":"Borracha","preco":3.45}',
'{"nome":"Caderno","preco":11.50}',
'{"nome":"Caneta","preco":5.25}',
'{"nome":"Lapis","preco":2.00}'
]

//Retornar array com os preços

let resultado = carrinho.map(function(e){

	return JSON.parse(e).preco

})

console.log(resultado)