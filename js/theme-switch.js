// Theme Switcher with non-functional Icon Switching 

function toggleTheme() {
    document.body.classList.toggle('light-theme'); // Toggle the light-theme class
    const isLight = document.body.classList.contains('light-theme');

    const navIcon = document.getElementById('theme-icon-nav');
    const footerIcon = document.getElementById('theme-icon-footer');

    if (navIcon) {
        navIcon.src = isLight ? '../images/bulb_black.png' : '../images/bulb_white.png';
        navIcon.alt = isLight ? 'Light Mode Icon' : 'Dark Mode Icon';
    }

    if (footerIcon) {
        footerIcon.src = isLight ? '../images/bulb_black.png' : '../images/bulb_white.png';
        footerIcon.alt = isLight ? 'Light Mode Icon' : 'Dark Mode Icon';
    }
}

window.onload = () => {
    const isLight = document.body.classList.contains('light-theme');
    const navIcon = document.getElementById('theme-icon-nav');
    const footerIcon = document.getElementById('theme-icon-footer');

    if (navIcon) {
        navIcon.src = isLight ? '../images/bulb_black.png' : '../images/bulb_white.png';
        navIcon.alt = isLight ? 'Light Mode Icon' : 'Dark Mode Icon';
    }
    if (footerIcon) {
        footerIcon.src = isLight ? '../images/bulb_black.png' : '../images/bulb_white.png';
        footerIcon.alt = isLight ? 'Light Mode Icon' : 'Dark Mode Icon';
    }
};

// old script
//    <script>
//        function toggleTheme() {
//            document.body.classList.toggle('light-theme'); // Toggle the light-theme class
//            const isLigbt = document.body.classList.contains('light-theme');
//            const navIcon = document.getElementById('theme-icon-nav');
//            const footerIcon = document.getElementById('theme-icon-footer');
//            if (navIcon) {
//                navIcon.src = isLight ? '../images/bulb_black.png' : '../images/bulb.white.png';
//                navIcon.alt = isLight ? 'Light Mode Icon' : 'Dark Mode Icon';
//            }
//            if (footerIcon) {
//                // Toggle footer icon
//                footerIcon.src = isLight ? '../images/bulb_black.png' : '../images/bulb_white.png';
//                footerIcon.alt = isLight ? 'Light Mode Icon' : 'Dark Mode Icon';
//            }
//        }
//        window.onload = () => {
//            const isLight = document.body.classList.contains('light-theme'); // Check if light-theme is present
//            const navIcon = document.getElementById('theme-icon-nav');
//            const footerIcon = document.getElementById('theme-icon-footer');
//        if (navIcon) navIcon.src = isLight ? '../images/bulb_black.png' : '../images/bulb_white.png';
//        if (footerIcon) footerIcon.src = isLight ? '../images/bulb_black.png' : '../images/bulb_white.png';
//        };
//    </script>
