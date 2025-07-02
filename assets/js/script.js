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


// Reg Form Validation

function registrationForm() {
	const parentFirstName = document.getElementById('parentFirstName');
    const parentLastName = document.getElementById('parentLastName');
	const parentEmail = document.getElementById('parentEmail');
	const parentPhone = document.getElementById('parentPhone');

	if(parentFirstName.value === '' || parentLastName.value === '' || parentEmail.value === '' || parentPhone.value === '') {
		alert("Please Fill Out Each Field.")
		return false;
	}

	else {
		return true;
    }
}




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