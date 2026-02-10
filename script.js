// Get elements
// Project One
const openBtn1 = document.getElementById("openProjectOne");
const popup1 = document.getElementById("projectOnePopup");
const closeBtn1 = document.getElementById("closePopupOne");

if (openBtn1 && popup1 && closeBtn1) {
  openBtn1.addEventListener("click", () => {
    popup1.style.display = "flex";
  });

  closeBtn1.addEventListener("click", () => {
    popup1.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === popup1) {
      popup1.style.display = "none";
    }
  });
}

// Project Two
const openBtn2 = document.getElementById("openProjectTwo");
const popup2 = document.getElementById("projectTwoPopup");
const closeBtn2 = document.getElementById("closePopupTwo");

if (openBtn2 && popup2 && closeBtn2) {
  openBtn2.addEventListener("click", () => {
    popup2.style.display = "flex";
  });

  closeBtn2.addEventListener("click", () => {
    popup2.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === popup2) {
      popup2.style.display = "none";
    }
  });
}

// Project Three
const openBtn3 = document.getElementById("openProjectThree");
const popup3= document.getElementById("projectThreePopup");
const closeBtn3 = document.getElementById("closePopupThree");

if (openBtn3 && popup3 && closeBtn3) {
  openBtn3.addEventListener("click", () => {
    popup3.style.display = "flex";
  });

  closeBtn3.addEventListener("click", () => {
    popup3.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === popup3) {
      popup3.style.display = "none";
    }
  });
}

// Feedback Form Handling
document.addEventListener("DOMContentLoaded", () => {
  const feedbackForm = document.getElementById("feedbackForm");
  const successMessage = document.getElementById("feedbackSuccess");
  const errorMessage = document.getElementById("feedbackError");

  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Hide previous messages
      successMessage.style.display = "none";
      errorMessage.style.display = "none";

      // Get form values
      const name = document.getElementById("feedbackName").value.trim();
      const email = document.getElementById("feedbackEmail").value.trim();
      const rating = document.getElementById("feedbackRating").value;
      const message = document.getElementById("feedbackMessage").value.trim();

      // Validate required fields
      if (!rating || !message) {
        errorMessage.style.display = "block";
        setTimeout(() => {
          errorMessage.style.display = "none";
        }, 3000);
        return;
      }

      // Simulate form submission (in a real app, this would send to a server)
      console.log("Feedback submitted:", {
        name: name || "Anonymous",
        email: email || "Not provided",
        rating,
        message,
        timestamp: new Date().toISOString()
      });

      // Show success message
      successMessage.style.display = "block";
      
      // Reset form
      feedbackForm.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);

      // Scroll to success message
      successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
});