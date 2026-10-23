
const cheersData = [
  {
    // text: "“Pace boleh pelan, tapi pesonamu selalu ngebut.”",
    image: "./gambar/1.png",
    alt: "Ilustrasi pelari yang bersemangat"
  },
  {
    // text: "“Napas boleh ngos-ngosan, tapi senyum jangan sampai hilang.”",
    image: "./gambar/3.png",
    alt: "Foto rute lari yang indah"
  },
  {
    // text: "“Finish line sudah dekat, hadiah kecil menantimu!”",
    image: "./gambar/2.png",
    alt: "Medali atau garis finish"
  },
  {
    // text: "“Finish line sudah dekat, hadiah kecil menantimu!”",
    image: "./gambar/4.png",
    alt: "Medali atau garis finish"
  }
];

let currentIndex = 0;

// Ambil elemen DOM
const quoteText = document.getElementById('quote');
const quoteImage = document.getElementById('quote-image');
const quoteNumber = document.getElementById('quote-number');
const nextButton = document.getElementById('next-cheer');
const progressBar = document.querySelector('#progress'); // Diperbaiki agar konsisten

// Fungsi untuk memperbarui isi slide dan indikator progress
function updateSlide(index) {
  // 1. Update teks kutipan
  quoteText.textContent = cheersData[index].text;

  // 2. Update sumber gambar dan teks alternatifnya
  quoteImage.src = cheersData[index].image;
  quoteImage.alt = cheersData[index].alt;

  // 3. Update nomor slide (misal: 02/03)
  quoteNumber.innerHTML = `0${index + 1}<span>/${cheersData.length}</span>`;

  // 4. Update panjang progress bar agar ikut bergerak (Diperbaiki dari 'cheers.length' ke 'cheersData.length')
  progressBar.style.width = `${((index + 1) / cheersData.length) * 100}%`;
}

// Jalankan fungsi pertama kali saat halaman dimuat supaya progres awal (slide 1) langsung terisi
updateSlide(currentIndex);

// Event listener saat tombol panah diklik
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cheersData.length;
  updateSlide(currentIndex);
});

// Logika Cek PB (Tetap sama, hanya merapikan pemanggilan DOM)
document.querySelector('#check-pb').addEventListener('click', () => {
  const value = Number(document.querySelector('#pb-time').value)
  const card = document.querySelector('#gift-card')
  const message = document.querySelector('#form-message')
  const giftImage = document.querySelector('#gift-img')

  if (value > 0 && value < 90) {
    card.classList.add('is-unlocked')
    document.querySelector('#gift-icon').textContent = '✦'
    document.querySelector('#gift-title').textContent = 'Satu Toples Rempeyek'
    document.querySelector('#gift-subtitle').textContent = 'Untuk menemani mu di malam hari'
    document.querySelector('#gift-note').textContent = 'PB kamu valid. Jangan lupa tagih, ya.'
    message.textContent = 'Wah, PB! Hadiahmu terbuka.'

    giftImage.src = './gambar/peyek.jpg' // Ganti dengan URL/path gambar Anda
    giftImage.style.display = 'block'

  } else {
    message.textContent = 'Masukkan waktu PB antara 1–90 menit dulu, ya.'
    card.style.backgroundImage = 'none';
  }
});
