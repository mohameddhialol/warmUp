/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */
//  function mysteryRange(str, n){
//     var arr = str.split('');
//     var finalArr = []; 
//     var min = 99;
//     var max = 0;
//     for(var i = 0; i < arr.length; i++){

//         if(arr[i]+arr[i+1]<min){
//             min = arr[i]+arr[i+1]
//         }

//         if(i === arr.length-1){
//             finalArr.push(min)
//             arr = arr.slice(0,arr.indexOf(min[0])) + arr.slice(arr.indexOf(min[0])+2,arr.length)
//             arr = arr.split('')
//             if(arr.length !== n){
//                 i = 0;
//             }
//         }
//     }
// }
// i couldn't figure out a solution (for now) so here's my thought process 
//first i need to to transform the string with the length of n 
//and then return another arr that has the bigest and smallest numbers in the last array
//i got stuck bc the split returns string not an array and couldn't find a better way to delete the minimum  number and restart the process 