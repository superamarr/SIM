document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nama = document.getElementById("nama").value.trim();
    const produk = document.getElementById("produk").value;
    const jumlah = document.getElementById("jumlah").value;
    const alamat = document.getElementById("alamat").value.trim();
  
    if (!nama || !produk || !jumlah || !alamat) {
        alert("Harap lengkapi semua field sebelum memesan!");
        return;
    }

    alert(`Terima kasih, ${nama}! Pesanan Anda untuk ${jumlah} ${produk} telah kami terima.`);
    this.reset();
  });

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("namaKontak").value.trim();
    const email = document.getElementById("emailKontak").value.trim();
    const pesan = document.getElementById("pesanKontak").value.trim();
  
    if (!nama || !email || !pesan) {
      alert("Harap lengkapi semua kolom kontak.");
      return;
    }
  
    alert(`Terima kasih, ${nama}. Pesan Anda telah dikirim!`);
    this.reset();
  });

// Fungsi untuk memperbarui waktu setiap detik
document.addEventListener("DOMContentLoaded", function() {
  // Fungsi untuk memperbarui waktu setiap detik
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    // Format waktu dalam format HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    // Menampilkan waktu di elemen dengan id "waktu"
    document.getElementById('waktu').textContent = timeString;
  }

  // Memperbarui waktu setiap detik
  setInterval(updateClock, 1000);

  // Menampilkan waktu pertama kali saat halaman dimuat
  updateClock();
});



  