const Arr = [
  {
    id: "FBwLMKuM",
    url: "http://example.net",
    createAt: "2001/10/23 15:53:21",
  },
  { id: "ky7dqCZp", url: "http://example.org", createAt: "2021/2/16 18:48:53" },
  { id: "GLAZKs73", url: "http://test.jp", createAt: "2010/8/20 12:26:49" },
  { id: "X4UpZAdT", url: "http://test.org", createAt: "2004/6/11 11:09:40" },
  { id: "e7_0p6mz", url: "http://example.net", createAt: "2021/1/26 16:11:35" },
  { id: "LYCnrCPC", url: "http://test.net", createAt: "1974/4/21 11:37:12" },
  { id: "tchT2dRc", url: "http://test.jp", createAt: "2012/3/29 2:25:35" },
  { id: "muD8pAfk", url: "http://example.jp", createAt: "2001/5/24 0:56:04" },
  { id: "XeVl8SEQ", url: "http://sample.jp", createAt: "1977/9/4 6:15:00" },
  { id: "vVXw9n3t", url: "http://example.com", createAt: "2009/6/27 7:26:05" },
  {
    id: "grLPPbBE",
    url: "http://sample.co.jp",
    createAt: "2005/12/17 21:06:14",
  },
  { id: "l8CS97hw", url: "http://example.com", createAt: "2016/6/4 0:15:02" },
  { id: "PWQU3nzf", url: "http://test.net", createAt: "1979/12/26 13:58:11" },
  { id: "lFcHoWPv", url: "http://example.com", createAt: "1986/5/26 15:45:12" },
  { id: "JEl1HKPK", url: "http://example.org", createAt: "1980/4/11 3:14:56" },
  { id: "NjGYlj_h", url: "http://sample.net", createAt: "2003/11/3 14:52:58" },
  { id: "Ct35zt02", url: "http://test.org", createAt: "2017/1/15 14:35:07" },
  { id: "Be7zxBCG", url: "http://test.net", createAt: "1973/5/29 23:49:31" },
  { id: "jyICKleX", url: "http://sample.com", createAt: "2019/4/21 3:38:44" },
  { id: "ev0KQ5Zc", url: "http://sample.co.jp", createAt: "2000/2/13 7:05:05" },
];
const result = Arr.filter((x) => Number(x.createAt.split("/")[0]) >= 2000);

console.log(result);
