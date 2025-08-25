const menuToggle = document.getElementById('menuToggle');
const navHeaderPages = document.querySelector('.navHeaderPages');

menuToggle.addEventListener('change', () => {
  if (menuToggle.checked) {
    navHeaderPages.classList.add('active'); 
  } else {
    navHeaderPages.classList.remove('active'); 
  }
});

