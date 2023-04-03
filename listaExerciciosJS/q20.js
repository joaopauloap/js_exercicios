function sacarDinheiro(valor){

	let cedula100 = 0
	let cedula50 = 0
	let cedula10 = 0
	let cedula5 = 0
	let cedula1 = 0


	for(let n=0; n<50; n++){

		if((valor/100)>=1){
			valor=valor-100;
			cedula100++
		}else{
			if(cedula100>0){
				console.log(cedula100, 'cédulas de 100')
			}
			break;
		}

	}

	for(let n=0; n<10; n++){

		if((valor/50)>=1){
			valor=valor-50;
			cedula50++
		}else{
			if(cedula50>0){
				console.log(cedula50, 'cédulas de 50')
			}
			break;
		}

	}

	for(let n=0; n<10; n++){

		if((valor/10)>=1){
			valor=valor-10;
			cedula10++
		}else{
			if(cedula10>0){
				console.log(cedula10, 'cédulas de 10')
			}
			break;
		}

	}

	for(let n=0; n<10; n++){

		if((valor/5)>=1){
			valor=valor-5;
			cedula5++
		}else{
			if(cedula5>0){
			console.log(cedula5, 'cédulas de 5')
		}
			break;
		}

	}

	for(let n=0; n<10; n++){

		if((valor/1)>=1){
			valor=valor-1;
			cedula1++
		}else{
			if(cedula1>0){
				console.log(cedula1, 'cédulas de 1')
			}
			break;
		}


	}	


}


sacarDinheiro(49)