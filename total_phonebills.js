
 function totalPhoneBill (callsMade) {
     console.log(callsMade)
 var splitcallsMade = callsMade.split(",")
 //console.log(splitcallsMade)
 var call = 2.75
 var sms = 0.65
 var total = 0

for (var i=0;i<splitcallsMade.length;i++){
    let trimcallsMade = splitcallsMade[i].trim()
 
    
  if (trimcallsMade.startsWith("call") ){
    total += call;
    
  } else if 
    (trimcallsMade.startsWith("sms")){
    total += sms;
 
}
}
 console.log(total)
 return "R" + total.toFixed(2);
}
    