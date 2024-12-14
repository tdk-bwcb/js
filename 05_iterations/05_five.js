const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item) {
    // console.log(item)
} )
// js
// ruby
// java
// python
// cpp

coding.forEach( (item) => {
    // console.log(item)
} )
// js
// ruby
// java
// python
// cpp


function printme(obj){
    // console.log(obj)
}
// coding.forEach(printme(item)) // -> error : item is not defined
// coding.forEach(printme()) // error : undefined is not a function
// coding.forEach(printme) // -> ✅
// js
// ruby
// java
// python
// cpp


coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr)
} )
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]


// [ {}, {}, {} ]
const code = [
    {
        language : "javascript",
        filename : "js"
    },
    {
        language : "python",
        filename : "py"
    },
    {
        language : "c++",
        filename : "cpp"
    },
]
code.forEach( (item) => {
    console.log(`${item.filename} - ${item.language}`)
})
// js - javascript
// py - python
// cpp - c++