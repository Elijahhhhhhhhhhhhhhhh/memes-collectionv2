import wixStorage from "@wix/site-storage";

$w.onReady(function () {
    let isDarkMode = wixStorage.local.getItem("darkMode") === "true";

    function applyTheme() {
        if (isDarkMode) {
            // Dark mode styles
            $w("#box1").style.backgroundColor = "#222";  // Background container
            $w("#text1").style.color = "#fff";  // Text color
            $w("#themeToggle").label = "Light Mode";  // Button text
        } else {
            // Light mode styles
            $w("#box1").style.backgroundColor = "#fff";  
            $w("#text1").style.color = "#000";  
            $w("#themeToggle").label = "Dark Mode";
        }
    }

    // Apply theme on page load
    applyTheme();

    // Toggle button click event
    $w("#themeToggle").onClick(() => {
        isDarkMode = !isDarkMode;  // Toggle mode
        wixStorage.local.setItem("darkMode", isDarkMode.toString());  // Save preference
        applyTheme();  // Apply changes
    });
});