function triangulo(a,b,c){

	if((a==b)&&(b==c)){
		console.log('Equilátero');
	}else if((a==b)||(a==c)||(b==c)){
		console.log('Isósceles')
	}else{
		console.log('Escaleno');
	}

}


triangulo(1,1,2)