


const isAanagram = (str1,str2)=>{
    const map1 = {};
    for (let char of str1){
        map1[char]=(map1[char] || 0)+1
    }
    const map2 = {}
    for(let char of str2){
        map2[char]= (map2[char]||0)+1
    }

   for ([key,value] of map1){

    if (map2[key]) {
        
    } else {
        
    }

   }
    
    return false
}

console.log(isAanagram('cat','act'))