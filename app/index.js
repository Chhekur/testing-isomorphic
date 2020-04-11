let char = ["a", "b", "c", "d"];

window.stringGen = function stringGen() {
  let n = document.getElementById("num").value;
  let ans = "";
  for (let i = 0; i < n; i++) ans += char[Math.floor(Math.random() * 4)];
  console.log(ans);
  document.getElementById("result").innerHTML = ans;
  return ans;
};
