function funcao2grau(a,b,c){

	const delta = (b**2)-4*a*c

	if(delta >= 0){
	
	const x1 = (-b + Math.sqrt(delta))/2*a
	const x2 = (-b - Math.sqrt(delta))/2*a
	return [x1,x2]

	}else{

		return "Delta Negativo"
	}

}


console.log(funcao2grau(1,3,2))
console.log(funcao2grau(3, 1, 2))