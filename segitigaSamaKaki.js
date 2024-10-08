function segitigaSamaKaki(n) {
  let segitiga = "";
  for (let i = 1; i <= n; i++) {
    // Membuat spasi
    for (let j = 1; j <= n - i; j++) {
      segitiga += " ";
    }
    // Membuat bintang
    for (let k = 1; k <= 2 * i - 1; k++) {
      segitiga += "*";
    }
    segitiga += "\n";
  }
  console.log(segitiga);
}
segitigaSamaKaki(5);

// alternatif menggunakan repeat()
function segitigaSamaKaki(n) {
  let segitiga = "";
  for (let i = 1; i <= n; i++) {
    segitiga += " ".repeat(n - i) + "*".repeat(2 * i - 1) + "\n";
  }
  console.log(segitiga);
}
segitigaSamaKaki(5);
