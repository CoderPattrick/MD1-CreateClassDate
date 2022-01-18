// let MyDate = {
//     'date': 0,
//     'month': 0,
//     'year': 0
// }
let MyDate = function(date,month,year){
    this.date=date;
    this.month=month;
    this.year=year;
    // this.getDate = function (){
    //     return this.date;
    // }
    // this.getMonth = function (){
    //     return this.month;
    // }
    // this.getYear = function (){
    //     return this.year;
    // }
}
MyDate.prototype.getDate = function (){
    return this.date;
}
MyDate.prototype.getMonth = function (){
    return this.month;
}
MyDate.prototype.getYear = function (){
    return this.year;
}
MyDate.prototype.setDay = function (x){
    this.date = x;
}
MyDate.prototype.setMonth = function (x){
    this.month = x;
}
MyDate.prototype.setYear = function (x){
    this.year = x;
}

// function getDate(x){
//     return x.date;
// }
// function getMonth(x){
//     return x.month;
// }
// function getYear(x){
//     return x.year;
// }
// let setDate = function (x,y){
//     x.date = y;
// }
// let setMonth = function (x,y){
//     x.month = y;
// }
// let setYear = function (x,y){
//     x.year = y;
// }
let today = new MyDate(14,1,2022);
// console.log(getDate(today));
// console.log(getMonth(today));
// console.log(getYear(today));
// setDate(today,15);
// console.log(getDate(today));
console.log(today.getDate());
console.log(today.getMonth());
console.log(today.getYear());
function displayDate(){
    return today.date+"/"+today.month+"/"+today.year;
}
console.log(displayDate())




