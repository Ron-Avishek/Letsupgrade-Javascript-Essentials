let students = [
    {
        name: "Ram",
        age: "30",
        country: "India",
        hobbies: ['Debate', 'Photography', 'Archery']
    },
    {
        name: "Shyam",
        age: "29",
        country: "India",
        hobbies: ['Draw', 'Reading', 'Debate']
    },
    {
        name: "Sita",
        age: "28",
        country: "India",
        hobbies: ['Sing', 'Dance', 'Reading']
    },

    {
        name: "Ravan",
        age: "37",
        country: "Sri Lanka",
        hobbies: ['Boxing', 'Archery', 'Debate']
    }
];

function displayAge(students) {
    console.log("people with the age less than 30");

    console.log("______________________________________________________________________________");
   criminals.forEach(element => {
      if(element.age<30)
      {
          console.log(element);
      }
       
   });
}
function displayCountry(students) {
    console.log("people with country as India");

    console.log("______________________________________________________________________________");
    criminals.forEach(element => {
        if (element.country == "India") {
            console.log(element);
        }

    });
}
displayAge(students);
displayCountry(students);

