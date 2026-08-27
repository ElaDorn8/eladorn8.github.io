 // Store the correct answers
        let problems = [];
function toggleNumberInput() {
            const choice = document.querySelector('input[name="numberChoice"]:checked').value;
            const firstNumberInput = document.getElementById("firstNumber");
            if (choice === "random") {
                firstNumberInput.style.display = 'none';
                firstNumberInput.value = "";
            } else {
                firstNumberInput.style.display = "block";
            }
        }
        function createTest() {
           
            const howMany = Number(document.getElementById("numberOfProblems").value);
            //check if first number is random or user input
            const choice = document.querySelector('input[name="numberChoice"]:checked').value;
            const firstNumberInput = document.getElementById("firstNumber");

             // Make sure a number was entered if using specified mode
            if (choice === "specified" && firstNumberInput.value === "") {
                alert("Please enter a first number.");
                return;
            }
             // Get specified first number
            const specifiedNumber = Number(firstNumberInput.value);               
            
            // Clear old problems
            problems = [];

            const testDiv = document.getElementById("test");
            testDiv.innerHTML = "";
            document.getElementById("result").innerHTML = "";

            // Create the specified number of problems
            for (let i = 0; i < howMany; i++) {
           
            let firstNumber;   
            let secondNumber;

          
             // Generate first number
        if (choice === "random") {

            firstNumber =
                Math.floor(Math.random() * 10) + 1;

        } else {

            firstNumber = specifiedNumber;
        }


            do {
                secondNumber = Math.floor(Math.random() * 10) + 1;
            } while (
                i > 0 && secondNumber === problems[i - 1].second
            );

             // Calculate the correct answer
             const answer = firstNumber + secondNumber;
             // Save the problem
             problems.push({
                            first: firstNumber,
                            second: secondNumber,
                            answer: answer
                            });

            // Create the HTML for the problem
            testDiv.innerHTML += `
                                 <div class="problem">
                                     ${firstNumber} + ${secondNumber} =
                                     <input type="number" class="answer" data-question="${i}" />
                                </div>
                                `;
            }
            document.getElementById("result").innerHTML = "";
        }

        function gradeTest() {
            // Get all answer input boxes
            const answerInputs =document.querySelectorAll(".answer");
            let score = 0;           

            // Check each answer
            answerInputs.forEach((input, index) => {
                // Convert user's answer to a number
                const userAnswer = Number(input.value);
                // Compare with the correct answer
                if (userAnswer === problems[index].answer) {
                    score++;
                    input.style.backgroundColor = "#c8f7c5";
                } else {
                    input.style.backgroundColor = "#f7c5c5";
                }
            });

            let grade = 100 / problems.length * score;
            // Display score
            if(grade >= 80){
               document.getElementById("result").style.color = "green";
            }else{
                document.getElementById("result").style.color = "red";
            }
            document.getElementById("result").innerHTML =
                `You scored ${score} out of ${problems.length} and your grade is ${grade.toFixed()}%.`;
        }

        function resetTest() {
    // Clear the first number
    document.getElementById("firstNumber").value = "";
    // Clear all generated problems
    document.getElementById("test").innerHTML = "";
    // Clear the result/score
    document.getElementById("result").innerHTML = "";
    // Clear the number of problems input
    document.getElementById("numberOfProblems").value = "";
    // Clear the stored problems
    problems = [];
}




