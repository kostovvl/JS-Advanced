function filter(data, cryteria) {
    let criteriaArr = cryteria.split('-');
    let field = criteriaArr[0];
    let criteriaValur = criteriaArr[1];

    let employees = JSON.parse(data);

    let filteredEmployees = employees.filter(e => e[field] === criteriaValur);

    for(let i = 0; i < filteredEmployees.length; i++) {
        let employee = filteredEmployees[i];
        console.log(`${i}. ${employee.first_name} ${employee.last_name} - ${employee.email}`)
    }
}

filter(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
);