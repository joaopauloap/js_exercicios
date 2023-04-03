const vetor = [1,2,3,4,5]
const nomes = ['Joao','Paulo','Araujo', 'Porto']
let resultado = []

resultado = vetor.map(function(e){
	return e*2
})
console.log(resultado)


//Com arrow function
resultado = vetor.map(elemento=>3*elemento)
console.log(resultado)


resultado = nomes.map(e=>e.replace(/\o/g,'e'))//regex)
console.log(resultado)

