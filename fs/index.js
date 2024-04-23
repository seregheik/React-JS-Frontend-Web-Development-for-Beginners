// let thingsToDo = {
//     morning : 'wake up',
//     afternoon : 'eat breakfast',
//     evening : ['code', 'sleep']
// }

// let {morning, afternoon} = thingsToDo
// console.log(morning)
// console.log(thingsToDo)

// morning = 'pass'

// thingsToDo = {morning}
// console.log(morning)
// console.log(thingsToDo)

class Rectangle {
    constructor(height, width, color) {
        this.height = height
        this.width = width
        this.color = color
    };

    get area () {
        return this.height * this.width
    }

    area () {
        return this.height * this.width
    }

    
}

let redRectangle = new Rectangle(1, 2, 'red')
let blueRectangle = new Rectangle(4, 5, 'blue')
console.log(redRectangle, blueRectangle);