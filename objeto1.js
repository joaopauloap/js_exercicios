let produto1 = {
	nome:"Cereal",
	valor:10.50,
	codigo:1234,
	tipo:"alimento",
}

console.log(produto1)
console.log(produto1.nome)

let objeto1 = {}	

objeto1.nome = "Joao"
objeto1.idade = 22
objeto1.peso = 67.9
objeto1.endereco = "Rua do Sol"

console.log(objeto1)


let objeto2 = {}

objeto2 = objeto1		//objeto2 aponta para objeto1. Objetos são atribuidos por referência
objeto2.idade = 30			

console.log(objeto1)
console.log(objeto2)
