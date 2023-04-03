function comprarCarro(tipo){

	switch(tipo){

		case 'hatch':
		console.log('Compra efetuada com sucesso')
		break;

		case 'sedan':
		case 'motocicleta':
		case 'caminhonete':
		console.log('Tem certeza que não prefere este modelo?');
		break;

		default:
		console.log('Não trabalhamos com este tipo de modelo aqui.')
	}


}


comprarCarro('hatch');
comprarCarro('motocicleta');
comprarCarro('sedan');
comprarCarro('caminhonete');
comprarCarro('jetski');