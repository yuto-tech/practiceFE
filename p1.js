const str = `
 
【セール開催中！・MAX95%OFF】ZOZOTOWNは人気ブランドのアイテムを取扱うファッション通販サイトです。
「ツケ払い」ならお支払は2ヶ月後！即日配送（一部地域）で最短翌日お届け。         
 
今なら割引クーポンを対象ショップ限定でご利用いただけます。                      `;

//改行ごとに配列を作る
const splitArr = str.split("\n");
//前後の空欄を取り除く
const splitArrTrim = splitArr.map((x) => x.trim());
//''を配列から取り除く
const splitArrTrimFilter = splitArrTrim.filter((x) => x !== "");
//！ごとに配列を作る
const d = splitArrTrimFilter.map((x) => x.split("！"));
//・ごとに配列を作る
const e = d.flat().map((x) => x.split("。"));
//””を配列から取り除く
// console.log(e.flat().filter((x) => x !== ""));

const a = str
  .split("！")
  .map((x) => x.split("。"))
  .flat()
  .map((x) => x.trim())
  .filter((x) => x !== "");

console.log(a);

//s。rから空白を取り除く　　split(' ')
//！と。を取り除く
//str = [['','','','']

//応用１
//正規表現を使って解答
