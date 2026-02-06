// Hide Until CSS Loads

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.visibility = 'visible';
});


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



// Youth Waitlist Form

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


	// Validate Youth Waitlist Form

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

		const interests = document.querySelectorAll('input[name="classInterest[]"]:checked');

		if (interests.length === 0) {
			alert("Please select at least one class option.");
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
	{ day: 'Monday', time: '3:10 PM - 3:50 PM', title: 'Kids (Ages 7-9) Group B', capacity: 'forming', color: '#dfff00', textColor: '#505050' },
	{ day: 'Monday', time: '5:00 PM - 6:00 PM', title: 'Ladies No-Gi', capacity: 'available', color: '#fc65dc' },
	{ day: 'Monday', time: '6:00 PM - 7:15 PM', title: 'Advanced No-Gi', capacity: 'available', color: '#303030' },
	{ day: 'Monday', time: '7:20 PM - 8:20 PM', title: 'Beginner No-Gi', capacity: 'available', color: 'blue' },

	// Tuesday	
	{ day: 'Tuesday', time: '4:00 PM - 4:45 PM', title: 'Kids (Ages 7-9) Group A', capacity: 'full', color: '#1ae195', textColor: '#505050'},
	{ day: 'Tuesday', time: '5:00 PM - 6:00 PM', title: 'Kids (Ages 10-12)', capacity: 'full', color: '#00d5ff', textColor: '#505050' },
	{ day: 'Tuesday', time: '6:00 PM - 7:15 PM', title: 'Advanced No-Gi', capacity: 'available', color: '#303030' },

	// Wednesday
	{ day: 'Wednesday', time: '3:10 PM - 3:50 PM', title: 'Kids (Ages 7-9) Group B', capacity: 'forming', color: '#dfff00', textColor: '#505050' },
	{ day: 'Wednesday', time: '5:00 PM - 6:00 PM', title: 'Teens (Ages 13-16)', capacity: 'available', color: 'lime', textColor: '#505059' },
	{ day: 'Wednesday', time: '6:00 PM - 7:15 PM', title: 'Advanced No-Gi', capacity: 'available', color: '#303030' },
	{ day: 'Wednesday', time: '7:20 PM - 8:20 PM', title: 'Beginner No-Gi', capacity: 'available', color: 'blue' },

	// Thursday
	{ day: 'Thursday', time: '4:00 PM - 4:45 PM', title: 'Kids (Ages 7-9) Group A', capacity: 'full', color: '#1ae195', textColor: '#505050' },
	{ day: 'Thursday', time: '5:00 PM - 6:00 PM', title: 'Kids (Ages 10-12)', capacity: 'full', color: '#00d5ff', textColor: '#505050' },
	{ day: 'Thursday', time: '6:00 PM - 7:15 PM', title: 'Advanced No-Gi', capacity: 'available', color: '#303030' },
	{ day: 'Thursday', time: '7:20 PM - 8:20 PM', title: 'Ladies No-Gi', capacity: 'available', color: '#fc65dc' },

	// Friday
	{ day: 'Friday', time: '3:10 PM - 3:50 PM', title: 'Kids (Ages 7-9) Group B', capacity: 'forming', color: '#dfff00', textColor: '#505050' },
	{ day: 'Friday', time: '5:00 PM - 6:00 PM', title: 'Teens (Ages 13-16)', capacity: 'available', color: 'lime', textColor: '#505059' },
	{ day: 'Friday', time: '6:00 PM - 7:15 PM', title: 'Advanced No-Gi', capacity: 'available', color: '#303030' },
	{ day: 'Friday', time: '7:20 PM - 8:20 PM', title: 'Beginner No-Gi', capacity: 'available', color: 'blue' },

	// Saturday - Closed
	{ day: 'Saturday', time: '', title: 'Closed', capacity: 'closed' },

	// Sunday
	{ day: 'Sunday', time: '10:30 AM - 11:30 AM', title: 'Open Mat', capacity: 'available', color: '#8805fa' },
	{ day: 'Sunday', time: '12:00 PM - 12:45 PM', title: 'Kids (Ages 7-9) Group A', capacity: 'full', color: '#1ae195', textColor: '#505050' },
	{ day: 'Sunday', time: '1:00 PM - 2:00 PM', title: 'Kids (Ages 10-12)', capacity: 'full', color: '#00d5ff', textColor: '#505050' },
	{ day: 'Sunday', time: '2:00 PM - 3:00 PM', title: 'Teens (Ages 13-16)', capacity: 'available', color: 'lime', textColor: '#505059' },
	{ day: 'Sunday', time: '3:00 PM - 4:00 PM', title: 'Ladies No-Gi', capacity: 'available', color: '#fc65dc' }
  
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
		//const startOfWeek = addDays(today, -today.getDay() + currentOffset * 7);
		const startOfWeek = addDays(today, currentOffset * 7);
		const container = document.getElementById('scheduleApp');
		container.innerHTML = '';
	
		// Pagination controls container
		const controls = document.createElement('div');
		controls.classList.add('controls'); 
	
		// Previous Week button
		const prevBtn = document.createElement('button');
		prevBtn.innerHTML = `<img src="assets/fonts/fontawesome-pro/svgs/regular/arrow-left.svg" class="nav-arrow" />`;
		prevBtn.onclick = () => changeWeek(-1);
	
		// Date range label (centered)
		const weekLabel = document.createElement('div');
		weekLabel.textContent = `${formatDateRange(startOfWeek)}`;
		weekLabel.classList.add('week-label'); 
	
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
					// Book class
					if (isInFuture && isWithin14Days) {
						const btn = document.createElement('a');
						btn.href = '#footer';
						btn.className = 'schedule-button button-book';
						btn.textContent = 'Book Free Trial';
						block.appendChild(btn);
					}

					// Booking not available yet
					else if (isInFuture && !isWithin14Days) {
						const msg = document.createElement('div');
						msg.className = 'no-booking-yet';
						msg.textContent = 'Booking not available yet';
						block.appendChild(msg);
					}
					
				} 

				// Form new class
				else if (c.capacity === 'forming') {
					const formingBtn = document.createElement('a');
					formingBtn.href = 'youthWaitlist.html';
					formingBtn.className = 'schedule-button forming-button';
					formingBtn.textContent = 'Opening Soon – Join';
					block.appendChild(formingBtn);
				}

				// Waitlist
				else {
					const waitlistBtn = document.createElement('a');
					waitlistBtn.href = 'youthWaitlist.html';
					waitlistBtn.className = 'schedule-button waitlist-button';
					waitlistBtn.textContent = 'Join Waitlist';
					block.appendChild(waitlistBtn);
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
  