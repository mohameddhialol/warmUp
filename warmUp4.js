// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h" o1l2l3e4"
function reverseNumber(str){
	var cnt = 1;
	var result = '';

	while(cnt <=str.length){

		result += str[str.length - cnt]  + cnt;
		cnt ++;

	}
	return result; 
}


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function sameLength(arr){
	for (var i = 0; i < arr.length; i++){
		var result = [arr[i]];

		for (var j = i+1; j < arr.length; j++){

			if (arr[j].length === arr[i].length) {
				result.push(arr[j]);
			} 

			if (j === arr.length - 1 && result.length > 1){
				return result;
			}
		}
	}
}