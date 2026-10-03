# Eric Armijos Calle — Personal Portfolio

A personal portfolio website built for Class Project 1 in CSI 345 (Web Software
Development) at Muhlenberg College. The site introduces who I am, my
education and skills, the projects I've worked on, and how to get in touch.

## Description

This is a 3-page personal portfolio:

- **Home / About** (`index.html`) — intro, bio, education, skills, experience, and leadership/honors.
- **Projects** (`projects.html`) — a closer look at CarLog and this website itself.
- **Contact** (`contact.html`) — contact info plus a message form with client-side validation.

The whole site is built from scratch with plain HTML, CSS, and JavaScript —
no frameworks, libraries, or page builders.

## Technologies Used

- **HTML5** — semantic structure (`header`, `nav`, `main`, `section`, `footer`)
- **CSS3** — external stylesheet, Flexbox layout, the CSS Box Model, selectors
  (type/class/ID/descendant/pseudo-class), and a single responsive media query
- **JavaScript (vanilla)** — DOM manipulation for the mobile nav toggle, an
  auto-updating footer year, and custom contact form validation

## Deployed Website Link

[https://ericarmijos.github.io/portfolio/](https://ericarmijos.github.io/portfolio/)

## How to Run the Website Locally

**Option 1 — VS Code Live Server (what we use in class)**

1. Open the `project1-portfolio` folder in VS Code.
2. Install the "Live Server" extension if you don't already have it.
3. Right-click `index.html` and choose **Open with Live Server**.
4. The site opens in your browser and reloads automatically when you save changes.

**Option 2 — Open directly in a browser**

1. Open the `project1-portfolio` folder in Finder.
2. Double-click `index.html` to open it in your default browser.
3. Navigate between pages using the nav bar at the top.

No build steps, installs, or server setup required — it's static HTML/CSS/JS.

## Challenges

- **Responsive navigation:** getting the navbar to collapse into a working
  hamburger menu on small screens (rather than just shrinking the text) took
  some trial and error with Flexbox, `position: absolute`, and a `.show`
  class toggled by JavaScript.
- **Form validation without a backend:** since the site is static, the
  contact form can't actually send an email. I used `event.preventDefault()`
  and a regex check to validate the fields client-side and show a success
  message, rather than pretending the form does something it can't.
- **CSS specificity:** my first pass at styling invalid form fields relied on
  `!important` to beat a more specific `:focus` rule. After going back over
  the specificity rules from class, I rewrote the selector to be equally
  specific instead, which is the more correct fix.
- **Keeping one stylesheet consistent across 3 pages:** reusing `style.css`
  and `main.js` everywhere meant being careful that JavaScript written for
  one page (like the contact form) doesn't break on pages that don't have
  those elements — solved with simple `if (element)` existence checks.

## Future Improvements

- Connect the contact form to a real email service (e.g., Formspree or
  EmailJS) so messages actually reach my inbox.
- Add real screenshots/GIFs of CarLog to the Projects page instead of icons.
- Add a dark mode toggle.
- Add more projects as I build them throughout the CS program.
- Improve accessibility further with a "skip to content" link and more
  thorough keyboard-navigation testing.

## AI Usage

- **Tool used:** Claude (Claude Code, Anthropic).
- **What I used it for:** Generating the initial HTML structure, CSS styling,
  and JavaScript (mobile nav toggle, footer year, contact form validation)
  for all three pages, based on my resume content and the HTML/CSS/JS
  concepts covered in our course slides (Box Model, Flexbox, selectors and
  specificity, DOM manipulation).
- **Did I modify it:** Yes. I reviewed every section against my resume for
  accuracy, adjusted the color palette and section layout to match what was
  covered in class, and fixed a CSS specificity issue (removing an
  unnecessary `!important`) after checking it against the specificity rules
  from the CSS Essentials lecture.
- **How I checked/tested it:** I ran the site locally with Live Server and
  manually tested it in the browser — clicking through all nav links on
  desktop and mobile widths, opening/closing the mobile menu, submitting the
  contact form both with missing/invalid fields (to confirm error messages
  appear) and with valid input (to confirm the success message and form
  reset work), and checking the browser console for errors.

## Author

Eric Armijos Calle
[github.com/ericarmijos](https://github.com/ericarmijos) ·
[linkedin.com/in/ericarmijos](https://linkedin.com/in/ericarmijos) ·
ericarmijos1@gmail.com
