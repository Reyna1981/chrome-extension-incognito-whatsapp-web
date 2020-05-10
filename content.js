const elements = document.querySelectorAll('._3j7s9');

// Hide chat previews
Array.from(elements).forEach((element) => {
      return element.style.display = "none";
  });

// Show chat previews
Array.from(elements).forEach((element) => {
    return element.style.display = "";
});

// Keep showing new message notification

const notifications = document.querySelectorAll('._15G96');
Array.from(notifications).forEach((notification) => {
    return notification.style.display = "";
});
