// Exercise 1:

function townsToJSON(input) {

    let towns = new Array;
    let regex = /\s*\|\s*/;

    for(let i = 1; i < input.length; i++) {
        let stringArr = input[i].split(regex);

        let town = {'Town': stringArr[1], 
        'Latitude': (Number(stringArr[2])), 'Longitude': (Number(stringArr[3]))}
            
        towns.push(town);
    }

    let json = JSON.stringify(towns);

    console.log(json);
}

//Exercise 2: 

function sumByTown(input) {
    let towns = {};

    for (let i = 0; i < input.length; i += 2) {
        let townName = input[i];
        let income = Number(input[i + 1]);

        if (Object.keys(towns).includes(townName)) {
            towns[townName] = towns[townName] + income;
        } else {
            towns[townName] = income;
        }

    }

    console.log(JSON.stringify(towns))
}

// Exercise 3:

function populationsInTowns(input) {
    let towns = {};


    for(let i = 0; i < input.length; i++) {
        let town = input[i].split(' <-> ');
        let townName = town[0];
        let population = Number(town[1]);

        if (Object.keys(towns).includes(townName)) {
            towns[townName] = towns[townName] + population;
        } else {
            towns[townName] = population;
        }
    }

    let townsNames = Object.keys(towns);

    townsNames.forEach(townName => {
        console.log(`${townName} : ${towns[townName]}`)
    });
}

// Exercise 4:

function fromJSONtoHTMLtable(input) {

    let escapedInput = str => str
    

    let result = '<table>\n'

    let inputObject = JSON.parse(input);
    let columnNames = Array.from(new Set(inputObject.map(i => Object.keys(i)).flat()));

    result += `<tr><th>${columnNames.join('</th><th>')}</th></tr>\n`;

    inputObject.forEach(row => {
        result += '<tr>';
        let keys = Object.keys(row);
    keys.forEach(key => {
        let value = row[key];
        value = value == undefined ? '' : 
        value;

        result +=`<td>${value}</td>`;
    })
     
        result += '</tr>\n';
    });

    result += '</table>';

    console.log(result);
}

// Exercise 5:

function lowestPriceInCities(input) {

    let result = {};

    input.forEach(entry => {
        let stringArr = entry.split(' | ');
        let productName = stringArr[1];
        let town = stringArr[0];
        let price = Number(stringArr[2]);

        if (!Object.keys(result).includes(productName)) {
            result[productName] = priceAndTown = {'town': town, 'price': price};
        } else {
            let priceAndTown = result[productName];
            if (priceAndTown.price > price) {
                priceAndTown.town = town;
                priceAndTown.price = price;
            }
        }
    })

    let productNames = Object.keys(result);

    productNames.forEach(product => {
        let town = result[product].town;
        let price = result[product].price;
        console.log(`${product} -> ${price} (${town})`)
    })
}

//Exercise 6:

class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

// Exercise 7: 

function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }
    return [
        new Person("Maria", "Petrova", 22, "mp@yahoo.com"),
        new Person("SoftUni"),
        new Person("Stephan", "Nikolov", 25),
        new Person("Peter", "Kolev", 24, "ptr@gmail.com")
    ]

}

//Exercise 8:

function circleArea() {
    class Circle {
        constructor(radius) {
            this.radius = radius;
        }

        get diameter() {
            return this.radius * 2;
        }

        set diameter(diameter) {
            this.radius = diameter / 2;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }
    }
}

// Exercise 9:

function distanceClass(){
    class Distance {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        static distance(p1, p2) {
            let x1 = p1.x;
            let x2 = p1.y;

            let y1 = p2.x;
            let y2 = p2.y;
            let result = Math.sqrt((x1 - y1) ** 2 + (x2 - y2) ** 2);

            return result;
        }
    }

    let p1 = new Distance(5, 5);
let p2 = new Distance(9, 8);

let distance = Distance.distance(p1, p2);

console.log(distance);
}

distanceClass();


