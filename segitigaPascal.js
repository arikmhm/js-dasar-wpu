function segitigaPascal(n) {
  let pascal = [];
  for (let i = 0; i < n; i++) {
    pascal[i] = [];
    pascal[i][0] = 1;
    for (let j = 1; j < i; j++) {
      pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
    }
    pascal[i][i] = 1;
  }

  // Print segitiga pascal
  for (let i = 0; i < pascal.length; i++) {
    console.log(" ".repeat(n - i) + pascal[i].join(" "));
  }
}
segitigaPascal(5); // Ganti 5 dengan ukuran yang diinginkan

// menggunakan repeat
function segitigaPascal(n) {
  let pascal = [];
  for (let i = 0; i < n; i++) {
    pascal[i] = [];
    pascal[i][0] = 1;
    for (let j = 1; j < i; j++) {
      pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
    }
    pascal[i][i] = 1;
  }

  // Print segitiga pascal
  for (let i = 0; i < pascal.length; i++) {
    console.log(" ".repeat(n - i) + pascal[i].join(" "));
  }
}
segitigaPascal(5); // Ganti 5 dengan ukuran yang diinginkan
