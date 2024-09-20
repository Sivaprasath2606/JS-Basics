// Cartesian Product 
function cartesianProduct(arr1,arr2){
    let result = []
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            result.push([arr1[i],arr2[j]])
        }
    }
    return result
}

let arr1 = [1,2,3]
let arr2 = [4,5,6]
console.log(cartesianProduct(arr1,arr2))

// climbing StairCase 

function climbingStairCase(n){
    let noOfWays = [1,2]
    for(let i =2; i<=n;i++){
        noOfWays[i] = noOfWays[i-1]+noOfWays[i-2]
    }
    return noOfWays[n-1]


}

let n=parseInt(prompt("Enter no of Steps to Climb:"))
let result = climbingStairCase(n)
console.log(result)

// Tower of Hanoi 
function tower(n,from,to,using){
    if(n === 1){
        console.log(`Move the disk 1 from ${from} to ${to}`)
        return
    }
    tower(n-1,from,using,to)
    console.log(`Move the disk ${n} from ${from} to ${to}`)
    tower(n-1,using,to,from)
}
tower(3,'A','C','B')