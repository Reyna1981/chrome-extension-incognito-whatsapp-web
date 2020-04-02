var button = page.getElementsByClassName(".skipElement")

function checkButton() {
    if(button == null) {
        setTimeout(checkButton, 50);
    } else {
        button.click();
    }
}

checkButton();