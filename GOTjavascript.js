var GOT = function(){

var house = {};

house.targaryen = {
  motto: "fire and blood",
  pass: 'Verywell you shall pass',
  traitor: 'a traitor and no true Ironborn!'
};

house.stark = {
  motto: 'winter is coming',
  pass: 'Verywell you shall pass',
  traitor: 'a traitor and no true Northman!'
};

house.greyjoy = {
  motto: 'we do not sow',
  pass: 'Verywell you shall pass',
  traitor: 'a traitor and no true Ironborn!'
};

house.lannister = {
  motto: "hear me roar",
  pass: 'Verywell you shall pass',
  traitor: 'a traitor and no true Ironborn!'
};

house.baratheon = {
  motto: "our's is the fury",
  pass: 'Verywell you shall pass',
  traitor: 'a traitor and no true Ironborn!'
};

var question1 = prompt('What is our house name').toLowerCase();


var search = function(question1) {
  if(!house.hasOwnProperty(question1)){
     console.log("That is no house of Westeros that I know of!! Die wildling!");
   }else{
   var motto = prompt('What is our house motto?').toLowerCase();
   if(house[question1].motto === motto) {
        console.log(house[question1].pass);
       } else {
       console.log(house[question1].traitor);
       }
     }
    };

  search(question1);

};

GOT();











