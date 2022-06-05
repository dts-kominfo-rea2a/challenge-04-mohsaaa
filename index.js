// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
//paramDate berisikan array dari variabel dates & paramPos berisikan posisi index dari array
const createDate = (paramDate, paramPos) => {
  const arrayDate = [];
  for (let counter = 0; counter < paramDate.length; counter++) {
    // dibagi 1000 utk merubah hasil epoch time dari milisecond ke second
    arrayDate.push(Date.parse(paramDate[counter]) / 1000);
  }
  // kondisi jika indexnya tidak ada/undefind maka akan mengembalik seluruh isi array
  // kondisi else menampilkan array sesuai dengan posisi index yg ada pada argumen
  if (paramPos === undefined) {
    return arrayDate.sort().join("-").toString();
  } else {
    return arrayDate[paramPos].toString();
  }
}

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
