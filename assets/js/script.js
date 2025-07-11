// Menu

const burger = document.querySelector(".burger");
const Menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    Menu.classList.toggle("active");
})

document.querySelectorAll(".menu-link").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active");
    Menu.classList.remove("active");
}))

document.querySelector(".close").addEventListener("click", () => {
    burger.classList.remove("active");
    Menu.classList.remove("active");
})

document.querySelector(".contact-button").addEventListener("click", () => {
    burger.classList.remove("active");
    Menu.classList.remove("active");
})



// Contact Form Validation

function contactForm() {
	const name = document.getElementById('nameInput');
	const email = document.getElementById('emailInput');
	const message = document.getElementById('messageTextArea');

	if(name.value === '' || email.value === '' || message.value === '') {
		alert("Please Fill Out Each Field.")
		return false;
	}

	if(email.value === 'info@salmonarmjiujitsu.ca') {
		alert("Please Enter Your Email Address.")
		return false;
	}

	if(message.length < 5) {
		alert("Please enter a message.")
		return false;
	}

	else {
		return true;
    }
}


// Register Child Form

document.addEventListener("DOMContentLoaded", function () {
    const addChildBtn = document.getElementById("addChildBtn");
    const removeChildBtn = document.getElementById("removeChildBtn");
    const childrenContainer = document.getElementById("childrenContainer");

    let childCount = 1;

    addChildBtn.addEventListener("click", () => {
        childCount++;

        const childSection = document.createElement("div");
        childSection.classList.add("child-section");

        childSection.innerHTML = `
            <h2 style = "margin-top: 90px;">Child ${childCount}</h2>
            <div class = "field-left">
                <input type = "text" id = "child${childCount}FirstName" name = "child${childCount}FirstName" placeholder = "First Name" required>
            </div>

            <div class = "field-right">
                <input type = "text" id="child${childCount}LastName" name = "child${childCount}LastName" placeholder = "Last Name" required>
            </div>

            <div class = "field">
                <label for = "child${childCount}DOB">Birth Date</label>
                <input type = "date" id = "child${childCount}DOB" name = "child${childCount}DOB" required>
            </div>
        `;

        childrenContainer.appendChild(childSection);

        // Show "Remove" button if more than one child
        if (childCount > 1) {
            removeChildBtn.style.display = "inline-block";
        }
    });

    removeChildBtn.addEventListener("click", () => {
        if (childCount > 1) {
            const lastChild = childrenContainer.querySelector(".child-section:last-of-type");
            if (lastChild) {
                childrenContainer.removeChild(lastChild);
                childCount--;
            }
        }

        // Hide button if only one child remains
        if (childCount === 1) {
            removeChildBtn.style.display = "none";
        }
    });
});


	// Validate Child Registration Form

	function validateRegistrationForm() {
		const parentPhone = document.getElementById('parentPhone');

		if (parentPhone.value.length !== 10) {
			alert("Please enter a 10-digit phone number.")
			return false;
		}

		if (!/^\d+$/.test(parentPhone.value)) {
			alert("Please include only numbers.")
			return false;
		}

		const fakeNumbers = ['1234567890, 0123456789, 1231231231', '1231231232', '1231231233, 1231231234, 1231231235, 1231231236, 1231231237, 1231231238, 1231231239, 1231231230'];

		if (fakeNumbers.includes(parentPhone.value)) {
			alert("Please enter a real phone number.");
			return false;
		}


		else {
			return true;
		}
	}


// Submit to Netlify	

document.getElementById('registrationForm').addEventListener('submit', async function (e) {
	e.preventDefault();
	
	const form = e.target;
	const formData = new FormData(form);
	const data = Object.fromEntries(formData.entries());
	
	const response = await fetch('/.netlify/functions/submit', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	});
	
	const result = await response.json();
	alert(result.message);
	form.reset();
	});



// Home Icon Disappear On Scoll

window.addEventListener('scroll', function() {	

	const icon = document.querySelector(".icon");

	if (window.scrollY > 60) {
		icon.classList.add("disappear");
	}
	else {
		icon.classList.remove("disappear");
	}
   });
	


// Gallery 

	// On Click

	function openViewer() { 
		document.querySelector(".viewer").style.display = "flex";
	}

	function closeViewer() {
		document.querySelector(".viewer").style.display = "none";
	}

	function scrollImages(n) {
		viewImage(imageIndex = imageIndex + n);
	}


	// Viewer

	var image = document.querySelectorAll(".view-image");

	function currentImage(n) {
		viewImage(imageIndex = n);
	}

	function viewImage(n) {
		if (n > image.length) {
			imageIndex = 1;
		}

		if (n < 1) {
			imageIndex = image.length;
		}

		for (k = 0; k < image.length; k++) {
			image[k].style.display = "none";
		}
		
		image[imageIndex - 1].style.display = "block";
		innerHTML = [imageIndex - 1];
	}