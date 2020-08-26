class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set fullName(fullName) {
        let nameArr = fullName.split(' ');
        if (nameArr.length === 2) {
            this.firstName = nameArr[0];
            this.lastName = nameArr[1];
        }
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let spas = new Person('Spas', 'Spasov');
console.log(spas.fullName);
spas.fullName = 'Ignat Ignatov';
console.log(spas.fullName);
spas.firstName = 'Spas';
console.log(spas.fullName);