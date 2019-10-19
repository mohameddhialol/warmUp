// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
<<<<<<< HEAD
//you can only add one at each summetion, you'll need to use recursion in this.
function gcd(a,b){
	var aux = 0
	if(a<0 || b<0 ){
		return "please enter 2 positive numbers."
	}
	if(a<b){
		var aux = a;
		a = b;
		b = aux;
	}
	if (a === b){
		return "the greatest common divisor is " + a +"."; 
	}
	if (a === 0){
		return "the greatest common divisor is 0.";
	}
	return gcd(a-b,b);
}

//////////////

function sum(a,b){
	if (b === 0){
		return a ;
	}
	return sum(a+1,b-1);
}



=======
//you can only add one at each summetion, you'll need to use recursion in this.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
