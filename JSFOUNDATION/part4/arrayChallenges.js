/*
1. Declear an array named `teaFlavours` that contains the string `"green tea"`,`"bleack tea"`,`"oolong tea"`.
     Access the  first element of the array and store it in a variable name `firstTea`.
*/

let teaFlavours = ['green tea','black tea','oolong tea'];

let firstTea = teaFlavours[0];
 console.log(firstTea); // Output: green tea

 /*
2. Declear an array named `cities` containing "london,"tokyo" and "new york".
access the 3th element of the arrya and store it in variable named `favoriteCity`.
*/

let citi = ['london', 'tokyo' ,'new york'];


let favoriteCity = citi [2];
console.log(favoriteCity);

/*
3. you have an arry named 'teaTypes' containing "herbal tea","white tea", and "masala tea" change  the second element of the array to the jasmine tea.
*/

let teaTypes = ['herbal tea', 'white tea', 'masala tea'];

teaTypes[1] ='jasmine tea';

console.log(teaTypes);

/*
4. Declear an array named 'citiesVisited' containing "mumbai" and "sydney".
add "Berlain" to the array using the 'push' method.
*/

let citiesVisited = ['mumbai','sydney'];
citiesVisited.push('berlain');
console.log (citiesVisited);

/*
5.you have an array named 'teaOrders with 'chai,'iced tea' , 'matcha' and 'earl grey'.
Remove the last elemnet of the array using the 'pop' method and store it in a varibale name 'lastOrder'.

*/

let teaOrders = ['chai', 'iced tea', 'matcha', 'earl grey'];

let lastOrder = teaOrders.pop(); //pop() method removes the last element from an array and returns that element.

console.log(lastOrder); // Output: earl grey
console.log(teaOrders); // Output: ['chai', 'iced tea', 'matcha']

/* 
6. You have an array named 'popularTea' containing  "green tea", "oolong tea", nad "chai".
create a soft copy of this array  named 'softCopyTea'.
*/
let popularTea =['greeen tea', 'oolong tea', 'chai'];

// soft copy means creating a new array that contains the same elements as the original array without modifying the original array.

 let softCopyTea = popularTea;
     popularTea.pop(); //removing last element from popularTea array
     console.log(softCopyTea);
     console.log(popularTea);

/*
7. you have an array  named 'topcities' containing 'berlain','singapore',and 'new york'.
create a haed copy of the array named 'hardCopyCities'.
*/

// hardcopy means creating a new array that contains the same elements as the original array but is independent of the original array.

let topcities = ['berlain', 'singapore', 'new york'];

let hardCopyCities = [...topcities]; // using spread operator to create a hard copy of the array

topcities.pop(); // removing last element from topcities array

console.log(hardCopyCities); // Output: ['berlain', 'singapore', 'new york']
console.log(topcities); // Output: ['berlain', 'singapore']

// by using sclice method

let hardCopyCities2 = topcities.slice(); // using slice method to create a hard copy of the array


/* 
8.you have two arrays: ' europeanCities' containing 'paris', and 'rome' and 'asianCities' containing 'tokyo' and 'bankok'.
Merge the two arrays into a new array named 'worldCities'.
*/

let europeanCities = ['paris', 'rome'];
let asianCities = ['tokyo', 'bankok'];
let workdCities1 = europeanCities.concat(asianCities); // using concat method to merge two arrays
let worldCities = [...europeanCities, ...asianCities];  
console.log(worldCities); // Output: paris,rometokyo,bankok

/*
9. You have an array named 'teamenu' containign "masala tea","oolong  tea" and "earl tea".
  find the length of the array and store itn in a variable named menuLength.
*/

let teamenu =['masala tea', 'oolong tea', 'earl tea'];

let menuLength = teamenu.length;   
console.log(menuLength); // Output: 3

/*
10. you have an array named 'cityBucketList' containing "ktoto","london","capetown",and "vancourver".
check if "london" is included in the array and store the result in a variable named 'isLondonIncluded'. 
*/

let cityBucketList = ['ktoto', 'london', 'capetown', 'vancourver']
let isLondonIncluded = cityBucketList.includes('london')
console.log(isLondonIncluded); // Output: true
// includes() method checks if an array includes a certain element and returns true or false it is case sensitive.