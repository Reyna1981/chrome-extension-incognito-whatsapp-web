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