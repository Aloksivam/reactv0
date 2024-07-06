let nr=[1,2,"alok"]
let nr2 = [2,3,...nr]
let nr3 = [2,3,4,5,6,7]
console.log(nr)
console.log(nr2)
console.log(nr3.filter((n)=>n%2==0))
console.log(nr3.map((n)=>n>0?-1:0))
