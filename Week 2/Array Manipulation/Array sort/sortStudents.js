/*
Given an array of students, 
sort first by graduated then by grade like in the example above.
Each object in the students array will have properties id, 
graduated and grade just like in the example shown above.
*/


function sortStudents(students) {
    
    students.sort( (a, b) => 

        ((b.graduated) - (a.graduated) || b.grade - a.grade));

}

module.exports = sortStudents;