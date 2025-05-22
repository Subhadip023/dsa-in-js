// given 2 array and return merge array sortted 


const mergeArray =(array1,array2)=>{
    const resultArray=[];
    let array1Item=array1[0];
    let array2Item=array2[0];
    let i=0;
    let j=0;
    while (array1Item||array2Item) {
        if (array2Item===undefined || array1Item<array2Item) {
            resultArray.push(array1Item)
            array1Item=array1[i]
            i++;
        }else{
            resultArray.push(array2Item);
            array2Item=array2[j]
            j++
        }
    }
    
    return resultArray;
}


console.log(mergeArray ([0,3,4,31],[4,6,30]))