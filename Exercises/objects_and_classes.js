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

   //Exercise 6:

   function systemComponents(input) {

    let result = {};

    input.forEach(item => {
        let tokens = item.split(' | ');
        let systemiStr = tokens[0];
        let componentStr = tokens[1];
        let subcomponentStr = tokens[2];

        let exisstingSystems = [];
         exisstingSystems = Object.keys(result);
        if (!exisstingSystems.includes(systemiStr)) {
            let subComponent = {};
            subComponent[subcomponentStr] = true;
            let component = {};
            component[componentStr] = subComponent;
            result[systemiStr] = component;
        } else {
            let existingComponents = {};

            existingComponents = Object.keys(result[systemiStr]);

            if (!existingComponents.includes(componentStr)) {
                let subComponent = {};
                subComponent[componentStr] = true;
                let component = {};
                component[subcomponentStr] = subComponent;
            result[systemiStr][componentStr] = component;
            } else {
                result[systemiStr][componentStr][subcomponentStr] = true;
            }
        }
    })

    let orderedSystems = {};
   orderedSystems = Object.keys(result);
   orderedSystems.sort(function order(key1, key2) { 
       let rresult = 0;
       let keys1Length = Object.keys(result[key1]).length;
       let keys2Length = Object.keys(result[key2]).length;
       rresult = keys2Length - keys1Length;
       if (rresult == 0) {
           rresult =  key1.localeCompare(key2) ;
       }
     return rresult; 
     });
    
   orderedSystems.forEach(system => {
       console.log(`${system}`)
       let orderedComponents = {};
        orderedComponents = Object.keys(result[system]).sort(function order(key1, key2) { 
            let rresult = 0;
            let keys1Length = Object.keys(result[system][key1]).length;
            let keys2Length = Object.keys(result[system][key2]).length;
            rresult = keys2Length - keys1Length;
        return  rresult;
    });
    orderedComponents.forEach(component => {
        console.log(`|||${component}`);
        let subComponents = {};
        subComponents = Object.keys(result[system][component]);
        subComponents.forEach(subComponent => {
            console.log(`||||||${subComponent}`);
        })
    })
   })
}

  //Exercise 7:

  class Request{
      constructor(method, uri, version, message){
          this.method = method;
          this.uri = uri;
          this.version = version;
          this.message = message;
          this.response = undefined;
          this.fulfilled = false;
      }
  }

  //Exercise 8:

  

  function sortTickets(inputArr, sortParam) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let dataBase = [];

    inputArr.forEach(ticket => {
        let ticketArr = ticket.split('|');
        let destination = ticketArr[0];
        let price = Number(ticketArr[1]);
        let status = ticketArr[2];

        let ticketObj = new Ticket(destination, price, status);
        dataBase.push(ticketObj);
    })

    dataBase.sort(function(a, b){
        if (sortParam !== 'price') {
        return a[sortParam].localeCompare(b[sortParam]);
    } else {
        return a[sortParam] - b[sortParam];
    }
    })

   return dataBase;

  }

  //Exercise 9:

  class SortedList{
      constructor(){
          this.list = [];
          this.size = 0;
      }
      add(number) {
          this.list.push(number);
          this.list.sort(function(a, b) {return a - b});
          this.size = this.list.length;
      }

      remove(index) {
          if (index >= 0 || index <= this.list.size) {
            this.list.splice(index, 1);
            this.list.sort(function(a, b) {return a - b});
            this.size = this.list.length;
          }
      }

      get(index) {
          if (index < 0 || index > this.size) {
              return undefined;
          }
          return this.list[index];
      }
  }

 class Stringer{
     constructor(string, length) {
         this.innerString = string;
         this.innerLength = length;
     }

     decrease(margin) {
         this.innerLength -= margin;
         if (this.innerLength < 0) {
             this.innerLength = 0;
         }
     }

     increase(margin) {
         this.innerLength += margin;
     }
     
     toString() {
         if (this.innerLength < this.innerString.length) {
         return this.innerString.substring(0, this.innerLength) + '...';
        } else {
            return this.innerString;
        }
     }
 }

 let test = new Stringer('test', 5);
 test.decrease(3)
 test.increase(10)
 console.log(test.toString());