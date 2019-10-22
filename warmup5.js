// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.


function classMate (name, age, placeOfBirth, sex){ //factory function to make class mates
	return {
		name : name,
		age : age,
		placeOfBirth : placeOfBirth,
		sex : sex
	}
}

var insaf = classMate("Insaf", "26", "Tunisia", "female");    // making classmates
var hachem = classMate("Hachem", "22", "Lybia", "male");
var ouns = classMate("Onns", "18", "Tunisia", "female");

var classmates = [insaf, hachem, ouns];

function displayFriend (friend){
	return friend + " is " + age + " years old and was born in " + "Tunisia";
}

function addFriend(friend){
	classmates.push(friend);
	return classmates;
}

function nbOfMale (array){
	var result = 0
	for (var i = 0; i < array.length; i++){
		if(array[i]["sex"] === "male"){
			result ++
		}
	}
	return result;
}


function searchMates (array ,friend){
	result = [];
	for (var i = 0; i < array.length; i++){
	    console.log(array[i]["name"])
			
		if (array[i]["name"].toLowerCase() === friend.toLowerCase()){
		    result.push(array[i])
		}
	}
	return result;
}