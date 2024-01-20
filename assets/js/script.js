//Home
//Menu

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


//Contact Form Validation

function contactForm() {
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var message = document.getElementById('message');
    const valid = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;

	if(name.value === '' || email.value === '' || message.value === '') {
		alert("Please Fill Out Each Field.")
		return false;
	}

	if(email.value === 'info@salmonarmjiujitsu.ca') {
		alert("Please Enter Your Email Address.")
		return false;
	}

	else {
		//alert("You're Almost Done! Click OK To Proceed To The CAPTCHA.")
		return true;
    }
}