function fatorial(valor){
	let resultado=1
	for(let n=valor; n>0; n--){
		resultado = resultado*n
	}

	return resultado
}

console.log(fatorial(5))
