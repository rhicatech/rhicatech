// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert('Thank you for contacting us! We will get back to you soon.');
      document.getElementById('contact-form').reset();
    } else {
      alert('Please fill out all fields.');
    }
  });


  // Highlight active navigation item on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});


// Toggle hidden content on button click
document.getElementById('read-more-btn').addEventListener('click', function () {
    const moreContent = document.getElementById('more-content');
    const button = document.getElementById('read-more-btn');
  
    if (moreContent.classList.contains('hidden')) {
      moreContent.classList.remove('hidden');
      button.textContent = 'Read Less';
    } else {
      moreContent.classList.add('hidden');
      button.textContent = 'Read More';
    }
  });