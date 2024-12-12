// Dates

let myDate = new Date()
// console.log(myDate); // -> 2024-12-12T20:24:14.941Z
// console.log(myDate.toString()); // -> Thu Dec 12 2024 20:24:14 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // -> Thu Dec 12 2024
// console.log(myDate.toLocaleString()); // -> 12/12/2024, 8:25:35 PM
// console.log(myDate.toISOString()); // -> 2024-12-12T20:25:35.505Z
// console.log(myDate.toJSON()); // -> 2024-12-12T20:25:35.505Z
// console.log(typeof myDate) // -> object

let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString()) // -> Mon Jan 23 2023

let myDate1 = new Date("2023-01-14")
// console.log(myDate1.toLocaleString()) // -> 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()
// console.log(myTimeStamp) // -> 1734036434861
// console.log(myCreatedDate.getTime()) // -> 1674432000000

// console.log(Math.floor(Date.now()/1000)); // -> seconds 1734036608

let newDate = new Date()
// console.log(newDate) // -> 2024-12-12T20:51:03.493Z
// console.log(newDate.getMonth() + 1) // -> 12 (0 indexed)
// console.log(newDate.getDay()) // -> 4 (12/12/24 -> Thursday(4) 0indexed start:0sunday)

newDate.toLocaleString('default',{
    weekday: "long",
})
console.log(newDate.toLocaleString()) // -> 12/12/2024, 9:00:36 PM
