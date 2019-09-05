# Well-of-Ideas---Easy-Version
for Codewars solution 


For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


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
