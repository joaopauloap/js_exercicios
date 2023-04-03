function jsimples(c,i,t){

	return (c*(1+i*t)).toFixed(2)

}

function jcomposto(c,i,t){

	return (c*(1+i)**t).toFixed(2)

}

console.log(jsimples(4000,2/100,24))
console.log(jcomposto(300,1/100,12))