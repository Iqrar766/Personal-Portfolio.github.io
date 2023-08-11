function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


function sendEmail() {
    var email = 'iqrarinam766@gmail.com'; // Replace with your email address
    var subject = 'Hello'; // Subject of the email
    var body = 'I would like to get in touch with you.'; // Body of the email
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoLink;
}