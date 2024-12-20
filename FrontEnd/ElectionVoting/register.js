let isVoter = true; // current role: true for voter, false for candidate

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    submitForm();
});

function switchRole() {
    isVoter = !isVoter;
    const formTitle = document.getElementById('formTitle');
    const specificFields = document.getElementById('specificFields');
    const changeRoleText = document.querySelector('.change-role-text'); // Change the role text here

    if (isVoter) {
        formTitle.innerText = "Voter Registration";
        changeRoleText.innerText = "Register as Candidate";
        specificFields.innerHTML = `
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required>

            <label for="address">Address:</label>
            <input type="text" id="address" name="address" required>

            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
        `;
    } else {
        formTitle.innerText = "Candidate Registration";
        changeRoleText.innerText = "Register as Voter";
        specificFields.innerHTML = `
            <label for="party">Party:</label>
            <input type="text" id="party" name="party" required>

            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required>

            <label for="education">Education:</label>
            <input type="text" id="education" name="education" required>

            <label for="criminalRecords">Criminal Records:</label>
            <select id="criminalRecords" name="criminalRecords" required>
                <option value="false">No</option>
                <option value="true">Yes</option>
            </select>

            <label for="status">Status:</label>
            <select id="status" name="status" required>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
            </select>
        `;
    }
}

function submitForm() {
    const formData = new FormData(document.getElementById('registrationForm'));
    
    let payload = {};
    formData.forEach((value, key) => {
        payload[key] = value;
    });
    console.log(payload);
    let url = "mongodb://localhost:27017/electionDB"
    url += isVoter ? '/voter-register' : '/candidate-register';
    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch(url, fetchOptions)
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
}

window.onload = switchRole;