function triangulo(a,b,c){

	if(((a==b)&&(a!=c))||((a==c)&&(a!=b))||(b==c)&&(a!=c)){
		console.log('Triangulo Isósceles')
	}

	if((a!=b)&&(a!=c)&&(b!=c)){
		console.log('Triangulo Escaleno')
	}

	if((a==b)&&(a==c)){
		console.log('Triangulo Equilátero')
	}

}


triangulo(3,2,1)