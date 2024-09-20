// objects with functionality

const obj = {
    name:'Siva',
    age: 22,
    "Key-three" : true,
    Itisreal : function(){
        console.log("This is Working")
    }
}
obj.now = 'working'


console.log(obj.name)
console.log(obj.age)
console.log(obj["Key-three"])
console.log(obj)
obj.Itisreal()

//for of loop in JS

const arr = [1,2,3,4,5]

for(const items of arr){
    console.log(items)
}

