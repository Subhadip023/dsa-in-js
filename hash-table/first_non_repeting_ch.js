function firstNonRepeatingCharacter(str) {
    let map = {};

    // First pass: count frequency
    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }
    console.log(map)

    // // Second pass: find first unique character
    // for (let i = 0; i < str.length; i++) {
    //     if (map[str[i]] === 1) {
    //         return i;
    //     }
    // }

    // return -1; // If no unique character is found
}

// console.log(firstNonRepeatingCharacter('leetcode'));      // Output: 0
// console.log(firstNonRepeatingCharacter('loveleetcode'));  // Output: 2
// console.log(firstNonRepeatingCharacter('aabb'));          // Output: -1
