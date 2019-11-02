/*
Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/
var maxProfit = function(prices) {
	// YOUR CODE HERE
	var max = 0; // the lowest number possible 
	var min = 99999999; //just a rediculess high number
	for (var i = 0; i < prices.length; i++){ // loop throught the prices to find the lowest price 
		if(prices[i]<min){    
			min = prices[i];
		}
	}   // if prices is [7,1,5,3,6,4] max is now 1
	prices = prices.slice(prices.indexOf(min)) // prices is now  [1,5,3,6,4] 
	for (var i = 0; i < prices.length; i++){ // loop to find the highest price
		if(prices[i]>max){
			max = prices[i];
		} // max is 6
	}
	return max - min; // 6 - 1 = 5
};

var maxProfit = function (prices){ // with recurcion or whatever it's called 
	var profit = 0 ;
	function findProfit (arr,i) {
		if (arr.length === 0){ //my stop condition 
			return Math.abs(profit); // all the numbers are negative and i dnt want to see -0;
		}

		if(arr[0]-arr[i] < profit){ //we compare all the possible profits and find the lowest bc again everything is negative so it can work on big numbers
			profit = arr[0]-arr[i] 
		}

		if(i === arr.length){  //when it finishies comparing all the possible profits of the first element it moves to the next one
			return findProfit(arr.slice(1),1)
		}

		return findProfit(arr,i+1) // this is for making sure it iterates over all of them 
	}
	return findProfit(prices,1)  
}
