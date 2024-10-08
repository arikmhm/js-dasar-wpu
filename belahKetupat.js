function belahKetupat(n) {
  let ketupat = "";

  // Bagian atas
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      ketupat += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      ketupat += "*";
    }
    ketupat += "\n";
  }

  // Bagian bawah
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
      ketupat += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      ketupat += "*";
    }
    ketupat += "\n";
  }

  console.log(ketupat);
}
belahKetupat(5);

// menggunakan repeat
function belahKetupat(n) {
  let ketupat = "";

  // Bagian atas
  for (let i = 1; i <= n; i++) {
    ketupat += " ".repeat(n - i) + "*".repeat(2 * i - 1) + "\n";
  }

  // Bagian bawah
  for (let i = n - 1; i >= 1; i--) {
    ketupat += " ".repeat(n - i) + "*".repeat(2 * i - 1) + "\n";
  }

  console.log(ketupat);
}
belahKetupat(5); // Ganti 5 dengan ukuran yang diinginkan
