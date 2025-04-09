const pricing = {
  "Car": {
    firstPrice: 5000,
    hrPrice: 3000,
    extraChrg: 50000,
  },
  "Bike": {
    firstPrice: 2000,
    hrPrice: 1000,
    extraChrg: 20000,
  }
}

const lotBilling = ( vhcType, duration ) => {
  let total = 0;
  const HOUR_ONE_DAY = 24;

  duration = Math.ceil(duration);

  total += ((duration - 1) * pricing[vhcType].hrPrice) + pricing[vhcType].firstPrice
  if (duration > HOUR_ONE_DAY) total += pricing[vhcType].extraChrg;

  return total;
}

console.log(lotBilling("Car", 3));
console.log(lotBilling("Bike", 1));
console.log(lotBilling("Car", 27));
console.log(lotBilling("Car", 2.5));