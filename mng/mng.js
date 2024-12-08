document.addEventListener('DOMContentLoaded', function() {
    // Show the appropriate form when a dropdown item is clicked
    document.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        const targetForm = this.getAttribute('href');
        
        // Hide all forms
        document.querySelectorAll('.form-section').forEach(form => {
          form.style.display = 'none';
        });
  
        // Show the selected form
        document.querySelector(targetForm).style.display = 'block';
      });
    });
  });
  
  // eye password
let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "img/eye-open.png";
  } else {
    password.type = "password";
    eyeicon.src = "img/eye-close.png";
  }
}

// form pemesanan
const scriptURL = 'https://script.google.com/macros/s/AKfycby3dfIlzerq3FUyUl7wAUGQRfVipHivvneauIGK2BkdWD_IhXJiu8fWGIULiae3mJTa9A/exec';
const form = document.forms['form-mng-receh48'];
const loading = document.getElementById('loading');
const output = document.getElementById('output');

// Tambahkan variabel untuk mengontrol status form
let formIsOpen = false;  // Set ke 'false' untuk menutup form

form.addEventListener('submit', e => {
  e.preventDefault();

  form.reset();

  // Periksa apakah form sedang terbuka
  if (!formIsOpen) {
    Swal.fire({
      title: 'FULL SLOT!',
      imageUrl: 'img/shani-maaf.gif',
      imageWidth: 150,
      confirmButtonText: 'OK'
    });
    return;
  }
});

const inputs = [
  document.getElementById('nama'),
  document.getElementById('username'),
  document.getElementById('gmail'),
  document.getElementById('member'),
  document.getElementById('cadangan'),
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
