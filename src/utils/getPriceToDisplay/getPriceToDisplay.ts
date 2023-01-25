/**
 * @param {string} price of invoice as a raw value
 */
export const getPriceToDisplay = (price: number) => {
  const [integerValue, decimalValue = "00"] = price.toString().split(".");
  const integerValueWithCommas = integerValue.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );

  return `PLN ${integerValueWithCommas}.${decimalValue}`;
};
