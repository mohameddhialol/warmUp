// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var class['Insaf,Ons,Ruba,Foz','Dhia,Omar,Amine,Taha','Seif,Youssef,Tamara,Matt']
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
<<<<<<< HEAD
function middle(arr){
	if (arr.length % 2 === 1){      //in case the array is composed of an odd number of elements.
		return "the middle element is " + arr[((arr.length + 1) / 2) - 1];
	}else {  //  //in case the array is composed of an even number of elements.
		return "the middle elements are " + arr[((arr.length ) / 2) - 1]  + ' and ' + arr[((arr.length + 2) / 2) - 1];
	}
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function multiAll(arr){
	for(var i = 0; i<arr.length; i+=2){
		arr[i]*=2;
	}
	return arr;
}
=======

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
