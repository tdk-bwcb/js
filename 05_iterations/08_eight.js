const myNums = [1,2,3]

const myTotal = myNums.reduce( function (accumulator, currValue) {
    // console.log(`acc : ${accumulator}, currVal : ${currValue}`)
    return accumulator + currValue
}, 100 )
// console.log(myTotal) 
// acc : 100, currVal : 1
// acc : 101, currVal : 2
// acc : 103, currVal : 3
// 106


const myTotal1 = myNums.reduce( (acc, curr) => acc + curr , 900)
// console.log(myTotal1) // -> 906


const shopppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "js1 course",
        price : 4999
    },
    {
        itemName : "js3 course",
        price : 7999
    },
    {
        itemName : "ps3 course",
        price : 12999
    }
]

const price = shopppingCart.reduce( (acc, item) => acc + item.price , 0 )
console.log(price) // -> 28996