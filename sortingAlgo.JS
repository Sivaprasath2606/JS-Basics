// BubbleSort Algorithm
//Time complexeity o(n^2)

function bubbleSort(arr){
    let swap
    do{
        swap = false
        for(let i=0; i< arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp
                swap = true;
            }
        }
    }while(swap)
}


let arr = [41,7,5,2,3,8,94,43,25,4,6,68,3,50]
bubbleSort(arr);
console.log(arr)


// Insertion Sort Algorithm

function insertionSort(arr){
    for(let i=1; i< arr.length; i++){
        let numberToInsert = arr[i]
        let j = i-1
        while(j>=0 && arr[j] > numberToInsert){
        arr[j+1] = arr[j]
        j = j-1
        }
        arr[j+1] = numberToInsert
    }
    return
}

let arr = [41,7,5,2,3,8,94,43,25,4,6,68,3,50]
insertionSort(arr)
console.log(arr)


// Quick Sort Algorithm

function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    
    for (let i = 0; i<arr.length-1; i++){
        if(arr[i]< pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return[...quickSort(left), pivot, ...quickSort(right)]
}

let arr = [41,7,5,2,3,8,94,43,25,4,6,68,3,50]

// To store the value of sorted array in the quickSort using sorted 
let sorted = quickSort(arr)
console.log(sorted)

// merge Sort Algorithm


function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let leftArray = arr.slice(0,mid)
    let rightArray = arr.slice(mid)
    
    return merge(mergeSort(leftArray),mergeSort(rightArray))
}

function merge(leftArray, rightArray){
    const sortedArray = []
    while(leftArray.length && rightArray.length){
    if(leftArray[0] <= rightArray[0])
    {
        sortedArray.push(leftArray.shift())
    }else{
        sortedArray.push(rightArray.shift())
    }
    }
    return ([...sortedArray,...leftArray,...rightArray])
}

let arr = [41,7,5,2,3,8,94,43,25,4,6,68,3,50]
let sorted = mergeSort(arr)
console.log(sorted)
