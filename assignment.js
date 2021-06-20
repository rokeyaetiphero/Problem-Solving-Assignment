//Kilometer To Meter-----------------------------------------

function kilometerToMeter(kiloMeter){
    if(kiloMeter < 0){
        return "Length cannot be negative";
    }
    else{
        var meter = kiloMeter * 1000;
        return meter;
    }
}



//Budget Calculator------------------------------------------

function budgetCalculator(watch,phone,laptop){
    var watch_per_price = 50;
    var phone_per_price = 100;
    var laptop_per_price = 500;

    if(watch < 0 || phone < 0 || laptop < 0){
         return "input is invalid";
    }
    else{
        var totalBudget = (watch * watch_per_price) + (phone * phone_per_price) + (laptop * laptop_per_price);
        return totalBudget;
    }
}

//Hotel Cost--------------------------------------------------

function hotelCost(days){

    var totalDays = 0;

    if(days <= 0){
        return "Buddy! days must be greater than zero";
    }
    else{

        if(days <= 10){
            totalDays = days * 100;
        }

        else if(days <= 20){
           var first10Days = 10 * 100;
           var remainingDays = days - 10;
           var daysWith10  = remainingDays * 80;
           totalDays = first10Days + daysWith10;
        }

        else{
            var first10Days = 10 * 100;
            var second10Days = 10 * 80;
            var remainingDays = days - 20;
            var daysWith20  = remainingDays * 50;
            totalDays = first10Days + second10Days + daysWith20;
        }
    }

    return totalDays;
}


//Mega Friend----------------------------------------------------------------

function megaFriend(friends) {//an array of my friends name
    
    if(friends.length == 0) {
      return "You Should Make Your Own Buddies!!";
    }

    else{

        var maxLength = friends[0].length;
        var myMegaFriend = friends[0];

    for  (var i = 1; i < friends.length; i++) {
             var maxi = friends[i].length;
             if(maxi > maxLength) {
             myMegaFriend = friends[i];
             maxLength = maxi;
        }
    }
    return myMegaFriend;
  }

}

 