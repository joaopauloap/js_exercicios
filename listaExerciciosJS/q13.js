function fdia(dia){
	switch(dia){
		case 1://domingo
		return "Fim de Semana"
		
		case 2://segunda
		return "Dia Util"
		
		case 3:
		return "Dia Util"
		
		case 4:
		return "Dia Util"
		
		case 5:
		return "Dia Util"
		
		case 6://sexta
		return "Dia Util"
		
		case 7://sabado
		return "Fim de Semana"
		

		default:
		return "Dia Invalido"

	}

}

console.log(fdia(7))