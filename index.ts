const toggleSkillsButton = document.getElementById('toggleSkills') as HTMLButtonElement;
const skillsList = document.getElementById('skillsList') as HTMLElement;

         // Function to toggle the visibility of the skills list
         function toggleSkills() {
             if (skillsList.style.display === 'none') {
                 skillsList.style.display = 'block'; // Show the list
                 toggleSkillsButton.textContent = 'Hide Skills'; // Change button text
             } else {
                 skillsList.style.display = 'none'; // Hide the list
                 toggleSkillsButton.textContent = 'Show Skills'; // Change button text
             }
         }
         // Attach the click event listener to the button
       toggleSkillsButton.addEventListener('click', toggleSkills);