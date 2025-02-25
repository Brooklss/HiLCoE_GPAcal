const courses = [
    { name: "Programming Fundamentals", credits:4 },
    { name: "Data Structures & Algorithms",credits: 4 },
    { name: "Database Systems",credits: 3 },
    { name: "Operating Systems",credits: 4 },
    { name: "Computer Networks",credits: 3 },
    { name: "Software Engineering", credits:3 },
    { name: "Web Development", credits:3 },
    { name: "Mobile App Development", credits:3 },
    { name: "Artificial Intelligence",credits: 3 },
    { name: "Cloud Computing", credits:3 },
  ];

  const courseSelector = document.getElementById("courses");
  const creditSelector = document.getElementById("credit_hour");
  
  courses.forEach(course => {
    const option = document.createElement("option");
    option.text = course.name;
    courseSelector.add(option);
  });

  courseSelector.addEventListener("change", () => {
    const selectedCourseName = courseSelector.value;
    const selectedCourseCheck = courses.find(course => course.name === selectedCourseName);
  
    if (selectedCourseCheck) {
        // Update credit hour dropdown
        creditSelector.innerHTML = '';  // Clear existing options
        const creditOption = document.createElement("option");
        creditOption.value = selectedCourseCheck.credits;
        creditOption.textContent = `${selectedCourseCheck.credits} `;
        creditSelector.appendChild(creditOption);
      }
    });
    function addToTable() {
        const courseName = courseSelector.value;
        const creditHours = creditSelector.value;
        const grade = document.getElementById("grade").value;
    
        if (!courseName || !creditHours || !grade) {
            alert("Please select all fields before adding to the table.");
            return;
        }
    
        // Add a row to the table
        const table = document.getElementById("course_table").getElementsByTagName('tbody')[0];
        const newRow = table.insertRow(table.rows.length);
    
        const courseCell = newRow.insertCell(0);
        courseCell.textContent = courseName;
    
        const creditCell = newRow.insertCell(1);
        creditCell.textContent = creditHours;
    
        const gradeCell = newRow.insertCell(2);
        gradeCell.textContent = grade;
    
        // Clear the form fields after adding to the table
        courseSelector.value = "";
        creditSelector.innerHTML = '<option value="" disabled selected>Select a Credit Hour</option>';
        document.getElementById("grade").value = "A";
    }
    function gradeToPoints(grade){
      switch(grade){
        case "A+":
           return 4.0;
        case "A":
            return 4.0;
        case "B+":
            return 3.5;
        case "B":
            return 3.0;
        case "C+":
            return 2.5;
        case "C":
            return 2.0;
        case "D+":
            return 1.5;
        case "D":
            return 1.0;
        case "F":
            return 0.0;
        default:
            return 0;  // Default case if no grade is selected
  }
}
function calculateGPA(){
  const table = document.getElementById("course_table").getElementsByTagName('tbody')[0];
  const rows = table.rows;

  let totalGradePoints = 0; // Fix the typo
  let totalCredits = 0; // Fix the typo

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].cells;
    const creditHours = parseInt(cells[1].textContent);  // Corrected index to 1 for credits
    const grade = cells[2].textContent;
    const gradePoints = gradeToPoints(grade);  // Convert grade to points

    // Accumulate total grade points and total credits
    totalGradePoints += gradePoints * creditHours;
    totalCredits += creditHours;
  }

  // Now calculate GPA
  const gpa = totalGradePoints / totalCredits;
  
  // Display the result
  const resultDiv = document.getElementById("result");
  if (totalCredits > 0) {
    resultDiv.textContent = `Your GPA is: ${gpa.toFixed(2)}`;
  } else {
    resultDiv.textContent = "Please add some courses to calculate your GPA.";
  }
}
