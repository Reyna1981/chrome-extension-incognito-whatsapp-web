(function() {
	const names = document.querySelectorAll('._3NFp9');
	const emojis = document.querySelectorAll('._3NFp9 .wa');

	if(document.querySelector('._3NFp9').style.display == "") {
		// Hide name and chat previews
		Array.from(names).forEach((name) => {
			return name.style.display = "none";
			});
		Array.from(emojis).forEach((emoji) => {
			return emoji.style.display = "none";
			});
	} else{
		// Show name and chat previews
		Array.from(names).forEach((name) => {
			return name.style.display = "";
			});
		Array.from(emojis).forEach((emoji) => {
			return emoji.style.display = "";
			});
	}
})();