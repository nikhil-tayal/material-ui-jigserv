const rupeeCommaFormatter = (value) => {
  let val = value && Math.round(value).toString();
  if (!val) {
    return "0";
  }
  if (val.length > 3) {
    let lastThree = val.substring(val.length - 3);
    let otherNumbers = val.substring(0, val.length - 3);
    if (otherNumbers !== "") lastThree = "," + lastThree;
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  } else {
    return val;
  }
};
export { rupeeCommaFormatter };
