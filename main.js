const cursor = document.querySelector(".cursor");
let timeout;

// CUSTOM CURSOR
if (cursor) {
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        cursor.style.display = "block";

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            cursor.style.display = "none";
        }, 1000);
    });

    document.addEventListener("mouseout", () => {
        cursor.style.display = "none";
    });
}
// Email
// const { CursorPage } = require("openai/pagination.js");

// // MENU TOGGLE
// const menuToggle = document.querySelector(".menuToggle");
// const header = document.querySelector("header");

// menuToggle.addEventListener("click", () => {
//     header.classList.toggle("active");
// });

// // CLOSE MENU WHEN CLICKING LINK (mobile)
// document.querySelectorAll(".nav a").forEach(link => {
//     link.addEventListener("click", () => {
//         header.classList.remove("active");
//     });
// });

// EMAILJS SETUP
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (!form || !status) {
    console.error("Contact form or status element not found.");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.innerText = "Sending...";
    status.style.color = "#fff";

    emailjs.sendForm(
      "service_yhzrf1n",     // replace this
      "template_jwm1zjb",    // replace this
      this,
      {
        publicKey: "5mzvgUo9gKPPNw5Qg" // replace this
      }
    )
    .then(() => {
      status.innerText = "✅ Message sent successfully!";
      status.style.color = "lightgreen";
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      status.innerText = "❌ Failed to send message. Check your EmailJS keys.";
      status.style.color = "red";
    });
  });
});




// SCROLL ACTIVE NAV
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header ul li");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(li => {
        li.classList.remove("active");

        const link = li.querySelector("a");
        if (link && link.getAttribute("href") === "#" + current) {
            li.classList.add("active");
        }
    });
});

// PROGRESS BAR ANIMATION
function animateBars(container) {
    const bars = container.querySelectorAll(".progress");

    bars.forEach(bar => {
        const value = bar.getAttribute("data-progress");
        bar.style.width = "0";

        setTimeout(() => {
            bar.style.width = value + "%";
        }, 100);

        const perc = bar.closest(".skill").querySelector(".perc");
        if (perc) {
            perc.textContent = ` ${value}%`;
        }
    });
}

// SKILL TAB SWITCH
function showContent(id) {
    const all = document.querySelectorAll(".content4");
    all.forEach(el => el.classList.remove("active"));

    const activeSection = document.getElementById(id);
    if (activeSection) {
        activeSection.classList.add("active");
        animateBars(activeSection);
    }
}

// DOM LOADED
document.addEventListener("DOMContentLoaded", () => {
    // Animate first active skill section
    const firstActive = document.querySelector(".content4.active");
    if (firstActive) {
        animateBars(firstActive);
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector(".menuToggle");
    const header = document.querySelector("header");

    if (menuToggle && header) {
        menuToggle.addEventListener("click", () => {
            header.classList.toggle("active");
        });
    }
});