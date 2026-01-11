/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const output = [];

    for (let nums of set2) {
        if (set1.has(nums)) output.push(nums)
    }

    return output
};


console.log(intersection([1, 2, 2, 1], [2, 2]))