//your JS code here. If required.
function updateTimer() {
			// Create a new Date object to get the current date and time
			const currentDate = new Date();

			// Format the date and time as a string
			const dateString = currentDate.toLocaleDateString();
			const timeString = currentDate.toLocaleTimeString();

			// Set the timer element's text content to the formatted string
			const timerElement = document.getElementById("timer");
			timerElement.textContent = `${dateString}, ${timeString}`;
		}

		// Call the updateTimer function once to initialize the timer display
		updateTimer();

		// Use the setInterval function to call the updateTimer function once per second
		setInterval(updateTimer, 1000);