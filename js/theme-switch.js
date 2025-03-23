theme-switch.js
//function toggleTheme() {
//    document.body.classList.toggle('light-theme');  // Toggle the light theme class
//
//    // Get all theme icons
//    const icons = document.querySelectorAll('img[aria-label="Toggle Theme"]');
//    
//    // Set the icon source to the light mode icon
//    icons.forEach(icon => {
//        icon.src = './images/bulb_white.png'; // Change to the desired icon
//    });
//}

//  Theme Switcher with non-functional Icon Switching
<script>
    function toggleTheme() {
        // Toggle the light-theme class
        document.body.classList.toggle('light-theme'); 
        // Check if light-theme is present
        const isDark = document.body.classList.contains('light-mode'); 
        const navIcon = document.getElementById('theme-icon-nav');
        const footerIcon = document.getElementById('theme-icon-footer');
    
        // relative links href="./"  
        if (navIcon) {
            navIcon.src = isDark ? './images/bulb_black.png' : './images/bulb_white.png';
            navIcon.alt = isDark ? 'Light Mode Icon' : 'Dark Mode Icon';
        }

        // relative links href="./" 
        if (footerIcon) {
             footerIcon.src = isDark ? './images/bulb_black.png' : './images/bulb_white.png';
            footerIcon.alt = isDark ? 'Light Mode Icon' : 'Light Mode Icon';
        }
    }
        // sync on page load
        window.onload = () => {
        const isLight = document.body.classList.contains('light-theme'); // Check if light-theme is present
        const navIcon = document.getElementById('theme-icon-nav');
        const footerIcon = document.getElementById('theme-icon-footer');

        // relative links href="./"  
        if (navIcon) navIcon.src = isLight ? './images/bulb_black.png' : './images/bulb_white.png'; // Corrected icon logic
        if (footerIcon) footerIcon.src = isLight ? './images/bulb_black.png' : './images/bulb_white.png'; // Corrected icon logic
    };
</script>
