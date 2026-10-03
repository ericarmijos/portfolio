// main.js
// Shared script loaded by every page (index.html, projects.html, contact.html).
// Each block checks that its elements exist before using them, since not
// every page has every element (e.g. only contact.html has a form).

// ----- Mobile navigation toggle -----
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        // Toggle the "show" class to open/close the menu on small screens
        navLinks.classList.toggle("show");

        // Keep the aria-expanded attribute in sync for accessibility
        const isOpen = navLinks.classList.contains("show");
        navToggle.setAttribute("aria-expanded", isOpen);
    });
}

// ----- Auto-updating footer year -----
// Reads the year from the browser instead of hardcoding it in the HTML
const yearSpan = document.getElementById("year");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// ----- Contact form validation (contact.html only) -----
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const formSuccess = document.getElementById("form-success");

    // Basic "something@something.something" check - good enough for a
    // client-side sanity check, the browser's type="email" already helps too
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    contactForm.addEventListener("submit", (event) => {
        // Stop the form from doing a full page reload so we can validate first
        event.preventDefault();

        let isValid = true;

        // Clear any error state left over from the last attempt
        [nameInput, emailInput, messageInput].forEach((input) => {
            input.classList.remove("input-error");
        });
        formSuccess.textContent = "";

        if (nameInput.value.trim() === "") {
            document.getElementById("name-error").textContent = "Please enter your name.";
            nameInput.classList.add("input-error");
            isValid = false;
        } else {
            document.getElementById("name-error").textContent = "";
        }

        if (!emailPattern.test(emailInput.value.trim())) {
            document.getElementById("email-error").textContent = "Please enter a valid email address.";
            emailInput.classList.add("input-error");
            isValid = false;
        } else {
            document.getElementById("email-error").textContent = "";
        }

        if (messageInput.value.trim() === "") {
            document.getElementById("message-error").textContent = "Please write a short message.";
            messageInput.classList.add("input-error");
            isValid = false;
        } else {
            document.getElementById("message-error").textContent = "";
        }

        // This site is static (no backend), so a successful check just
        // confirms the form works and resets it rather than sending an email
        if (isValid) {
            formSuccess.textContent = "Thanks! Your message has been received.";
            contactForm.reset();
        }
    });
}
