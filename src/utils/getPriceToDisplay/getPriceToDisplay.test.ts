import { getPriceToDisplay } from "./getPriceToDisplay";

describe("utilis: get price to display", () => {
  test("Given raw price is formatted to display", () => {
    expect(getPriceToDisplay(10000)).toBe("PLN 10,000.00");
    expect(getPriceToDisplay(9)).toBe("PLN 9.00");
    expect(getPriceToDisplay(12345678.32)).toBe("PLN 12,345,678.32");
    expect(getPriceToDisplay(0)).toBe("PLN 0.00");
  });
});
