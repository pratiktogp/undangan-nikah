// Mengunci scroll saat cover tampil
document.body.classList.add("lock");

// Mengambil elemen dari HTML
const openButton = document.getElementById("openInvitation");
const cover = document.getElementById("cover");
const app = document.getElementById("app");
const navigation = document.querySelector(".bottom-nav");

// Event ketika tombol diklik
openButton.addEventListener("click", function () {

    // Membuat cover menghilang perlahan
    cover.style.opacity = "0";

    // Menunggu animasi selesai
    setTimeout(function () {

        // Menyembunyikan cover
        cover.style.display = "none";

        // Menampilkan isi website
        app.style.display = "block";

        // Menampilkan navigasi
        navigation.style.display = "flex";

        // Mengaktifkan scroll
        document.body.classList.remove("lock");

    }, 600);

});