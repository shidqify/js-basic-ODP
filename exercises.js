const lotBilling = ( vhcType, duration) => {
  let total = 0, firstPrice, hrPrice, extraChrg;

  duration = Math.ceil(duration);

  switch (vhcType) {
    case "Car":
      firstPrice = 5000
      hrPrice = 3000
      extraChrg = 50000
      break;
    case "Bike":
      firstPrice = 2000
      hrPrice = 1000
      extraChrg = 20000
      break;
    default:
      break;
  }

  total += ((duration - 1) * hrPrice) + firstPrice
  if (duration > 24) total += extraChrg;

  return total;
}

console.log(lotBilling("Car", 3));
console.log(lotBilling("Bike", 1));
console.log(lotBilling("Car", 27));
console.log(lotBilling("Car", 2.5));