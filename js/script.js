function ozToLbs() {
  const ounces = parseInt(prompt('Enter amount in Oz.'));
  let result = ounces / 16;
  window.alert(result);
  return result;
}

ozToLbs();