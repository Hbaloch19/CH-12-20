//CHAPTER 12-13:-
//QNO1
// let input = prompt("Enter a Character:");
// let asciicode = input.charCodeAt(0);
// if (asciicode >= 48 && asciicode <= 57) {
//     document.write("The input is a Number.");
// }
// else if (asciicode >= 65 && asciicode <= 90) {
//     document.write("The input is an uppercase letter.");
// }  
// else if (asciicode >= 97 && asciicode <= 122) {
//     document.write("The input is an Lowercase letter.");
// }  
// else{
//     document.write("The input is a special character.")
// }
//QNO2
// let int1 = prompt("Enter your First integar :");
// let int2 = prompt("Enter your second integar :");

// if(int1 > int2){
//     document.write("The integar1 is larger.");
// }
// else if(int2 > int1){
//     document.write("The integar2 is larger. ");
// }
// else{
//     document.write("Both integers are equal.");
// }
//QNO3
// let Number = prompt("Write a number");
// if(Number > 0){
//     document.write("The number is positive:", Number);
// }
// else if(Number < 0){
//     document.write("The number is negative:" , Number)
// }
// else{
//     document.write("The number is 0");
// }
//QNO4
// let char = prompt("Enter a character: ");
// let vowels = "aeiouAEIOU";

// if (char.length === 1 && vowels.includes(char)) {
//   document.write(true);
// } else {
//   document.write(false);
// }
//QNO5
// let password = "12345678";
// let userpassword = prompt("Enter your password: ");

// if (userpassword === password) {
//   alert("Correct! The password you entered matches the original password");
// } else if (userpassword === "") {
//   alert("Please enter your password");
// } else {
//   alert("Incorrect password");
// }
//QNO6
// let hour = prompt("write a hours");
// if (hour < 18) {
//  document.write ("Good day!!!");
// } else {
//     document.write("Goodevening!!!");
// }
//QNO7
// let time = prompt("Write your time in 24 hours clock format like 19:00");
// if(time >= 0 && time < 1200){
//     document.write("GoodMorning!")
// }
// else if(time >= 1200 && time < 1700){
//     document.write("GoodAfternoon!")
// }
// else if(time >= 1700 && time < 2100){
//     document.write("GoodEvening!")
// }
// else if (time >= 2100 && time <= 2359){
//     document.write("GoodNight!")
// }
// else{
//     document.write("Time is not right");
// }

//              X----------------------X----------------------X

//CHAPTER 14-16:-
//QNO1
// let studentsname = [];
//QNO3
// let array = ["Red","yellow","green"];
//QNO4
// let array = [1,2,3,4,5,6,7,8,9];
//QNO5
// let array = [true,false,true,false];
//QNO6
// let array = ["hanadi",21, true, 0.35];
//QNO7
// let Qualifications = ["SSC", "HSC", "BCS", 
//     "BS", "BCOM", "MS", "M. Phil", "PhD"];
//     for (let i = 0; i < Qualifications.length; i++) { 
//         document.write((i + 1)  + "." + Qualifications[i] + "</br>");
//     }  
//QNO8
// let names = ["Hanadi", "Maham", "Armeen"];
// let scores = [400, 350, 420];

// for (let i = 0; i < 3; i++) {
// let percent = (scores[i] / 500) * 100;
// document.write("Student Name:", names[i],"<br>");
// document.write("Score:" ,scores[i],"<br>");
// document.write("Percentage:",percent,"%","<br>");
// }
//QNO9
// let colors = ["<br>"+"Red"+"<br>"+ "Green"+"<br>"+ "Blue"+"<br>"];
// a. Add color to the beginning of the array
// let Beginning = prompt("Enter a color to add at the beginning:");
// colors.unshift(Beginning);
// document.write("This is the color you add at the beginning: " +"<br>"+colors + " ");
// b. Add color to the end of the array
// let end = prompt("Enter a color to add at the end:");
// colors.push(end);
// document.write("This is the color you add at the end: " +colors+ " " );
// c. Add two more colors to the beginning of the array
// let color = ["Red", "Green", "Blue"];
// color.unshift("Yellow", "Purple");
// document.write("Array after adding two more colors at the beginning: " + color + "");
// d. Delete the first color in the array
// let color = ["Red", "Green", "Blue"];
// color.shift();
// document.write("Array after deleting the first color: " + color + " ");
// e. Delete the last color in the array
// let color = ["Red", "Green", "Blue"];
// color.pop();
// document.write("Delete last color: " + color + " ");
// f. Add a color at a specific index
// let color = ["Red", "Green", "Blue"];
// let index = parseInt(prompt("Enter the index where you want to add a color:"));
// let color = prompt("Enter the color you want to add:");
// color.Splice(index, 0, color);
// document.write("Array after adding a color at a specific index: " + color + " ");

