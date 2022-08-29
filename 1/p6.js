const Arr = [
  {
    id: "YZrQhZgk",
    url: "http://test.com",
    createAt: "1977/7/19",
    view: 7531,
  },
  {
    id: "K190k1Ba",
    url: "http://test.com",
    createAt: "1976/5/5",
    view: 4496,
  },
  {
    id: "cwzNfFWA",
    url: "http://example.org",
    createAt: "1980/8/3",
    view: 7098,
  },
  {
    id: "Qdkq4cmd",
    url: "http://example.net",
    createAt: "2002/4/5",
    view: 8492,
  },
  {
    id: "dvidGoo6",
    url: "http://sample.com",
    createAt: "2020/11/1",
    view: 6489,
  },
  {
    id: "pp9mAv00",
    url: "http://example.com",
    createAt: "2016/1/29",
    view: 2851,
  },
  {
    id: "Tg5Jn5GA",
    url: "http://example.org",
    createAt: "1997/2/17",
    view: 9631,
  },
  {
    id: "nZR9gsPp",
    url: "http://test.com",
    createAt: "1973/10/16",
    view: 9660,
  },
  {
    id: "YK60ZZO2",
    url: "http://sample.com",
    createAt: "1982/11/11",
    view: 9515,
  },
  {
    id: "Hum00Eyq",
    url: "http://example.net",
    createAt: "1987/5/19",
    view: 2738,
  },
  {
    id: "GrTm3xoK",
    url: "http://sample.jp",
    createAt: "2009/7/21",
    view: 7028,
  },
  {
    id: "MgXk2Kv2",
    url: "http://test.net",
    createAt: "2007/2/21",
    view: 8909,
  },
  {
    id: "cMIUNirz",
    url: "http://test.com",
    createAt: "2006/9/26",
    view: 6351,
  },
  {
    id: "Sem1p17g",
    url: "http://example.co.jp",
    createAt: "2006/12/10",
    view: 4093,
  },
  {
    id: "esYeRszp",
    url: "http://example.net",
    createAt: "1986/6/1",
    view: 8285,
  },
  {
    id: "KtLz5mdl",
    url: "http://sample.org",
    createAt: "1973/7/8",
    view: 4821,
  },
  {
    id: "jqE8iFt7",
    url: "http://example.co.jp",
    createAt: "2015/4/13",
    view: 1679,
  },
  {
    id: "nlN33yPD",
    url: "http://test.net",
    createAt: "1998/4/28",
    view: 5483,
  },
  {
    id: "ezlu0iq0",
    url: "http://test.com",
    createAt: "1986/6/28",
    view: 3510,
  },
  {
    id: "t2TDezbs",
    url: "http://example.net",
    createAt: "2010/2/24",
    view: 8009,
  },
];

const result = Arr.filter((x) => Number(x.createAt.split("/")[0]) >= 2000);
const sum = result.reduce((x, y) => {
  x += y.view;
  return x;
}, 0);
//合計値
console.log(sum);
//平均値
const average = sum / result.length;
console.log(average);
