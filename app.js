// Kelas Buku
class Buku {
  constructor(Judul, Penulis, Halaman, Baca) {
    this.Judul = Judul;
    this.Penulis = Penulis;
    this.Halaman = Halaman;
    this.Baca = Baca;
  }

  // Metode di kelas induk
  getInfo() {
    return `
      Judul: ${this.Judul}
      Penulis: ${this.Penulis}
      Halaman: ${this.Halaman}
      Status: ${this.Baca ? "Sudah Dibaca" : "Belum Dibaca"}
    `;
  }
}

// Kelas BukuFiksi mewarisi dari Buku
class BukuFiksi extends Buku {
  constructor(Judul, Penulis, Halaman, Baca, genre) {
    super(Judul, Penulis, Halaman, Baca);
    this.genre = genre;
  }

  // Override metode getInfo dari kelas induk
  getInfo() {
    return `
      ${super.getInfo()} 
      Genre: ${this.genre}
    `;
  }
}

// Kelas DaftarBuku
class DaftarBuku {
  constructor() {
    this.buku = [];
  }

  tambahBuku(buku) {
    this.buku.push(buku);
    this.tampilkanBuku();
  }

  tampilkanBuku() {
    const kontainerDaftarBuku = document.getElementById("daftarBuku");
    kontainerDaftarBuku.innerHTML = "";

    this.buku.forEach((buku) => {
      const divBuku = document.createElement("div");
      divBuku.classList.add("buku");
      divBuku.innerHTML = buku.getInfo();
      kontainerDaftarBuku.appendChild(divBuku);
    });
  }
}

// Fungsi untuk menambahkan buku
function tambahBuku() {
  const Judul = prompt("Masukkan judul buku:");
  const Penulis = prompt("Masukkan nama penulis:");
  const Halaman = prompt("Masukkan jumlah halaman:");
  const Baca = confirm("Apakah Anda sudah membaca buku ini?");
  const genre = prompt("Masukkan genre buku (jika fiksi):");

  if (genre && genre.toLowerCase() === "fiksi") {
    const bukuFiksi = new BukuFiksi(Judul, Penulis, Halaman, Baca, genre);
    daftarBuku.tambahBuku(bukuFiksi);
  } else {
    const buku = new Buku(Judul, Penulis, Halaman, Baca);
    daftarBuku.tambahBuku(buku);
  }
}

// Inisialisasi DaftarBuku
const daftarBuku = new DaftarBuku();