// g. Delete colors from a specific index
// let color = ["Red", "Green", "Blue"];
// let index = parseInt(prompt("Enter the index from where you want to delete colors:"));
// let count = parseInt(prompt("Enter the number of colors you want to delete:"));
// colors.splice(index, count);
// document.write("Array after deleting colors from a specific index:"+color);

//QNO10
// let scores = [85, 90, 78, 92, 88];
// document.write("Unsorted Scores: " + scores + " ");
// scores.sort((a, b) => a - b);
// document.write("Sorted Scores:"+ scores);

//QNO11
// let cities = ["Karachi", "Lahore", "Islamabad", "Faisalabad", "Multan"];
// let selectedCities = cities.slice(0, 3);
// document.write(selectedCities);

//QNO12

// var array = ["This ", " is ", " my ", " cat."];
// var sent = array.join("");
// document.write(sent);

//QNO13
// let fifo = [];
// fifo.push("Apple,");
// fifo.push("cherry,");
// fifo.push("banaana.");
// document.write(fifo.shift() + "");
// document.write(fifo.shift() + "");
// document.write(fifo.shift());

//QNO14
// let lifo = [];
// lifo.push("Apple.");
// lifo.push("Banana,");
// lifo.push("Cherry,");
// document.write(lifo.pop() + "");
// document.write(lifo.pop() + "");
// document.write(lifo.pop());

//QNO15
// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for (let i = 0; i < manufacturers.length; i++) {
// document.write("<option>" + manufacturers[i] + "</option>");}
// document.write("</select>");


//              X----------------------X----------------------X
//CHAPTER 17-20
//QNO1
// let multiArray = [[],[],[]];
//QNO2
// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1] ];
//QNO3
// for (let i = 1; i <= 10; i++) {
//     document.write(i+""+"<br>");
//     }
//QNO4
// let Number = prompt("Enter the table number:");
// let Length = prompt("Enter the table length:");
// document.write("Multiplication Table of " + Number + " "+ "<br>");
// for (let i = 1; i <= Length; i++) {
// document.write("<br>"+ Number + " x " + i + " = " + (Number*i)+" "+"<br>");
// }
//QNO5
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
// document.write("<br>"+fruits[i]+""); 
// }

// document.write("Element at index 0 is " + fruits[0]+ "<br>");
// document.write("Element at index 1 is " + fruits[1]+ "<br>");
// document.write("Element at index 2 is " + fruits[2]+ "<br>");
// document.write("Element at index 3 is " + fruits[3]+ "<br>");
// document.write("Element at index 4 is " + fruits[4]+ "<br>");

//QNO6
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// document.write("COUNTING:"+"<br>"+ array);

// let array1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// document.write( "<br>"+"REVERSE-COUNTING:"+"<br>"+ array1);

// let array2 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// document.write( "<br>"+"EVEN:"+"<br>"+ array2);

// let array3 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// document.write( "<br>"+"ODD:"+"<br>"+ array3);

// let array4 = [ "2k", "4k", "6k", "8k", "10k","12k", "14k", "16k", "18k", "20k"];
// document.write( "<br>"+"SERIES:"+"<br>"+ array4);

// //QN07
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let searchItem = prompt("Enter the item to search:");
// let found = A.includes(searchItem.toLowerCase());
// if (found) {
// alert(searchItem + " is found in the list.");
// } else {
// alert(searchItem + " is not found in the list.");
// }

//QNO8
// let A = [24, 53, 78, 91, 12];
// let largest = A[0];
// for (let i = 1; i < A.length; i++) {
// if (A[i] > largest) {
// largest = A[i];
// }
// }
// document.write("The largest number in the array is:"+largest);

//QNO9
// let A = [24, 53, 78, 91, 12];
// let smallest = A[0];
// for (let i = 1; i < A.length; i++) {
// if (A[i] < smallest) {
// smallest = A[i];
// }
// }
// document.write("The smallest number in the array is:"+smallest);

//QNO10
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//     document.write(i + ", ");
//     }}
//     for (let i = 5; i <= 100; i += 5) {
//     document.write(i+",");
//     }

//              X----------------------X----------------------X






