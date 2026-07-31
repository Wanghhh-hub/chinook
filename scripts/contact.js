const submitButton = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    contactPage.innerHTML = "<p>Thank you for your message!</p>";
    contactPage.style.fontSize = "24px";
});
