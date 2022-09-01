let jonSnowHealth = 100

// let strHealth = String(jonSnowHealth)
// jonSnowHealth = jonSnowHealth + ''

// jonSnowHealth = Boolean(jonSnowHealth)
// jonSnowHealth = Number(jonSnowHealth)
// console.log(jonSnowHealth)

let myWinner = 'Jon is the winner'
myWinner = myWinner.replace('Jon', 'Danny') 

if(myWinner.includes('Danny')){
    console.log(myWinner)
}

let mySplitStr = myWinner.split(" ")
console.log(mySplitStr)
let myAlmostKebabStr = mySplitStr.join('-')
console.log(myAlmostKebabStr)
let myKebabStr = myAlmostKebabStr.toLowerCase()
console.log(myKebabStr)

const isJohnAlive = () => {
if(jonSnowHealth > 1){
    console.log("He's alive")
} else {
    console.log("He's dead")
}
}

isJohnAlive()

function attackJon(damage){
    jonSnowHealth -= damage
    isJohnAlive()
}

attackJon(30)
attackJon(30)
attackJon (39)
attackJon(20)
