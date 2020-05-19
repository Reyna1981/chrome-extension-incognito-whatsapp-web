(function() {
	const names = document.querySelectorAll('._3NFp9');
	const emojis = document.querySelectorAll('._3NFp9 .wa');

	if(document.querySelector('._3NFp9').style.opacity == "") {
		// Hide name and chat previews
		Array.from(names).forEach((name) => {
			return name.style.cssText = "opacity: 0; transition: .1s;";
			});
		Array.from(emojis).forEach((emoji) => {
			return emoji.style.opacity = "0";
			});
	} else{
		// Show name and chat previews
		Array.from(names).forEach((name) => {
			return name.style.cssText = "opacity: ; transition: .1s;";
			});
		Array.from(emojis).forEach((emoji) => {
			return emoji.style.opacity = "";
			});
	}
})();