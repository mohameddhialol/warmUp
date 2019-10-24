// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here
//1
function combine(first, last,Language){ // if language is french we should start with the last name 

	if (languae === 'F'){
		return last + ' ' + first;
	} else {								// in almost all languages other than french we start with the first name 
		return first + ' ' + last;
	}
}

//2
function is13mult3(){
	return 13 % 3 === 0;
}

//3
function averageAge (arr){
	var result = 0
	for (var i = 0; i < arr.length; i++){
		result += arr[i]
	}
	return result /arr.length
}

//4
function ageInSec(age){
	return age*365*24*60*60; //age is in years so multiply by days in year then hours in day then minutes in hour and seconds in minutes 
}