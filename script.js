//your JS code here. If required.
        // Get form elements
        const ageInput = document.getElementById('age');
        const nameInput = document.getElementById('name');
        const form = document.getElementById('ageForm');

        // Event listener for form submission
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            // Get user inputs
            const age = parseInt(ageInput.value);
            const name = nameInput.value;

            // Create a promise
            const agePromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (age >= 18) {
                        resolve(name);
                    } else {
                        reject(name);
                    }
                }, 4000); // Resolve/reject after 4 seconds
            });

            // Handle promise resolution/rejection
            agePromise
                .then((resolvedName) => {
                    alert(`Welcome, ${resolvedName}. You can vote.`);
                })
                .catch((rejectedName) => {
                    alert(`Oh sorry, ${rejectedName}. You aren't old enough.`);
                });
        });