// Registration Upload & Payment

const SHEETS_URL = "https://script.google.com/macros/s/AKfycbwnUYf-rUyWLS6Pfid8Ez0JNhpQ3tqJLvUpCqDRFT2bbtdqSosOj6eKKXuJnDAe5T4/exec";
const SQUARE_URL = "https://square.link/u/6dYq5Ews";

async function handleRegistrationPayment() {

    const form = document.getElementById("registrationForm");

    // HTML Validation
    if (!form.checkValidity()) {

        const firstInvalid = form.querySelector(":invalid");
    
        if (firstInvalid) {
            firstInvalid.focus();
    
            firstInvalid.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    
        if (typeof form.reportValidity === "function") {
            form.reportValidity();
        }
    
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
        classTime: document.querySelector('input[name="classTime"]:checked')?.value,
    };

    // Show loading spinner
    document.getElementById("loadingOverlay").classList.add("show");

    // Send to Google Sheets
    try {

        await fetch(SHEETS_URL, {
            method: "POST",
            body: JSON.stringify(payload)
        });

        window.location.href = SQUARE_URL;

    }
    catch (err) {
        document.getElementById("loadingOverlay").classList.remove("show");

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

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".help-toggle").forEach(btn => {
        btn.addEventListener("click", () => {
            const box = btn.closest(".help-box");
            box.classList.toggle("open");
        });
    });

});