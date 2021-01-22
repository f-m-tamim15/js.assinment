

// No 1:  kilometer to meter  
// budeget calculator 

function kilometerToMeter(kilo){

    if(kilo<0  ){
        return "invalid input";
    }
    else if(kilo == "number"){
        return "string";
    }
    var meter = kilo*1000;  // 1 kilometer = 1000 meter

    return meter;
}




// No 2 : budget calculator

function budgetCalculator(watch,phone,laptop){

    if (watch<0 || phone<0 || laptop <0 ){
        return "invalid input ";
    }
    var watchPrice = watch*50;
    var phonePrice = phone*100;
    var laptopPrice = laptop*500;
    var tortalBudget = watchPrice + phonePrice + laptopPrice;
    return tortalBudget;
}



// No 3 : hotel cost 
function hotelCost(day){

    if(day<0){
        return "invalid";
    }
   else if(day<=10){
       var cost = day*100;
        return cost;
    }
    else if (day<=20){
        var cost  = (day-10)*80+1000;
        return cost ;
    }
    else {
        var cost = (day-20)*50 + 1800;
        return cost;
    }

}
var result =  hotelCost(250)
console.log(result);

function megaFriend(Math.max(arr[])){
    
}



