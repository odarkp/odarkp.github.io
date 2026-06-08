function checkWeather() {
  const myTemp = document.querySelector("#myTemp");
  console.log(myTemp.value);
  const body = document.querySelector("body");
  let temp = myTemp.value;

  if (temp < 10) {
    console.log("it is quite cold today");
    body.style.backgroundColor = "blue";
  } else if (temp >= 10 && temp < 20) {
    console.log("it is nice weather today");
    body.style.backgroundColor = "yellow";
  } else if (temp >= 20 && temp < 30) {
    console.log("it is quite warm today");
    body.style.backgroundColor = "red";
  }
}
