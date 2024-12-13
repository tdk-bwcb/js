const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros) // -> [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// console.log(marvel_heros[3]) // -> [ 'superman', 'batman', 'flash' ]

// console.log(marvel_heros.concat(dc_heros)) // -> [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

// spread
const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros) // -> [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_arr = another_array.flat(Infinity)
// console.log(real_another_arr) // -> [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]



// console.log(Array.isArray("Hitesh")) // -> false
// console.log(Array.from("Hitesh")) // -> [ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name : "hitesh"})) // -> []

let score1 = 300
let score2 = 350
let score3 = 400
// console.log(Array.of(score1, score2, score3)) // -> [ 300, 350, 400 ]

