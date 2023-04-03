function pow(a,b){

var resultado=1

	for(i=0; i<b; i++){

		resultado=a*resultado

	}

	return resultado

}

console.log(pow(2,3))