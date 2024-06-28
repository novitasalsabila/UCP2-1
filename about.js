// script.js

// Ambil elemen-elemen yang diperlukan
const productImg = document.getElementById('productImg');
const productDesc = document.getElementById('productDesc');
const productImgs = document.querySelectorAll('.product-img');

// Fungsi untuk mengisi modal dengan data yang sesuai
function fillModal(imgSrc, desc) {
    productImg.src = imgSrc;
    productDesc.textContent = desc;
}

// Tambahkan event listener untuk setiap gambar produk
productImgs.forEach(img => {
    img.addEventListener('click', function() {
        const imgSrc = this.getAttribute('data-img');
        const desc = this.getAttribute('data-desc');
        fillModal(imgSrc, desc);
    });
});
