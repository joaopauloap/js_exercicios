function minhafuncao(){

	let mystring = document.getElementById("campotexto").value
	let myindex = document.getElementById("campoindice").value * 1
	let myarray = mystring.split(',')

	alert(myarray[myindex])


}
