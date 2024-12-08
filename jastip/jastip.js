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
