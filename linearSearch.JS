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


function linearSearch(arr,target){
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === target){
           return console.log(i);
        }
    }
    return console.log(-1)
}

let arr= [9,3,6,4,5,2,8,1,0,7]

let target = parseInt(prompt("Enter the value to find in the array:"))

sortArray(arr)
linearSearch(arr, target)