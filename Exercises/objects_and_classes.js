// Exercise 1:

function heroicInventory(input) {

    let heroes = [];

    if (input === undefined) {

    }

    input.forEach(element => {
        let row = element.split(' / '); 
        let name = row[0];
        let level = Number(row[1]);
        let itemsInpiut = row[2] 
        let itmemsArr = itemsInpiut === undefined ? [] : row[2].split(', ');

        let hero = {'name': name, 'level': level, 'items': itmemsArr};
        heroes.push(hero);
    });

    console.log(JSON.stringify(heroes));
}

// Exercise 2:

function turnJSONtoHTMLtable(jsonInput) {
    let result = '<table>\n'

    jsonInput.forEach(row => {
        result += '    <tr>\n'
        let object = JSON.parse(row);
        let keys = Object.keys(object);
        keys.forEach(key => {
            result += `        <td>${object[key]}</td>\n`
        })
        result += '    </tr>\n'
    })

    result += '</table>';

    console.log(result);

}

// Exercise 3:

function cappyJuice(input) {
    let juices = {};

    input.forEach(entry => {
        let entryArr = entry.split('=>');
        let name = entryArr[0];
        let quantity = Number(entryArr[1]) / 1000;

        let keys = Object.keys(juices);

        if (!keys.includes(name)) {
            juices[name] = quantity;
        } else {
            let currentQuantity = juices[name];
            delete juices[name];
            juices[name] = currentQuantity + quantity;
        }
    })

    for (const [key, value] of Object.entries(juices)) {
        if (value >= 1) {
        console.log(`${key}=> ${Math.floor(value)}`);
    }
    }
    }

    // Exercise 4:

    function storeCatalogue(input) {
        input = input.sort();

        let result = {};

        for (let i = 65; i < 91; i++) {
            let letter = String.fromCharCode(i);
            result[letter] = [];
        }

        for (const [key, value] of Object.entries(result)) {
            let startLetter = key;
            let results = []
            input.forEach(entry => {
                if (entry.substring(0, 1) === startLetter) {
                    results.push(entry);
                }
            })
            if (results.length !== 0) {
                console.log(key)
                results.forEach(result => {
                    let shit = result.split(' : ')
                    console.log(`  ${shit[0]}: ${shit[1]}`)
                })
            }
        }
    }

    //Exercise 5:

    function autoEngineeringCompany(input) {

        let cars = {}

        input.forEach(car => {
            let carTokens = car.split(' | ');
            let brand = carTokens[0];
            let model = carTokens[1];
            let carsNumbers = Number(carTokens[2]);

            let existingBrands = []
            existingBrands = Object.keys(cars);

    
            let modelAndNumbers = {};
            modelAndNumbers[model] = carsNumbers;
            if (!existingBrands.includes(brand)) {
                cars[brand] = modelAndNumbers;
            } else {

                let existingmodels = Object.keys(cars[brand]);


                if (existingmodels.includes(model)) {
                    let existingCarsNumber = cars[brand][model];
                 cars[brand][model] = existingCarsNumber + carsNumbers;
                } else {
                   cars[brand][model] = carsNumbers;
                   console.log();
                }
            }
        })

        for (const [key, value] of Object.entries(cars)) {
            console.log(key)
            for (const [key, value2] of Object.entries(value)) {
                console.log(`###${key} -> ${value2}`)
            }
        }

    }

    autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
    );