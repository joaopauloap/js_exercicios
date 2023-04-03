function planoSaude(idade){
	if(idade<10){
		return 180;
	}else if((idade>=10)&&(idade<=30)){
		return 150;
	}else if((idade>30)&&(idade<=60)){
		return 195;
	}else if(idade>60){
		return 230;
	}else{
		console.log('Erro')
	}
}

console.log(planoSaude(8));
console.log(planoSaude(15));
console.log(planoSaude(35));
console.log(planoSaude(52));
console.log(planoSaude(80));