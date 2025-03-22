// Theme Switcher with non-functional Icon Switching 

// theme-switch.js
function toggleTheme() {
    document.body.classList.toggle('light-theme');  // Toggle the light theme class

    // Get all theme icons
    const icons = document.querySelectorAll('img[aria-label="Toggle Theme"]');
    
    // Set the icon source to the light mode icon
    icons.forEach(icon => {
        icon.src = './images/bulb_white.png'; // Change to the desired icon
    });
}

// last
//function toggleTheme() {
//    document.body.classList.toggle('light-theme'); // Toggle the light-theme class
//    const isLight = document.body.classList.contains('light-theme');
//
//    const navIcon = document.getElementById('theme-icon-nav');
//    const footerIcon = document.getElementById('theme-icon-footer');
//
//    if (navIcon) {
//        navIcon.src = isLight ? '../images/bulb_black.png' : './images/bulb_white.png';
//        navIcon.alt = isLight ? 'Light Mode Icon' : 'Dark Mode Icon';
//    }
//
//    if (footerIcon) {
//        footerIcon.src = isLight ? './images/bulb_black.png' : './images/bulb_white.png';
//        footerIcon.alt = isLight ? 'Light Mode Icon' : 'Dark Mode Icon';
//    }
//}
//
//window.onload = () => {
//   const isLight = document.body.classList.contains('light-theme');
//    const navIcon = document.getElementById('theme-icon-nav');
//    const footerIcon = document.getElementById('theme-icon-footer');
//
//    if (navIcon) {
//        navIcon.src = isLight ? './images/bulb_black.png' : './images/bulb_white.png';
//        navIcon.alt = isLight ? 'Light Mode Icon' : 'Dark Mode Icon';
//    }
//    if (footerIcon) {
//        footerIcon.src = isLight ? './images/bulb_black.png' : './images/bulb_white.png';
//        footerIcon.alt = isLight ? 'Light Mode Icon' : 'Dark Mode Icon';
//    }
//};
