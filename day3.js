// let movies = [
//     "lord of the rings - the fellowship of the ring",
//     "lord of the rings - the two towers",
//     "blade runner"
// ]
// console.log("before", movies)
// movies[2] = "star wars - new hope"
// movies.push('star wars - a new hope')
// movies.pop()
// console.log(movies)


// map
// let names = ['leon', 'chris', 'ben', 'dave']
// names.map((name) => {
//     console.log('hello', name)
// })

// // splice
// let nums = ['one', 'two', 'five', 'six', 'seven']
// nums.splice(2, 2, 'three', 'four')
// console.log(nums)


// // slice
// let food = ['eggs', 'oat milk', 'bananas', 'chocolate', 'bread']
// let items = food.slice(2, 4)
// console.log(items)

// // shift
// let plants = ['snake', 'yukka', 'pothos']
// let first = plants.shift() 
// console.log(first)

// // unshift
// let animals = ['cow', 'lion', 'cat']
// animals.unshift('panda')
// console.log(animal)


// let favSongs = [
//     "spice girls - wannabe",
//     "oasis - wonderwall",
//     "eiffel 65 - blue (da ba dee da ba dai)",
// ]
// for(let i = 0; i < favSongs.length; i++){
//     console.log(favSongs[i], 'value of i is', i)
// }


// let multiplesTwo = []

// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         multiplesTwo.push(i)
//     }
// }

// console.log(`these are the multiples of 2 up to 20: ${multiplesTwo}`)

// let num = 0
// let multiplesTwo = []

// while(num < 20){
//     if(num % 2 === 0){
//         multiplesTwo.push(num)
//     }
//     num++
// }

// console.log(`x2 up to 20: ${multiplesTwo}`)

// let age = 14

// while(age < 18){
//     console.log(`you are ${age}, you are a child`)
//     age++
// }

// console.log(`you are now ${age}, you are an adult`)

// ACTIVITIES

// Activity 1
// let movies = [
//     "lord of the rings - the fellowship of the ring",
//     "lord of the rings - the two towers",
//     "blade runner",
//     "jurassic park",
//     "lost world"
// ]

// movies.push("avatar")
// movies.push("avatar 2")

// for(let i = 0; i < movies.length; i++){
//     console.log(i,':',movies[i])
// }

// Activity 2
// for(let i = 1; i <= 6; i++){
//     console.log(i, ':', Math.ceil(Math.random() * 49))
// }

// Activity 3
// for(let i = 9; i >= 0; i--){
//     console.log(i)
// }

// let num = 9
// while(num >= 0){
//     console.log(num)
//     num--
// }

// Activity 4
// let movies = [
//     "lord of the rings - the fellowship of the ring",
//     "lord of the rings - the two towers",
//     "blade runner",
//     "jurassic park",
// ]

// for(let i = 0; i < movies.length; i++){
//     if(i === 2){
//         if(movies[2] === 'ghostbusters'){
//             console.log('yay its ghostbusters')
//         }else{
//             console.log('booo not ghostbusters')
//         }
//     }else{
//         console.log(movies[i])
//     }
// }