class Employee{
    constructor(name, salary, possition) {
        this.name = name;
        this.salary = salary;
        this.possition = possition;
    }
}

class Departament{
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    getAll() {
        return this.employees;
    }
}

class Company{
    constructor() {
        this.departments = [];
    }

    addEmployee(...args) {
        //Proverki za towa dali e validen inputa....
        let name = args[0];
        let salary = +args[1];
        let possition= args[2];
        let departament = args[3];

        let employee = new Employee(name, salary, possition);

        let existinDepts = this.departments.map(d => d.name);

        let exists = false;

        for (let i = 0; i < existinDepts.length; i ++) {
            if (departament === existinDepts[i]) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            let dept = new Departament(departament);
            dept.addEmployee(employee);
            this.departments.push(dept);
        } else {
           this.departments.forEach(department => {
            if (department.name === departament) {
                department.addEmployee(employee);
            }
        })
          
           }
        }

    

    bestDepartment() {
        let bestDepartment = new Departament;
        let bestAvgSallary = 0;

        this.departments.forEach(department => {
            let avgDebptSallary = 0;
           department.getAll().forEach(employee => {
                let employeeSallary = employee.salary;
                avgDebptSallary += employeeSallary;
            })
            avgDebptSallary = avgDebptSallary / department.getAll().length;

            if (bestAvgSallary < avgDebptSallary) {
                bestAvgSallary = avgDebptSallary;
                bestDepartment = department;
            }
        })

        console.log(`Best Department is ${bestDepartment.name}`)
        console.log(`Average sallary: ${bestAvgSallary}`);
        bestDepartment.getAll().forEach(employee => {
            console.log(`${employee.name} ${employee.salary}, ${employee.possition}`)
        })
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
c.bestDepartment();
