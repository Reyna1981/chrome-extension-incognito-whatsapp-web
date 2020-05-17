(function() {
	const names = document.querySelectorAll('._3NFp9');
	const emojis = document.querySelectorAll('._3NFp9 .wa');

	if(document.querySelector('._3NFp9').style.visibility == "") {
		// Hide name and chat previews
		Array.from(names).forEach((name) => {
			return name.style.visibility = "hidden";
			});
		Array.from(emojis).forEach((emoji) => {
			return emoji.style.visibility = "hidden";
			});
	} else{
		// Show name and chat previews
		Array.from(names).forEach((name) => {
			return name.style.visibility = "";
			});
		Array.from(emojis).forEach((emoji) => {
			return emoji.style.visibility = "";
			});
	}
})();