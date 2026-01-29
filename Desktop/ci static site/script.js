// Deployment timestamp
document.getElementById("deploy-time").innerText =
  "Last Deployed: " + new Date().toLocaleString();

// Build status simulation
document.getElementById("build-status").innerText =
  "Build Status: ✅ Success";

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}
