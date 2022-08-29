const ARR = [
  {
    firstName: "野乃花",
    lastName: "仁平",
    age: "8",
    gender: "女",
  },
  {
    firstName: "敏彦",
    lastName: "森岡",
    age: "12",
    gender: "男",
  },
  {
    firstName: "明",
    lastName: "西島",
    age: "35",
    gender: "男",
  },
  {
    firstName: "利津子",
    lastName: "向田",
    age: "15",
    gender: "女",
  },
  {
    firstName: "直樹",
    lastName: "古屋",
    age: "18",
    gender: "男",
  },
  {
    firstName: "圭子",
    lastName: "福士",
    age: "42",
    gender: "女",
  },
  {
    firstName: "康生",
    lastName: "大谷",
    age: "46",
    gender: "男",
  },
  {
    firstName: "清司",
    lastName: "姫野",
    age: "10",
    gender: "男",
  },
  {
    firstName: "信",
    lastName: "久田",
    age: "51",
    gender: "男",
  },
  {
    firstName: "矩之",
    lastName: "平松",
    age: "24",
    gender: "男",
  },
  {
    firstName: "克彦",
    lastName: "関谷",
    age: "25",
    gender: "男",
  },
  {
    firstName: "金作",
    lastName: "大河内",
    age: "40",
    gender: "男",
  },
  {
    firstName: "英三",
    lastName: "池野",
    age: "23",
    gender: "男",
  },
  {
    firstName: "遙",
    lastName: "松山",
    age: "36",
    gender: "女",
  },
  {
    firstName: "明日香",
    lastName: "鳥羽",
    age: "61",
    gender: "女",
  },
  {
    firstName: "三雄",
    lastName: "内海",
    age: "19",
    gender: "男",
  },
  {
    firstName: "利男",
    lastName: "橘",
    age: "37",
    gender: "男",
  },
  {
    firstName: "英紀",
    lastName: "松坂",
    age: "22",
    gender: "男",
  },
  {
    firstName: "鉄男",
    lastName: "五島",
    age: "53",
    gender: "男",
  },
  {
    firstName: "有沙",
    lastName: "川上",
    age: "38",
    gender: "女",
  },
];

let a = [];

for (let i = 0; Arr.length > i; i++) {
  if (Number(ARR[i].age) >= 30 && Arr[i].gender === "男") {
    a.push(Arr[i]);
  }
}
console.log(a);

const result = ARR.filter((x) => x.age >= 30 && x.gender === "男");

console.log(result);
