const A = [
  {
    id: "LM_4vdv0",
    name: "河原 光希",
    email: "Ci6_B@sample.net",
  },
  {
    id: "se3C2PeX",
    name: "幸田 好夫",
    email: "bB8am89lcK@sample.jp",
  },
  {
    id: "r1KZ2G9n",
    name: "小山 愛奈",
    email: "csBuqTTXP@test.org",
  },
  {
    id: "Yy6B_Qp8",
    name: "高塚 仁",
    email: "cvvUbuul@example.net",
  },
  {
    id: "rsQV6sjH",
    name: "八田 杏理",
    email: "wysVLw@sample.net",
  },
  {
    id: "oEhSnjDd",
    name: "松橋 一二三",
    email: "jCH_ePF1R@sample.com",
  },
  {
    id: "kHQqTJz1",
    name: "綾部 昌嗣",
    email: "qTQilYbk@sample.jp",
  },
  {
    id: "UNVwxexP",
    name: "湯本 明夫",
    email: "jDiFLG3dV@example.org",
  },
  {
    id: "OdQuKqd3",
    name: "柴崎 晃",
    email: "Bg1aIFkX@example.org",
  },
  {
    id: "OGj6uqc1",
    name: "橋本 紗和",
    email: "uffvb_3@test.org",
  },
  {
    id: "aXHVMbBR",
    name: "柴田 梅吉",
    email: "SXtaO@sample.jp",
  },
  {
    id: "SvYVxEv1",
    name: "末吉 勝男",
    email: "L94ER1ca@example.co.jp",
  },
  {
    id: "kQuHvYi4",
    name: "柴原 優希",
    email: "SxX7gHTjy@sample.jp",
  },
  {
    id: "ybVHfcWO",
    name: "小貫 心",
    email: "RzhT8SrU@test.com",
  },
  {
    id: "rYdnelF3",
    name: "西尾 香苗",
    email: "hZTbnI9@test.net",
  },
  {
    id: "YIX3Ea2h",
    name: "寺川 愛菜",
    email: "b5ypX6@test.com",
  },
  {
    id: "e4OQLdBu",
    name: "会田 三朗",
    email: "C8t97jsqz@sample.jp",
  },
  {
    id: "jw0219oG",
    name: "大屋 常吉",
    email: "uG1FMhMgcG@test.org",
  },
  {
    id: "VN58yEHF",
    name: "土井 沙也佳",
    email: "fjAS8ZCZN@sample.jp",
  },
  {
    id: "TlRZ2Frz",
    name: "玉置 結月",
    email: "WH9vgQ1C@sample.co.jp",
  },
];

//zenn.dev/tsuboi/articles/ee43ddc5a2cd941de138
// type Entry = {
//   id: string
//   name: string
//   email: string
// }

// type Entries = {
//     [id: string]: Entry
// }

//zozo.rickcloud.jp/wiki/pages/viewpage.action?pageId=309828106
// const l = {
//     'foo':{id:'foo',name:'bar',email:'@gmail'},
//     'foo':{id:'foo',name:'bar',email:'@gmail'},
// }

// パターン１
// const obj = {};
// A.forEach((x) => {
//   obj[x.id] = x;
// });

// パターン２
// const answer = Object.assign(
//   {},
//   A.map((x) => (x.id = x))
// );

// console.log(answer);

// パターン３
const obj = A.reduce((acc, value) => ({ ...acc, [value.id]: value }), {});
console.log(obj);
