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
  
// form pemesanan
const scriptURL = 'https://script.google.com/macros/s/AKfycby-KbA1KVV4h12LFC5kkBXPx6NDWM3DmDqEyHa3R2bCtMIDy9Xtp4iH17USC6B2jBz-8Q/exec';
const form = document.forms['form-jastip-receh48'];
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
        title: 'Sukses!',
        text: `Terimakasih Ka ${nama}, Data Sudah Terkirim, Mohon Ditunggu Untuk Admin Konfirmasi🙏`,
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
    document.getElementById('member'),
    document.getElementById('pengiriman'),
    document.getElementById('pembayaran'),
];

// Fungsi untuk menambahkan validasi kustom pada setiap input
function setCustomValidation(input, fieldName) {
    input.addEventListener('input', function() {
        // Hapus pesan kesalahan saat user mengetik
        input.setCustomValidity('');
        input.checkValidity();
    });

    input.addEventListener('invalid', function() {
        // Jika input kosong
        if (input.value.trim() === '') {
            input.setCustomValidity('Isi dulu ' + fieldName + ' lu bjirrr!');
        } else {
            input.setCustomValidity('Format ' + fieldName + ' salah kocak!');
        }
    });
}
