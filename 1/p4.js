const DATA =
  "https://zozo.jp/fashionnews/mynaviosusume/116055/?utm_source=al&utm_medium=social&utm_campaign=202208057_009";

//パターン１
// const answer = DATA.split("?")
//   .map((x) => x.split("&"))[1]
//   .map((x) => {
//     const keyValueArr = x.split("=");
//     return { key: keyValueArr[0], value: keyValueArr[1] };
//   });

//パターン２
const Arr = [];
const url = new URL(DATA);
const params = new URLSearchParams(url.search);

for (let param of params.entries()) {
  Arr.push({ key: param[0], value: param[1] });
}

console.log(Arr);
