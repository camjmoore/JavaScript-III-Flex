/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. .this refers to the window object by default, the most global object that we use javascript to interact with 
* 2. the object left of the dot, which is the object that encloses your current scope
* 3. new sets .this to the object literal that has been created from a class constructor function
* 4. assigning this to an object of your choice with .call() .apply() or .bind()
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this)


// Principle 2
let whale = {
    species: 'Orca',
    name: 'Tilikum',
    sound: 'clicks, whistles and squeaks',
    whaleCall: function(){
        return `${this.name} ${this.sound}`
    }
}
  
// Principle 3
function Music(attributes){
    this.genre = attributes.genre;
    this.name = attributes.name;
    this.instruments = attributes.instruments;
  }
  
let band1 = new Music({
genre: 'progressive-rock',
name: 'radioHead',
instruments: ['guitars', 'drums', 'pianos', 'synthesizers']
})

// Principle 4
myFavoriteBand.call(band1)

function myFavoriteBand(){
	console.log(`my favorite band is ${this.name}`)
}
