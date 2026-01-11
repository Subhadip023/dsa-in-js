
const twoSum = (arr, target) => {
    const map = {};

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[arr[i]] = i;
    }
    return []
}


console.log(twoSum([2, 7, 9, 11], 9))