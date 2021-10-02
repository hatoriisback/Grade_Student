let nama = "Sarah";
let nilai = 90;

if (nilai >= 80 && nilai <= 100) {
  console.log(`${nama} mendapatkan nilai A`);
} else if (nilai >= 65 && nilai <= 79) {
  console.log(`${nama} mendapatkan nilai B`);
} else if (nilai >= 50 && nilai <= 64) {
  console.log(`${nama} mendapatkan nilai C`);
} else if (nilai >= 35 && nilai <= 49) {
  console.log(`${nama} mendapatkan nilai D`);
} else if (nilai >= 0 && nilai <= 34) {
  console.log(`${nama} mendapatkan nilai E`);
} else {
  console.log("Nilai Invalid");
}
