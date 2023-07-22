const data = [
  {
    firstname: "Nazrin",
    age: 20,
    job: "Front-End Developer",
    startDate: 2022,
    salary: 1500,
  },
  {
    firstname: "Azer",
    age: 22,
    job: "Back-End Developer",
    startDate: 2022,
    salary: 2500,
  },
  {
    firstname: "Ayten",
    age: 24,
    job: "Help Desk",
    startDate: 2021,
    salary: 4000,
  },
  {
    firstname: "Ayan",
    age: 21,
    job: "Cloud Engineer",
    startDate: 2023,
    salary: 5000,
  },
  {
    firstname: "Orxan",
    age: 45,
    job: "CEO",
    startDate: 2020,
    salary: 9000,
  },
];

const showEmployees = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    console.log(
      `
      Ad:${arr[i].firstname} 
      Yas:${arr[i].age} 
      Is:${arr[i].job} 
      Baslama Tarixi:${arr[i].startDate} 
      Maas:${arr[i].salary}`
    );
  }
};

showEmployees(data);
