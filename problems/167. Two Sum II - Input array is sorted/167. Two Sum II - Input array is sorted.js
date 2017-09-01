/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var biserach=function(numbers,compare){
    var left=0;
    var right=numbers.length-1;
    var middle;
    while(left<=right){
        middle=(left+right)/2;
        switch(test(middle)){
            case -1:
                left=middle+1;
                break;
            case 1:
                right=middle-1;
                break;
            case 0:
                return middle;
        }
    }
    return -1;
}

var twoSum = function(numbers, target) {
    
biserach(numbers,(index1)=>{
    bisearch(numbers.slice(index1+1),(index2)=>{
        var diff=numbers[index1]+numbers[index2]-target
        if(diff>0){
            return 1;
        }else if(diff<0){
            return -1;
        }else{
            return 0;
        }
    })
})
};