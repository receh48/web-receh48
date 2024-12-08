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
const scriptURL = 'https://script.google.com/macros/s/AKfycbz4PQ5gE8XTkhxkzoUM7LH9vcaL-mx_1KF_6WMNdh1sQMUF8CUBCCTAPIBNdvOrXhlbgQ/exec';
const form = document.forms['form-vc-receh48'];
const loading = document.getElementById('loading');
const output = document.getElementById('output');
const submitButton = form.querySelector('button[type="submit"]');

const restrictedMembers = [
  'Marsha Lenathea', 'Marsha','Erine','Catherina Vallencia'
]; // Daftar nama member yang dibatasi

form.addEventListener('submit', e => {
  e.preventDefault();

  // Ambil input pengguna dan bersihkan dari karakter yang tidak diinginkan
  let memberInput = document.getElementById('sesi').value.trim();

  // Hapus tanda kutip, karakter khusus, dan spasi ekstra
  memberInput = memberInput.replace(/['"`~!@#$%^&*()_+={}\[\]:;<>?,./\\|]/g, '').toLowerCase();

  // Periksa apakah input mengandung kata dari daftar nama member (case insensitive)
  const isRestricted = restrictedMembers.some(name => 
    memberInput.includes(name.toLowerCase())
  );

  if (isRestricted) {
    Swal.fire({
      title: 'Full Slot!',
      text: `Maaf, slot untuk member ${memberInput} sudah penuh.`,
      imageUrl: 'img/shani-maaf.gif',
      imageWidth: 150,
      confirmButtonText: 'OK'
    });

    return; // Hentikan pengiriman form
  }

  submitButton.style.display = 'none'; 
  loading.style.display = 'block'; 
  output.style.display = 'none'; 

  const nama = document.getElementById('nama').value.trim();

  // Kirim data ke Google Apps Script
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      loading.style.display = 'none'; 
      output.style.display = 'block'; 
      output.textContent = 'Data Sudah Terkirim 🙏'; 
      
      form.reset();

      Swal.fire({
        title: 'Sukses!',
        text: `Terimakasih Ka ${nama}, Data Sudah Terkirim 🙏`,
        imageUrl: 'img/icel-ty.gif',
        imageWidth: 150,
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

const inputs = [
  document.getElementById('nama'),
  document.getElementById('username'),
  document.getElementById('gmail'),
  document.getElementById('sesi'),
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
