
function kilometerToMeter(kilometer){
var Meter = kilometer * 1000;
return Meter; 

}
var ami = kilometerToMeter(6);
console.log(ami)
var baba = kilometerToMeter(33);
console.log(baba)
var chachu = kilometerToMeter(80);
console.log(chachu)









function hotelCost(day){
    var cost = 0;
    if(day<=10){
        cost = day * 100;
    }
    else if(day<=20){
        var Day10 = 10 * 100;
        var remaining = 200-day;
        var day20 = remaining * 100;
        cost = Day10 + day20;
    }
    else{
        var Day10 = 10*100;
        var day20 = 10 - 20;
        var remaining = 200-day;
        var day20Plas = remaining * 300;
        cost = firsPart + secondPart + day20Plas
    }
    return cost;
    }
    var count = hotelCost(20);
    console.log(count);