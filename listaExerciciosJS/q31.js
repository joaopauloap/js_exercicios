function qtdNegativos(vetor){

	let qtd=0;

	for(let n=0; n<vetor.length; n++){

		if(vetor[n]<0){
			qtd++;
		}

	}

	return qtd

}


console.log(qtdNegativos([-3,3,-5,3,0,-2,-19,-48,43,1,5,-299]))