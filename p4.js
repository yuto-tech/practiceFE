const URL =
  "https://zozo.jp/fashionnews/mynaviosusume/116055/?utm_source=al&utm_medium=social&utm_campaign=202208057_009";

const answer = URL.split("?")
  .map((x) => x.split("&"))[1]
  .map((x) => {
    const keyValueArr = x.split("=");
    return { key: keyValueArr[0], value: keyValueArr[1] };
  });

console.log(answer);

//簡単に実装できる機能が用意されている
