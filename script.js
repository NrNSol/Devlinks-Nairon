document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("switch");

  // Function to enable dark mode
  function enableDarkMode() {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
  }

  // Function to disable dark mode
  function disableDarkMode() {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
  }

  // Check the theme in localStorage and apply it
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
      enableDarkMode();
  } else {
      disableDarkMode();
  }

  // Toggle the theme on button click
  toggleButton.addEventListener("click", () => {
      if (document.documentElement.classList.contains("dark")) {
          disableDarkMode();
      } else {
          enableDarkMode();
      }
  });
});
