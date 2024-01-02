/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    let res=Math.max(...candies)
    let newArr=[]

    for(let i=0; i<candies.length; i++) {
       
        if(res>candies[i]+extraCandies) {
            newArr.push(false)          
        } else {
         newArr.push(true)  
        }

    }
      return newArr
};
