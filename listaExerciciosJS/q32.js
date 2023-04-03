function media(vetor){

	let sum=0;

	for(let n=0;n<vetor.length;n++){
		sum+=vetor[n]
	}

	return sum/vetor.length

}

console.log(media([2,4,6]))