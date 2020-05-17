(function() {
	const elements = document.querySelectorAll('._3j7s9');

	if(document.querySelector('._3j7s9').style.display == "") {
		// Hide chat previews
		Array.from(elements).forEach((element) => {
		return element.style.display = "none";
		});
	} else(
		// Show chat previews
		Array.from(elements).forEach((element) => {
    	return element.style.display = "";
		})
	)	
})();

// // Keep showing new message notification

// const notifications = document.querySelectorAll('._15G96');
// Array.from(notifications).forEach((notification) => {
//     return notification.style.display = "";
// });
