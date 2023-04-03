function crescimento(altura1,taxa1,altura2,taxa2){

	if(altura1<altura2){

		for(let anos=1; anos<30; anos++){
			altura1+=taxa1
			altura2+=taxa2
			if(altura1>altura2){
				console.log('A criança 1 superará a criança 2 em',anos,'anos,','com altura de',altura1,'cm.')
				break;
			}
		}

	}else{

		for(let anos=1; anos<30; anos++){
			altura1+=taxa1
			altura2+=taxa2
			if(altura2>altura1){
				console.log('A criança 2 superará a criança 1 em',anos,'anos,','com altura de',altura2,'cm.')
				break;
			}
		}

	}


}

crescimento(100,1,90,2)


