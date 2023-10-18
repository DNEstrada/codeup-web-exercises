// Function to calculate the average grade of the students
const calculateAverageGrade = (studentList) => {
     let classAverage = 0;
     // Your code here
     studentList.forEach((student) => {
          classAverage += student.grade;
     })
     classAverage /= studentList.length;
     return classAverage;
};

// Function to find the student with the highest grade
const findTopStudent = (studentList) => {
     let topStudent = studentList[0];
     // Your code here
     for(let student of studentList) {
          // if (student.grade > topStudent.grade) {
          //      topStudent = student;
          // }
          topStudent = (student.grade > topStudent.grade) ? student : topStudent;
     }
     return topStudent;
};

//IIFE / Main
(() => {
     // Array of student objects
     const students = [
          { id: 1, name: "Alice", grade: 90 },
          { id: 2, name: "Bob", grade: 85 },
          { id: 3, name: "Charlie", grade: 78 },
          { id: 4, name: "David", grade: 92 },
          { id: 5, name: "Eva", grade: 88 },
     ];
     // Display the average grade and the top student
     const averageGrade = calculateAverageGrade(students);
     const topStudent = findTopStudent(students);

     console.log(`Average Grade: ${averageGrade}`);
     console.log(`Top Student: ${topStudent.name} (Grade: ${topStudent.grade})`);
})();