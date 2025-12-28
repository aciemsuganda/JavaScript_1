function upDate(previewPic) {
    // Mengubah background image dari div #image ke src gambar yang di-hover
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    // Mengubah teks innerHTML dari div #image ke alt text gambar
    document.getElementById('image').innerHTML = previewPic.alt;
}

function undo() {
    // Mengembalikan background image ke kosong
    document.getElementById('image').style.backgroundImage = "url('')";
    // Mengembalikan teks ke asli
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}

// Menambahkan event listener ke semua gambar dengan class 'preview'
const images = document.querySelectorAll('.preview');
images.forEach(img => {
    img.addEventListener('mouseover', function () { upDate(this); });
    img.addEventListener('mouseout', undo);
});