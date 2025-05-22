const moveZeroes = (nums)=>{
    let insertPos=0;
    for(let i=0;i<nums.length;i++){
       if (nums[i]!==0) {
        nums[insertPos]=nums[i]
        insertPos++
       }
    }

    while (insertPos<nums.length){
        nums[insertPos]=0;
        insertPos++
    }
    return nums
}

console.log(moveZeroes([0,2,34,5,60,54,0,6,6,6,543,2,3]))