//DOM Load 
document.addEventListener('DOMContentLoaded', () => {

    forINLoop();

    forOFLoop();
})


function forINLoop() {

    // A Student Object 
    const student = { name: "Abebe", age: 21, year: "2dn year" }

    // 1. Create a for in loop that iterate over the student object
    for (const res in student) {
        if (Object.hasOwnProperty.call(student, res)) {
            const Value = student[res];
            forInLoop.innerHTML +=
            `
            <li class="list-group-item" >${res} : ${Value}</li>`;
            
        }
    }



    // 2. Inside the loop paint the UI [Use the Format Given Below]


    //Use this Format 

    // forInLoop.innerHTML +=
    //     `
    //     <li class="list-group-item" >${Key} : ${Value}</li>

    // `;

}


function forOFLoop() {

    // A Students Array
    const students = [{ name: "Abebe", age: 21, year: "2dn year" }, { name: "Kebede", age: 22, year: "2dn year" }, { name: "Abebech", age: 23, year: "2dn year" }]

    // 1. Create a for of loop that iterate over the students Array and displays the names of students 

    for (const item of students) {
        forOfLoop.innerHTML +=
        `
        <li class="list-group-item" >Name : ${item.name}</li>

    `;
    }


    // 2. Inside the loop paint the UI [Use the Format Given Below]


    //Use this Format 

    // forOfLoop.innerHTML +=
    //     `
    //     <li class="list-group-item" >Name : Abebe</li>

    // `;

}