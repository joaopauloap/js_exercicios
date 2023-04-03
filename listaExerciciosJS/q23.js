function mediaAluno(codigo,nota1,nota2,nota3){

	let vetor = [nota1,nota2,nota3];
	let i,j,anterior;
	let mediaponderada;
	let resultado;

	for(let i=0;i<vetor.length;i++){
		
		for(let j=0;j<vetor.length;j++){
		
			if((vetor[j]<=vetor[i])){
				anterior = vetor[i];
				vetor[i] = vetor[j];
				vetor[j] = anterior;
			}
			
		}
		
	}

	mediaponderada = ((vetor[0]*4)+(vetor[1]*3)+(vetor[2]*3))/(4+3+3)
	if(mediaponderada>=5){
		 resultado = 'APROVADO'
	}else{
		resultado = 'REPROVADO'
	}

	return `Codigo: ${codigo}; Nota1: ${nota1}, Nota2: ${nota2}, Nota3: ${nota3}; Média Ponderada: ${mediaponderada}; Resultado: ${resultado}.`;
	
}


console.log(mediaAluno(123, 2.8, 6, 3.5));