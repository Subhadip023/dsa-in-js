//Google Question
//Given an 
const array1 = [2,5,1,2,3,5,1,2,4]
//It should return 2

//Given an 
const array2 = [2,1,1,2,3,5,1,2,4]
//It should return 1

//Given an 
const array3 = [2,3,4,5]
//It should return undefined


function firstRecurringCharacter(input) {
    let map = {};
  for(let i=0;i<input.length;i++){
    // console.log(map[input[i]])
    if(map[input[i]]!==undefined){
      return input[i];
    }else{
      map[input[i]]=i
    }
  }

  return undefined
}

console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]))


//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2