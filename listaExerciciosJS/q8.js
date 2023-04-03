function recordes(lista){

	const vetor = lista.split(' ').map(Number)
	let menor = vetor[0]
	let maior = vetor[0]
	let nmaior=0, nmenor=0

	for(let n=0; n<vetor.length; n++){

		if(vetor[n]>maior){
			maior = vetor[n]
			nmaior++
		}

		if(vetor[n]<menor){

			menor = vetor[n]
			nmenor = n+1
		}

	}


return [nmaior,nmenor]

}


console.log(recordes("10 20 20 8 25 3 0 30 1")) 	//R = [3,7]