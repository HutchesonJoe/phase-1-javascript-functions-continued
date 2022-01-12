// code your solution here
const saturdayFun = function(activity="roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
  }
  
saturdayFun();

const mondayWork = function(activity2="go to the office"){
    return (`This Monday, I will ${activity2}.`);
}

mondayWork();

const wrapAdjective = function(frontFlair="*"){
    return function(complimentAdj="special"){
        return `You are ${frontFlair}${complimentAdj}${frontFlair}!`;
    }
}

wrapAdjective()();