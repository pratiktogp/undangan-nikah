/* ==========================================================
   DOM ELEMENTS
========================================================== */

// Cover
const cover = document.getElementById("cover");
const openButton = document.getElementById("openInvitation");

// App
const app = document.getElementById("app");

// Navigation
const navigation = document.querySelector(".bottom-nav");


/* ==========================================================
   INITIAL STATE
========================================================== */

// Mengunci scroll ketika website pertama kali dibuka
document.body.classList.add("lock");

// Memuat seluruh data website
loadWeddingData();


/* ==========================================================
   EVENT LISTENER
========================================================== */

openButton.addEventListener("click", openInvitation);


/* ==========================================================
   FUNCTIONS
========================================================== */

/**
 * Membuka undangan
 */
function openInvitation() {

    // Fade Out Cover
    cover.style.opacity = "0";

    setTimeout(() => {

        cover.style.display = "none";

        app.style.display = "block";

        navigation.style.display = "flex";

        document.body.classList.remove("lock");

    }, 600);

}


/**
 * Mengisi seluruh data website dari data.js
 */
function loadWeddingData() {

    /* ==========================
       COVER
    ========================== */

    document.getElementById("coverGroom").textContent =
        weddingData.couple.groom.nickname;

    document.getElementById("coverBride").textContent =
        weddingData.couple.bride.nickname;

    document.getElementById("coverDate").textContent =
        weddingData.wedding.date;


    /* ==========================
       HERO
    ========================== */

    document.getElementById("heroTitle").textContent =
        weddingData.info.title;

    document.getElementById("groomName").textContent =
        weddingData.couple.groom.nickname;

    document.getElementById("brideName").textContent =
        weddingData.couple.bride.nickname;

}