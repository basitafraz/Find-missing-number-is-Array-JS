// console.log('hello world')
let a =[0,1,2,3,5,6,7,9,11,17]

let b=[]

for (i = 0; i <= a[a.length - 1] ; i++){
    if(a.includes(i)){
        console.log(`The number ${i} exists in the array`)   
    } else {
        b.push(i);
    }
}   

console.log('This is the list of missing numbers from the array:', b)  
