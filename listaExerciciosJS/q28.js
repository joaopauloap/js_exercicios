var pares=0,impares=0
function lerVetor(vetor){

	for(let n=0;n<vetor.length;n++){

		if((vetor[n]%2)==0){
			pares++
		}else{
			impares++
		}

	}
	
	console.log(pares,'Elementos pares e',impares,'elementos ímpares.')


}

lerVetor([1,1,3,5,2,4])//4impares 2pares