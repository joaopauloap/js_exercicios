let vetor = ['João', 'Paulo', 'Araujo', 'Porto']
console.log(vetor,'\n')

vetor.pop(); //POP - Remove ultimo elemento
console.log('POP',vetor)

vetor.push('Colatino'); //PUSH - Adiciona elemento na ultima posição
console.log('PUSH',vetor)

vetor.shift(); //SHIFT - Remove primeiro elemento
console.log('SHIFT',vetor)

vetor.unshift('José'); //UNSHIFT - Adiciona elemento na primeira posição
console.log('UNSHIFT',vetor)

vetor.splice(2,0,'Gomes','Barbosa'); //SPLICE - Pode adicionar ou remover elementos
console.log('SPLICE',vetor)

vetor.splice(2,4); //SPLICE - Apos indice 2, remova 4 elementos
console.log('SPLICE',vetor)

vetor[0] = 'João' //Substituir elementos
console.log(vetor)

let nomes = ['Lilian', 'Maria', 'Araujo', 'Porto', 'Colatino', 'Barbosa', 'Lira']
console.log('\n',nomes)

let novoVetor = []

novoVetor = nomes.slice(4)	//SLICE - Corta o vetor a partir do indice especificado
console.log('SLICE',novoVetor)

novoVetor = nomes.slice(2,4)
console.log('SLICE',novoVetor)