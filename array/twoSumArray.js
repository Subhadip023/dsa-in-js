const twoSum = (nums, target) => {
    const result =[];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i]+nums[j]==target) {
                result.push(i)
                result.push(j)
            }
        }
    }
    return result 
}


console.log(twoSum([2,7,9,11],9))