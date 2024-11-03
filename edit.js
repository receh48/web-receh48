function toggleMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  const body = document.querySelector('body');
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');
  
  if (menuToggle.classList.contains('active')) {
      menuToggle.innerHTML = '&times;'; // Cross icon
  } else {
      menuToggle.innerHTML = '&#9776;'; // Burger icon
  }
}

let navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
      const nav = document.querySelector('nav');
      const menuToggle = document.querySelector('.menu-toggle');
      const body = document.querySelector('body');
      
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
      body.classList.remove('blur-bg');
      menuToggle.innerHTML = '&#9776;'; 
  });
});


// form pemesanan
const scriptURL = 'https://script.google.com/macros/s/AKfycbwvZHtKJ_GUtujh0jJguchc-i8sEORSNLyz4jB3MJ4KI2gnp4RDjwti2qzB9hJQdY8Zow/exec';
const form = document.forms['form-vc-receh48'];
const loading = document.getElementById('loading');
const output = document.getElementById('output');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', e => {
  e.preventDefault(); 


  submitButton.style.display = 'none'; 
  loading.style.display = 'block'; 
  output.style.display = 'none'; 

  const nama = document.getElementById('nama').value.trim();

  // Send data to Google Apps Script
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      loading.style.display = 'none'; 
      output.style.display = 'block'; 
      output.textContent = 'Data Sudah Terkirim 🙏'; 
      
      form.reset();

      Swal.fire({
        icon: 'success',
        title: 'Sukses!',
        text: `Terimakasih Ka ${nama}, Data Sudah Terkirim 🙏`,
        confirmButtonText: 'OK'
      });
    })
    .catch(error => {
      loading.style.display = 'none'; 
      output.style.display = 'block'; 
      output.textContent = 'Terjadi kesalahan: ' + error.message; 

      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Terjadi kesalahan saat mengirim data!',
        confirmButtonText: 'OK'
      });

      submitButton.style.display = 'block';
    });
});

// eye password
let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "eye-open.png";
  } else {
    password.type = "password";
    eyeicon.src = "eye-close.png";
  }
}


// Animasi Masuk Section Home/Beranda
ScrollReveal().reveal('.home-content h1', { delay: 400, origin: 'top', distance: '100px' });
ScrollReveal().reveal('.home-content h3', { delay: 600, origin: 'bottom', distance: '100px' });
ScrollReveal().reveal('.home-content p', { delay: 900, origin: 'left', distance: '100px' });
ScrollReveal().reveal('.social-icons p', { delay: 900, origin: 'right', distance: '100px' });
ScrollReveal().reveal('.home-img', { delay: 700, origin: 'left', distance: '200px' });


// Field required
const inputs = [
  document.getElementById('nama'),
  document.getElementById('username'),
  document.getElementById('gmail'),
  document.getElementById('nohp'),
  document.getElementById('lahir'),
  document.getElementById('kelamin'),
  document.getElementById('ktp'),
  document.getElementById('cat'),
  document.getElementById('pembayaran')
];

function setCustomValidation(input, fieldName) {
  input.addEventListener('input', function() {
      input.setCustomValidity('');
      input.checkValidity();
  });

  input.addEventListener('invalid', function() {
      if (input.value === '') {
          input.setCustomValidity('Isi dulu ' + fieldName + ' Lu Bjirrr');
      } else {
          input.setCustomValidity('Format ' + fieldName + ' Salah Kocak');
      }
  });
}

inputs.forEach(input => {
  const fieldName = input.getAttribute('name') || input.id; 
  setCustomValidation(input, fieldName);
});

const words = ["Gacorrr", "Trusted", "Aman 100%", "Murah",];
    let wordIndex = 0;
    let charIndex = 0;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBetweenWords = 2000;
    
    const textElement = document.querySelector('.text');
    
    function type() {
        if (charIndex < words[wordIndex].length) {
            textElement.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenWords);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingSpeed);
        }
    }
    
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(type, typingSpeed);
    });
