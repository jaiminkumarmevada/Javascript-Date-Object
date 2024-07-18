//javascript date object
//jaimin mevada

let myDate = new Date();
let months = myDate.getMonth()+1;
let year = myDate.getFullYear();
let day = myDate.getDate();
console.log(months)
console.log(year)
console.log(day)

console.log(`${day}-${months}-${year}`)

//now get out as "13 July 2024"

const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "September",
    "October",
    "November",
    "December"
]

let month = monthsArray[myDate.getMonth()];
console.log(month)
console.log(`${day}-${month}-${year}`)

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//key = 6e7a174575f922120bcc1ec904b45223



//open weather API login
// jaiminphotoediting2580@gmail.com
//Mevada@2020