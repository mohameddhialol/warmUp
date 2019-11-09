// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"
// function countOcurences(str){
// 	var alpahbet = "abcdefghijklmnopqrstuvwxyz"
// 	var counter = 1
// 	function loop (startPoint){
// 		if(startPoint > str.length && counter === 1){
// 			return str;
// 		}
// 		if(startPoint > str.length){
// 			counter = 1
// 			return loop(startPoint + 1);
// 		}
// 		str = str.replace(str[startPoint],counter)
// 		return loop(startPoint + 1)
// 	}
// 	return loop(0)
// }
//i couldn't solve it, i'll solve it on my self hacking time ...sorry