function tempInFarenhite(temperatureInCelsius) {
  let tempInFarenhite = (temperatureInCelsius * 9) / 5 + 32;
  return tempInFarenhite;
}
function tempInCelsius(temperatureInFarenhite) {
  let tempInCelsius = ((temperatureInFarenhite - 32) * 5) / 9;
  return tempInCelsius;
}
