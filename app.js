const courses = [
  { name: "Fundamentals of Software Engineering", credits: 5 },
  { name: "Computer Programming I", credits: 5 },
  { name: "Computer Programming II", credits: 5 },
  { name: "Database Management Systems", credits: 5 },
  { name: "Object Oriented Programming", credits: 5 },
  { name: "Introduction to UNIX", credits: 3 },
  { name: "Computer Organization & Assembly Language Programming", credits: 5 },
  { name: "Data Structures and Algorithm Analysis", credits: 5 },
  { name: "Logic Design", credits: 4 },
  { name: "Windows Programming", credits: 5 },
  { name: "Operating Systems", credits: 4 },
  { name: "Object Oriented Software Engineering", credits: 4 },
  { name: "Data Communications and Computer Networks", credits: 5 },
  { name: "Industrial Practice", credits: 3 },
  { name: "Software Design and Architecture", credits: 4 },
  { name: "Software Requirements Engineering", credits: 4 },
  { name: "Software Project Management", credits: 4 },
  { name: "Web Technologies", credits: 4 },
  { name: "Human Computer Interaction", credits: 4 },
  { name: "Wireless Communications and Mobile Computing", credits: 4 },
  { name: "Introduction to Enterprise Systems", credits: 4 },
  { name: "Recent Trends in Software Engineering", credits: 4 },
  { name: "Software Quality Assurance and Testing", credits: 4 },
  { name: "Computer Systems Security", credits: 5 },
  { name: "Senior Project", credits: 6 },
  { name: "Introduction to Emerging Technologies", credits: 4 },
  { name: "Multimedia Systems", credits: 4 },
  { name: "Network Administration", credits: 4 },
  { name: "Advanced Database Systems", credits: 4 },
  { name: "Computer Graphics", credits: 4 },
  { name: "Formal Language and Automata Theory", credits: 4 },
  { name: "Compiler Design", credits: 4 },
  { name: "Simulation and Modeling", credits: 4 },
  { name: "Artificial Intelligence", credits: 4 },
  { name: "Complexity Theory", credits: 4 },
  { name: "Organizational Behavior", credits: 4 },
  { name: "Logic and Critical Thinking", credits: 4 },
  { name: "General Psychology", credits: 4 },
  { name: "Social Anthropology", credits: 3 },
  { name: "Moral and Civics Education", credits: 3 },
  { name: "Geography of Ethiopia and the Horn", credits: 4 },
  { name: "History of Ethiopia and the Horn", credits: 4 },
  { name: "Mathematics for Natural Sciences", credits: 4 },
  { name: "General Physics", credits: 4 },
  { name: "Communicative English Language Skills I", credits: 4 },
  { name: "Communicative English Language Skills II", credits: 4 },
  { name: "Inclusiveness", credits: 3 },
  { name: "Global Trends", credits: 3 },
  { name: "Statistics & Probability", credits: 4 },
  { name: "Economics", credits: 4 },
  { name: "Entrepreneurship", credits: 4 }
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
/* computer science
const courses = [
    { name: "ICT Fundamentals", credits: 4 },
    { name: "Computer Programming I", credits: 4 },
    { name: "Computer Programming II", credits: 4 },
    { name: "Object Oriented Programming", credits: 4 },
    { name: "Windows Programming", credits: 3 },
    { name: "Introduction to UNIX", credits: 2 },
    { name: "Logic Design", credits: 3 },
    { name: "Computer Organization & Assembly Language Programming", credits: 3 },
    { name: "Data Structure & Algorithm Analysis", credits: 3 },
    { name: "Web Design & Development I", credits: 4 },
    { name: "Web Design & Development II", credits: 3 },
    { name: "Database Management Systems", credits: 3 },
    { name: "Database Programming & Admin", credits: 3 },
    { name: "Systems Analysis & Design", credits: 3 },
    { name: "Operating Systems", credits: 4 },
    { name: "Focusing Areas in ICT", credits: 2 },
    { name: "Object Oriented Software Engineering", credits: 3 },
    { name: "Computer Networks", credits: 3 },
    { name: "Network Administration", credits: 3 },
    { name: "Information Retrieval", credits: 3 },
    { name: "Computer Systems Security", credits: 3 },
    { name: "Senior Project", credits: 5 },
    { name: "Introduction to Emerging Technologies", credits: 3 },
    { name: "Unix Systems Administration", credits: 4 },
    { name: "Compiler Design", credits: 3 },
    { name: "Data Mining", credits: 3 },
    { name: "Software Testing", credits: 3 },
    { name: "Distributed Systems", credits: 4 },
    { name: "Parallel Processing", credits: 3 },
    { name: "Mobile Application", credits: 3 },
    { name: "IT Research Methods", credits: 3 },
    { name: "E-Learning Methodology", credits: 3 },
    { name: "Simulation and Modeling", credits: 3 },
    { name: "Artificial Intelligence", credits: 3 },
    { name: "Computer Graphics", credits: 3 },
    { name: "Enterprise Systems", credits: 4 },
    { name: "E-Business Models", credits: 3 },
    { name: "IT Service Management", credits: 3 },
    { name: "Info System Strategy & Management", credits: 3 },
    { name: "Telecom Management", credits: 3 },
    { name: "IT Project Management", credits: 3 },
    { name: "Computer Vision & Image Processing", credits: 3 },
    { name: "Geographic Information Systems", credits: 4 },
    { name: "Advanced GIS & Remote Sensing", credits: 4 },
    { name: "Logic and Critical Thinking", credits: 3 },
    { name: "General Psychology", credits: 3 },
    { name: "Social Anthropology", credits: 2 },
    { name: "Moral and Civics Education", credits: 2 },
    { name: "Geography of Ethiopia and the Horn", credits: 3 },
    { name: "History of Ethiopia and the Horn", credits: 3 },
    { name: "Mathematics for Natural Sciences", credits: 3 },
    { name: "General Physics", credits: 3 },
    { name: "Communicative English Language Skills I", credits: 3 },
    { name: "Communicative English Language Skills II", credits: 3 },
    { name: "Inclusiveness", credits: 2 },
    { name: "Global Trends", credits: 2 },
    { name: "Statistics & Probability", credits: 3 },
    { name: "Economics", credits: 3 },
    { name: "Entrepreneurship", credits: 3 }
];
*/
/*
const courses = [
    { name: "Fundamentals of Software Engineering", credits: 4 },
    { name: "Computer Programming I", credits: 4 },
    { name: "Computer Programming II", credits: 4 },
    { name: "Database Management Systems", credits: 4 },
    { name: "Object Oriented Programming", credits: 4 },
    { name: "Introduction to UNIX", credits: 2 },
    { name: "Computer Organization & Assembly Language Programming", credits: 4 },
    { name: "Data Structures and Algorithm Analysis", credits: 4 },
    { name: "Logic Design", credits: 3 },
    { name: "Windows Programming", credits: 4 },
    { name: "Operating Systems", credits: 3 },
    { name: "Object Oriented Software Engineering", credits: 3 },
    { name: "Data Communications and Computer Networks", credits: 4 },
    { name: "Industrial Practice", credits: 2 },
    { name: "Software Design and Architecture", credits: 3 },
    { name: "Software Requirements Engineering", credits: 3 },
    { name: "Software Project Management", credits: 3 },
    { name: "Web Technologies", credits: 3 },
    { name: "Human Computer Interaction", credits: 3 },
    { name: "Wireless Communications and Mobile Computing", credits: 3 },
    { name: "Introduction to Enterprise Systems", credits: 3 },
    { name: "Recent Trends in Software Engineering", credits: 3 },
    { name: "Software Quality Assurance and Testing", credits: 3 },
    { name: "Computer Systems Security", credits: 4 },
    { name: "Senior Project", credits: 5 },
    { name: "Introduction to Emerging Technologies", credits: 3 },
    { name: "Multimedia Systems", credits: 3 },
    { name: "Network Administration", credits: 3 },
    { name: "Advanced Database Systems", credits: 3 },
    { name: "Computer Graphics", credits: 3 },
    { name: "Formal Language and Automata Theory", credits: 3 },
    { name: "Compiler Design", credits: 3 },
    { name: "Simulation and Modeling", credits: 3 },
    { name: "Artificial Intelligence", credits: 3 },
    { name: "Complexity Theory", credits: 3 },
    { name: "Organizational Behavior", credits: 3 },
    { name: "Logic and Critical Thinking", credits: 3 },
    { name: "General Psychology", credits: 3 },
    { name: "Social Anthropology", credits: 2 },
    { name: "Moral and Civics Education", credits: 2 },
    { name: "Geography of Ethiopia and the Horn", credits: 3 },
    { name: "History of Ethiopia and the Horn", credits: 3 },
    { name: "Mathematics for Natural Sciences", credits: 3 },
    { name: "General Physics", credits: 3 },
    { name: "Communicative English Language Skills I", credits: 3 },
    { name: "Communicative English Language Skills II", credits: 3 },
    { name: "Inclusiveness", credits: 2 },
    { name: "Global Trends", credits: 2 },
    { name: "Statistics & Probability", credits: 3 },
    { name: "Economics", credits: 3 },
    { name: "Entrepreneurship", credits: 3 }
];
*/