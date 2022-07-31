function reverseString(string){
    //create new array to store letters
    const newString = []
    
    //loop through string and push each letter to beginning of array
    for (let letter in string){
        newString.unshift(string[letter])
    }
    
    //jioin array together into string and return it
    return newString.join('')
}

module.exports = reverseString