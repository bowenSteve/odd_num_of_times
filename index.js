function odd_num(arr){
    odd_dict={}
    for (let i=0;i<arr.length;i++){
        if (odd_dict[arr[i]]){
            odd_dict[arr[i]] +=1;
        }
        else{
            odd_dict[arr[i]] =1;
        }
        }
    const oddNum= Object.keys(odd_dict).filter(key=>{
        return odd_dict[key]%2!=0
    })
    return parseInt(oddNum)
    }
odd_num([1,2,2,3,3,3,4,3,3,3,2,2,1])// returns 4
odd_num([7])//returns 7
odd_num([0]) // returns 0
odd_num([1,1,2]) //returns 2
odd_num([0,1,0,1,0]) //returns 0
