//Binary search works only on sorted arrays

function sortArray(arr){
    for(let i = 0; i<arr.length; i++){
       for(let j=0; j<arr.length; j++)
       {
           if(arr[i] < arr[j])
           {
               let temp = arr[i]
               arr[i] = arr[j]
               arr[j]=temp
           }
       }
    }   
    return console.log(arr)
}


function binarySearch(arr,target){
   let leftIndex = 0
   let rightIndex = arr.length - 1
   while(leftIndex<=rightIndex){
       let middleIndex = Math.floor((leftIndex+rightIndex) / 2)
       if(target === middleIndex){
           return console.log(middleIndex)
       }
       if(target < arr[middleIndex])
       {
       rightIndex = middleIndex - 1
   }
   else{
       leftIndex = middleIndex + 1
   }
   }
    return console.log(-1)
}

let arr= [9,3,6,4,5,2,8,1,0,7]

let target = parseInt(prompt("Enter the value to find in the array:"))

sortArray(arr)
binarySearch(arr, target)


// Binary search using Recursion
function BinarySearch(arr , target){
    search(arr , target , 0, arr.length-1)
}
function search(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return-1
    }
    let middleIndex = Math.floor((leftIndex+rightIndex) /2)
    if(target === middleIndex){
        return console.log(arr[middleIndex])
    }
    if(target < arr[middleIndex])
    {
        return search(arr, target, leftIndex, middleIndex-1)
    }else{
        return search(arr,target, middleIndex+1, rightIndex)
    }
    return 
}

let arr = [0,1,2,3,4,5,6,7,8,9]


let n = parseInt(prompt("Enter the number to find the index: "))
BinarySearch(arr, n)