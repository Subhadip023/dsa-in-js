

const finndKthLargest = (nums,k) =>{
    const countMap = new Map();

    // Step 1: Count frequencies
    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // Step 2: Bucket sort by frequency
    const buckets = Array(nums.length + 1).fill().map(() => []);
    for (let [num, freq] of countMap) {
        buckets[freq].push(num);
    }

    // Step 3: Get top k from buckets (highest freq to lowest)
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        for (let num of buckets[i]) {
            result.push(num);
            if (result.length === k) break;
        }
    }

    return result;
}    



let nums=[3,2,1,5,6,4,2,2,2,2,1,1,1,1,1,1,1,3,3,3,3,3,]
let k=2
console.log(finndKthLargest(nums,k))