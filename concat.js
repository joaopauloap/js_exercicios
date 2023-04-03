const fiat = ['Uno', 'Strada', 'Doblo', 'Palio']
const wolks = ['Gol', 'Voyage', 'Polo', 'Fox'] 
const chev = ['Celta', 'S10', 'Camaro', 'Onix']

let carros = fiat.concat(wolks,chev,'Frontier')

console.log(carros)

carros = ['Ferrari','Porsche'].concat(fiat, wolks, 'Fiesta', 'Ka')

console.log(carros)