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

	if(name.value === '' || email.value === '' || message.value === '') {
		alert("Please Fill Out Each Field.")
		return false;
	}

	if(email.value === 'info@salmonarmjiujitsu.ca') {
		alert("Please Enter Your Email Address.")
		return false;
	}

	else {
		return true;
    }
}

// Home Icon Disappear On Scoll

/*window.scroll(
	
	function disappear() {
		if (this.scrollTop() > 0) {
			document.getElementByClassName("icon").style.display = "none";
		}
		
		else {
			document.getElementByClassName("icon").style.display = "";
		}
}
);*/

window.addEventListener('scroll', function() {	

	const icon = document.querySelector(".icon");

	if (window.scrollY > 50) {
		icon.classList.add("disappear");
	}
	else {
		icon.classList.remove("disappear");
	}
   });
	

