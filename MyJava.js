
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || message === "") {
      alert("Please fill out both your name and message.");
      e.preventDefault(); 
    } else {
      alert("Thank you! Your message has been sent.");
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const listItems = document.querySelectorAll("#serviceList li");

  input.addEventListener("keyup", () => {
    const filter = input.value.toLowerCase();
    listItems.forEach(item => {
      item.style.display = item.textContent.toLowerCase().includes(filter) ? "list-item" : "none";
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");

  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });


  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const body = header.nextElementSibling;
      body.style.display = body.style.display === "block" ? "none" : "block";
    });
  });
});