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



// Schedule

const weeklySchedule = [
	// Monday
	{ day: 'Monday', time: '5:00 PM - 6:00 PM', title: 'Ladies No-Gi', capacity: 'available', color: '#fc65dc' },
	{ day: 'Monday', time: '6:00 PM - 7:15 PM', title: 'Adult No-Gi', capacity: 'available', color: '#303030' },

	// Tuesday	
	{ day: 'Tuesday', time: '3:15 PM - 3:45 PM', title: 'Kids (Ages 5-6)', capacity: 'full', color: '#02de91', textColor: '#505050' },
	{ day: 'Tuesday', time: '4:00 PM - 4:45 PM', title: 'Kids (Ages 7-9) Group A', capacity: 'available', color: '#f7f757', textColor: '#505050'},
	{ day: 'Tuesday', time: '5:00 PM - 6:00 PM', title: 'Kids (Ages 10-12)', capacity: 'available', color: '#00d5ff', textColor: '#505050' },
	{ day: 'Tuesday', time: '6:00 PM - 7:15 PM', title: 'Adult No-Gi', capacity: 'available', color: '#303030' },

	// Wednesday
	{ day: 'Wednesday', time: '4:00 PM - 4:45 PM', title: 'Kids (Ages 7-9) Group B', capacity: 'available', color: 'lime', textColor: '#505050'},
	{ day: 'Wednesday', time: '5:00 PM - 6:00 PM', title: 'Teens (Ages 13-16)', capacity: 'available', color: '#de6c02' },
	{ day: 'Wednesday', time: '6:00 PM - 7:15 PM', title: 'Adult No-Gi', capacity: 'available', color: '#303030' },

	// Thursday
	{ day: 'Thursday', time: '3:15 PM - 3:45 PM', title: 'Kids (Ages 5-6)', capacity: 'full', color: '#02de91', textColor: '#505050' },
	{ day: 'Thursday', time: '4:00 PM - 4:45 PM', title: 'Kids (Ages 7-9) Group A', capacity: 'available', color: '#f7f757', textColor: '#505050'},
	{ day: 'Thursday', time: '5:00 PM - 6:00 PM', title: 'Kids (Ages 10-12)', capacity: 'available', color: '#00d5ff', textColor: '#505050' },
	{ day: 'Thursday', time: '6:00 PM - 7:15 PM', title: 'Adult No-Gi', capacity: 'available', color: '#303030' },
	{ day: 'Thursday', time: '7:15 PM - 8:15 PM', title: 'Ladies No-Gi', capacity: 'available', color: '#fc65dc' },

	// Friday
	{ day: 'Friday', time: '4:00 PM - 4:45 PM', title: 'Kids (Ages 7-9) Group B', capacity: 'available', color: 'lime', textColor: '#505050'},
	{ day: 'Friday', time: '5:00 PM - 6:00 PM', title: 'Teens (Ages 13-16)', capacity: 'available', color: '#de6c02' },
	{ day: 'Friday', time: '6:00 PM - 7:15 PM', title: 'Adult No-Gi', capacity: 'available', color: '#303030' },

	// Saturday - Closed
	{ day: 'Saturday', time: '', title: 'Closed', capacity: 'closed' },

	// Sunday
	{ day: 'Sunday', time: '10:00 AM - 11:00 AM', title: 'Open Mat', capacity: 'available', color: '#8805fa' },
	{ day: 'Sunday', time: '12:00 PM - 12:45 PM', title: 'Kids (Ages 7-9) Groups A & B', capacity: 'available', color: 'linear-gradient(135deg, #f7f757 30%, lime', textColor: '#505050'},
	{ day: 'Sunday', time: '1:00 PM - 2:00 PM', title: 'Kids (Ages 10-12)', capacity: 'available', color: '#00d5ff', textColor: '#505050' },
	{ day: 'Sunday', time: '2:00 PM - 3:00 PM', title: 'Teens (Ages 13-16)', capacity: 'available', color: '#de6c02' }
  
];

  
	let currentOffset = 0; // 0 = this week

	function addDays(date, days) {
		const d = new Date(date);
		d.setDate(d.getDate() + days);
		return d;
	}
  
	function formatDayName(date) {
		return date.toLocaleDateString('en-US', { weekday: 'long' });
	}
  
	function formatDateRange(startDate) {
		const endDate = addDays(startDate, 6);
		const options = { month: 'short', day: 'numeric' };
		return `${startDate.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}`;
	}
  
	function renderWeek() {
		const today = new Date();
		const startOfWeek = addDays(today, -today.getDay() + currentOffset * 7);
		const container = document.getElementById('scheduleApp');
		container.innerHTML = '';
	
		// Pagination controls container
		const controls = document.createElement('div');
		controls.style.display = 'flex';
		controls.style.alignItems = 'center';
		controls.style.justifyContent = 'space-between';
		controls.style.marginBottom = '15px';
	
		// Previous Week button
		const prevBtn = document.createElement('button');
		prevBtn.innerHTML = `<img src="assets/fonts/fontawesome-pro/svgs/regular/arrow-left.svg" class="nav-arrow" />`;
		prevBtn.onclick = () => changeWeek(-1);
	
		// Date range label (centered)
		const weekLabel = document.createElement('div');
		weekLabel.textContent = `${formatDateRange(startOfWeek)}`;
		weekLabel.style.flexGrow = '1';
		weekLabel.style.textAlign = 'center';
		weekLabel.style.fontWeight = 'bold';
		weekLabel.style.fontSize = '13.2pt';
	
		// Next Week button
		const nextBtn = document.createElement('button');
		nextBtn.innerHTML = `<img src="assets/fonts/fontawesome-pro/svgs/regular/arrow-right.svg" class="nav-arrow" />`;
		nextBtn.onclick = () => changeWeek(1);
	
		// Append controls
		controls.appendChild(prevBtn);
		controls.appendChild(weekLabel);
		controls.appendChild(nextBtn);
		container.appendChild(controls);
	
		// Schedule grid
		const row = document.createElement('div');
		row.className = 'week-row';

  
	for (let i = 0; i < 7; i++) {
		const date = addDays(startOfWeek, i);
		const dayName = formatDayName(date);

		const col = document.createElement('div');
		col.className = 'day-column';
		col.innerHTML = `<h3>${dayName}</h3>`;

		const dayClasses = weeklySchedule.filter(c => c.day === dayName);

		if (dayClasses.length === 0) {
			col.innerHTML += '<p>No classes</p>';
		} 
	  
	  	else {
			dayClasses.forEach(c => {
				const block = document.createElement('div');
				block.className = 'class-block';
			
				// Special styling for "Closed" Saturday
				if (c.capacity === 'closed') {
					block.classList.add('closed-block');
					block.textContent = 'Closed';
					col.appendChild(block);
					return; // skip rest of loop
				}
			
				block.style.background = c.color || 'green';
				block.style.color = c.textColor || '#fff';
			
				const timeEl = document.createElement('div');
				timeEl.className = 'class-time';
				timeEl.textContent = c.time;
				block.appendChild(timeEl);
			
				const titleEl = document.createElement('div');
				titleEl.className = 'class-title';
				titleEl.textContent = c.title;
				block.appendChild(titleEl);
			
				const classDateTime = new Date(date); // use current loop's date
				const [startTime] = c.time.split(' - '); // e.g., "6:00 PM"

				// Parse time from string
				const [time, period] = startTime.trim().split(' ');
				let [hours, minutes] = time.split(':').map(Number);
				if (period === 'PM' && hours !== 12) hours += 12;
				if (period === 'AM' && hours === 12) hours = 0;

				classDateTime.setHours(hours, minutes, 0, 0);

				const now = new Date();
				const twoWeeksFromNow = new Date();
				twoWeeksFromNow.setDate(now.getDate() + 14);

				const isInFuture = classDateTime > now;
				const isWithin14Days = classDateTime <= twoWeeksFromNow;

				if (c.capacity === 'available') {
					if (isInFuture && isWithin14Days) {
						const btn = document.createElement('a');
						btn.href = '#footer';
						btn.className = 'button-book';
						btn.textContent = 'Book Free Trial';
						block.appendChild(btn);
					} else if (isInFuture && !isWithin14Days) {
						const msg = document.createElement('div');
						msg.className = 'full-label';
						msg.textContent = 'Booking not available yet';
						block.appendChild(msg);
					}
				} 
				
				else {
					const fullLabel = document.createElement('div');
					fullLabel.className = 'full-label';
					fullLabel.textContent = 'FULL';
					block.appendChild(fullLabel);
				}
			
				col.appendChild(block);
			});
		}
  
		row.appendChild(col);
	}
  
	container.appendChild(row);
	}
  
function changeWeek(offsetChange) {
	currentOffset += offsetChange;
	renderWeek();
}
  
document.addEventListener('DOMContentLoaded', renderWeek);
  