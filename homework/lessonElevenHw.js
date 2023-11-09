/*
    **Javascript Questions:**

1. ****Write a JS code to print numbers from 1 to 10****
2. ****Write a JS code to print Even numbers in given array****
3. ****Write a JS code to print Odd numbers in given array****
4. ****Write a JS code that iterates by 2 up to 100 ( i.e 0,2,4,6,8,10,12)****

### Challenge:

1. write a function to check if a string is a palindrome. (palindrome is if the word spells the same opposite,
     e.g madam is true as its madam backwards, sight is false because it is this backwards.

*/

// 1
for (let i = 1; i <= 10; i ++){
    console.log(i);
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2

for (let i = 1; i <= list.length; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}

// 3

for (let i = 1; i <= list.length; i++){
    if (i % 2 != 0){
        console.log(i);
    }
}


// 4

for (let i = 0; i <= 100; i += 2){
    console.log(i);
}


//  created the palindrome function in lesson ten