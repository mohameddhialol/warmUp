//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
function isSubset (arr, sub){ // they are both array
	var result;
	for (var i = 0; i < arr.length; i++){
		if(arr[i] === sub[0]){
			for (var j = 1; j < sub.length; j++){
				i++
				if (arr[i] === sub[j]){
					result = result && true;
					i++
				} else {
					return false
				}
				if(j === sub.length - 1){
					return result
				}
			}
		}
	}
	return false;
}
