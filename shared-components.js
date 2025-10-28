function insertNavbar() {
    const navHTML = `
        <nav class="navbar">
            <div class="nav-left">
                <a href="Home_page.html">
                    <img src="plans_img/logo.png" alt="TaxASAP Logo" class="logo">
                </a>
            </div>
            <div class="nav-right">
                <a href="Home_page.html">Home</a>
                <a href="plans.html">Plans</a>
                <a href="features.html">About</a>
                <a href="TeamMember.html">Team</a>
                <a href="customer.html" class="btns">Get Started</a>
            </div>
        </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navHTML);
}
function insertStaticFooter() {
    const footerHTML = `
        <footer class="static-footer">
            <div class="footer-content">
                <div>
                    <h3>About TaxASAP</h3>
                    <p>An app that makes filing taxes faster and easier.</p>
                </div>
                <div>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Our Services</a></li>
                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Pricing</a></li>
                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Company</h3>
                    <ul>
                        <a href="features.html">About Us</a>
                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Careers</a></li>
                        <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <ul>
                        <li><a href="mailto:cpoit044@uottawa.ca">cpoit044@uottawa.ca</a></li>
                        <li><a href="tel:+16135625700">+1 (613) 562-5700</a></li>
                        <li><a href="https://github.com/Groupe19/TaxASAP" target="_blank">Github</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}
document.addEventListener('DOMContentLoaded', function() {
    if (document.body.hasAttribute('data-include-navbar')) {
        insertNavbar();
    }
    if (document.body.hasAttribute('data-include-scrolling-footer')) {
        insertScrollingFooter();
    }
    if (document.body.hasAttribute('data-include-static-footer')) {
        insertStaticFooter();
    }
});