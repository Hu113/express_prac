// const table1 = {
//     name: 'Jeff',
//     height: 170,
//     weight: 65,
//     age: 26,
//     class: 'A-',
//     interest: ["喝酒", "爬山", "寫程式"]
// };

// const msg = `我是${table1.name}，今年${table1.age}`;

// const people = [
//     { name: 'John', age: 30, city: 'New York' },
//     { name: 'Alice', age: 25, city: 'Los Angeles' },
//     { name: 'Bob', age: 35, city: 'Chicago' }
// ];

// const res1 = people.filter(ele => ele.age >= 30)
//                    .map(person=> person.name);

// console.log(res1);

// //console.log(res);
// const studentscore = [
//     { name: 'jeff', age: 18, scores: [95,88,100] },
//     { name: 'leo', age: 22, scores: [90,97,98] },
//     { name: 'holy', age: 25, scores: [75,68,90] },
//     {name: 'Kevin', age: 33, scores: [77, 65, 32]},
//     {name: 'Jenny', age: 20, scores: [63, 82, 91]},
//     { name: 'Ellie', age: 31, scores: [100,73,83] }
// ];
// const res = studentscore.filter(stu => stu.age >=30)
//                         .map(stu1=> stu1.name);
// console.log(res);

// const sum= studentscore.filter(stu2 => stu2.scores[0]+stu2.scores[1]+stu2.scores[2] >=250)
//                         .map(stu3 => stu3.name+"-"+stu3.age);

// console.log(sum);

for(let i=6;i>0;i--){
    if(i!==0){
        console.log("*".repeat(i));
    }
    // console.log("\n");
}