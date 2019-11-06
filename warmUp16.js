// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.
function ballonCnt (str) {
	var cnt = 0;
	var i = 0;
	var result = '';
	while () {
		if(result === ''){ //
			if (str[i] === 'b'){
				result += str[i]; 
			} 
		} else if (result === 'b'){ //
			if (str[i] === 'a'){
				result += str[i]; 
			}
		} else if (result === 'a'){ //
			if (str[i] === 'l'){
				result += str[i]; 
			}
		} else if (result === 'l'){ //
			if (str[i] === 'l'){
				result += str[i]; 
			}
		} else if (result === 'l'){ //
			if (str[i] === 'a'){
				result += str[i]; 
			}
		} else if (result === 'o'){ //
			if (str[i] === 'a'){
				result += str[i]; 
			}
		} else if (result === 'o'){ //
			if (str[i] === 'a'){
				result += str[i]; 
			}
		} else if (result === 'n'){ //
			if (str[i] === 'a'){
				result += str[i]; 
			}
		}			
		if (i === result.length){

		}
}
function ballonCnt (str) {
	var cnt = 0;
	var container = '';
	var rest = ''
	var i = 0;
	function finder(string,container,i) {
		if (str.includes("b"&&"a"&&"l"&&"l"&&"o"&&"n") === false){
			return 0;
		}

		if(container === ''){
			if(string[i] === 'b'){
				container += 'b'
				return finder(string.replace('b',''),container,i = 0)
			} else {
				return  finder(string,container,i+1);
			}
		}

		if(container === 'b'){
			if(string[0] === 'a'){
				container += 'a'
				return finder(string.replace('a',''),container,i = 0)
			} else {
				return  finder(string,container,i+1);
			}
		}

		if(container === 'ba'){
			if(string[0] === 'l'){
				container += 'l'
				return finder(str.replace('l',''),container,i = 0)
			} else {
				return  finder(string,container,i+1);
			}
		}

		if(container === 'bal'){
			if(string[0] === 'l'){
				container += 'l'
				return finder(str.replace('l',''),container,i = 0)
			} else {
				return  finder(string,container,i+1);
			}
		}

		if(container === 'ball'){
			if(string[0] === 'o'){
				container += 'o'
				return finder(str.replace('o',''),container,i = 0)
			} else {
				return  finder(string,container,i+1);
			}
		} 

		if(container === 'ballo'){
			if(string[0] === 'n'){
				container += 'n'
				return finder(str.replace('n',''),container,i = 0)
			} else {
				return  finder(string,container,i+1);
			}
		}
		if(container === 'ballon'){
			return 1+finder(string,container = '',i = 0)
		}
	}
	return finder(str) ;
}