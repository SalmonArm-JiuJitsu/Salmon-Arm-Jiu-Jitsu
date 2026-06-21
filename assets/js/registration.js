// Registration Upload & Payment

const SHEETS_URL = "https://script.google.com/macros/s/AKfycbwfaxTS6d24E1jMLbyqESI7pgP4X1J2779EEwL9D5tpFqFVNdES3MJ8r9HWZZyWRZl9/exec";
const SQUARE_URL = "https://square.link/u/6dYq5Ews";

async function handleRegistrationPayment() {

    const form = document.getElementById("registrationForm");

    // HTML Validation
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Payload
    const payload = {
        parentFirstName: document.getElementById("parentFirstName").value,
        parentLastName: document.getElementById("parentLastName").value,
        parentEmail: document.getElementById("parentEmail").value,
        parentPhone: document.getElementById("parentPhone").value,
        kidFirstName: document.getElementById("kidFirstName").value,
        kidLastName: document.getElementById("kidLastName").value,
        kidDOB: document.getElementById("kidDOB").value,
    };

    // Send to Google Sheets
    try {

        await fetch(SHEETS_URL, {
            method: "POST",
            body: JSON.stringify(payload)
        });

        window.location.href = SQUARE_URL;

    }
    catch (err) {

        alert("There was a problem saving your registration. Please try again.");
        console.error(err);

    }
}

// Bind Button
document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("payButton");

    if (btn) {
        btn.addEventListener("click", handleRegistrationPayment);
    }

});