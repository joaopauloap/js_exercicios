function maiorEmenor(vetor){

	let maior = vetor[0];
	let menor = vetor[0];

	for(let n=0; n < vetor.length; n++){

		if(vetor[n]>maior){
			maior = vetor[n]
		}

		if(vetor[n]<menor){
			menor = vetor [n]
		}

	}
return [menor,maior]
//return 'Menor valor '+menor+'; Maior valor '+maior 

}


console.log(maiorEmenor([1,2,3,4,5,6,7,8,9,0,-2,8]))