let rangecreator = function (start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
};

rangecreator(1, 10);
// Result:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
rangecreator(25, 33);
// Result:
// 25
// 26
// 27
// 28
// 29
// 30
// 31
// 32
// 33
rangecreator(5000, 5010);
// Result:
// 5000
// 5001
// 5002
// 5003
// 5004
// 5005
// 5006
// 5007
// 5008
// 5009
// 5010
