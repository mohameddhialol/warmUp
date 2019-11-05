// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .
// function reverseStr (str) {
// 	var arr = []
// 	str = str.split(' ');
// 	for (var i = str.length - 1; i >= 0; i--){
// 		arr.push(str[i])
// 	}
// 	return arr;
// }

function reverseStr (str) { 
	
	var arr = []; 
	var cnt = 0;
	var returnedStr = '';
	var i = 0;

	while(i < str.length){   //the while loop soes what str.split(' ')
		if(str[i] !== ' ' && arr[cnt] === undefined){
			arr[cnt] = str[i]
			i++; 
		} else if (str[i] !== ' ' && arr[cnt] !== undefined){
      arr[cnt] += str[i]
			i++;
    } else {
			cnt ++;
			i++;
		}
	}
	
	for (var i = arr.length - 1; i >= 0; i--){
		returnedStr += arr[i] + ' ';	// instead of result.push(arr[i])
	}
	return returnedStr;
}