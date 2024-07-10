import formatCurrency from "../scripts/utils/money.js";
describe("testSuite: formatCurrency", () => {
  it("basic test case", () => {
    expect(formatCurrency(2095)).toEqual("20.95");
  });

  it("round with zero", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });
  it("work with edge cases", () => {
    expect(formatCurrency(2000.1)).toEqual("20.00");
  });
});
