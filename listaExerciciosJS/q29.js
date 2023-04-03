function intervalo(vetor){

	let qtddentro=0;

	for(let n=0; n<vetor.length; n++){
		
		for(let i=10; i<=20; i++){
			if(vetor[n]==i){
				qtddentro++;
			}
		}

	}

	return `Elementos no intervalo 10~20: ${qtddentro}\nElementos fora do intervalo: ${vetor.length-qtddentro}`;
}

let vetor = [1,2,3,10,15,19,20,40,6,0,-4,22,20]
console.log(intervalo(vetor))
