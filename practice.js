let length = ['1', '2', '3', '4', '5', '6']

length = length.concat(length.splice(3))

console.log(length)


// const getTimeString = ({hours, minutes, seconds, zone}) =>{
//     if (minutes/10<1){
//         minutes= "0" + minutes;
//     }

//     if (seconds/10<1){
//         seconds= "0" + seconds;
//     }
//     return hours,minutes,seconds,zone;
// }

// const renderTime = () =>{
//    const currentDate = new Date();
//    var hours = currentDate.getHours()
//    var minutes = currentDate.getMinutes()
//    var seconds = currentDate.getSeconds()
//    var zone = hours >= 12 ? "PM" : "AM";
//   if (hours > 12) {
//     hours = hours % 12;
//   }

//   const timeString = getTimeString({ hours, minutes, seconds, zone });
//   console.log(timeString)
// };
// setInterval(renderTime, 1000);