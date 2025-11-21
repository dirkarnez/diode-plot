function func(x) {
  //x /= 10;
  //return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;
  const Is = Math.pow(10, -12);
  const q = 1.602 * Math.pow(10, -19);
  const V = x;
  const n = 1; // ideal factor
  const k = 1.38 * Math.pow(10, -23); // Boltzmann's constant
  const T = 300; // absolute temperature in Kelvin
  return Is * (Math.exp((q*V)/(n * k * T)) - 1);
}
