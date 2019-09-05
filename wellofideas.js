function getOccurrence(arr, value) {
    return arr.filter((v) => (v === value)).length;
}

if (getOccurrence( x , 'good') === 1 || getOccurrence(x, 'good')===2){
 console.log ("Publish!");
 } else if ( getOccurrence( x , 'good') > 2){
  console.log ("I smell a series");
  } else {
  console.log ("Fail!");
  }