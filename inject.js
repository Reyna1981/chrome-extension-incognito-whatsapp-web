(function() {
	const names = document.querySelectorAll('._3NFp9');

	if(document.querySelector('._3NFp9').style.visibility == "") {
		// Hide name and chat previews
		Array.from(names).forEach((name) => {
			return name.style.visibility = "hidden";
			});
	} else{
		// Show name and chat previews
		Array.from(names).forEach((name) => {
			return name.style.visibility = "";
			});
	}
})();