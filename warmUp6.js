 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24
 function mult(n) {
 // your code is here
 	function finalResult (result,i){  // using recursion  and closure is the best solution in my piont of view 
 		if(i > n){
 			return result;
 		}
 		return finalResult(result * i, i + 1)
 	}
 	return finalResult(1,1) // this is our staring point 
 }

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...
function numStr (n){
	var cnt = 2; // we dnt need 0 and 1 is already inside the string 
	result = '1';  // result must be a string 
	while(cnt < n){
		result += ' ' + cnt + ' ' + cnt;
		cnt++; 
	}
	return result + ' '+ n ; // i did this bc we need the having 2 n's in the end makes no sense 
}
