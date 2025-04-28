/*document.addEventListener("DOMContentLoaded", () => {
    const isDark = localStorage.getItem("dark-mode") === "true";
    if (isDark) {
      document.body.classList.add("dark-mode");
    }
  
    const toggleBtn = document.getElementById("dark-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
      });
    }
  });
*/


document.addEventListener("DOMContentLoaded", () => {
  const isDark = localStorage.getItem("dark-mode") === "true";
  if (isDark) {
    document.body.classList.add("dark-mode");
    document.getElementById("dark-toggle-input").checked = true;
  }
  else {
    document.getElementById("dark-toggle-input").checked = false;
  }

  const darkToggleCheckBox = document.getElementById("dark-toggle-input");

  darkToggleCheckBox.addEventListener("change", function () {
      document.body.classList.toggle("dark-mode", this.checked);
      localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
  });
});


  