/*
    1. **From you understanding of array create an array with 15 items inside**
    2. **From the array just created in the above question remove the last item in the array.
    You cannot alter the original array.**
    3. **Add an item to the end of the list. Cannot alter the original array**
    4. **Find the position of the first item, middle item and last item of the list and print them off separately.**
    5. ******Modify 3 items in the array and print them off******
*/


// 1
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(numbers);
// 2
numbers.pop();
console.log(numbers);
//3
numbers.push(16);
console.log(numbers);
//4
var firstItemIndex = numbers.indexOf(1);
console.log(firstItemIndex); 

var lastItemIndex = numbers.length - 1;
console.log(lastItemIndex);

var middleItemIndex = (numbers.length - 1) /2;
console.log(middleItemIndex);

// 5

numbers[4] = 500;

numbers[10] = 1100;

numbers[1] = 200;

console.log(numbers);