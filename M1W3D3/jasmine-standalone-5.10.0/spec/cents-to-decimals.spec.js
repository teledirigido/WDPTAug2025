describe("function centsToDecimals", () => {
  
  it("Function should be defined", () => {
    expect(centsToDecimals).toBeDefined();
  })

  it("Function take one argument", () => {
    expect(centsToDecimals.length).toBe(1);
  })

  it("Should convert value from cents to floating point number with 2 decimals", () => {
    expect(centsToDecimals(105)).toBe(1.05);
    expect(centsToDecimals(23)).toBe(0.23);
  });
  it("Should return false if not a number", () => {
    expect(centsToDecimals('')).toBeFalse();
    expect(centsToDecimals([])).toBe(false)
  }); 
});

describe("function calculateTip", () => {
  it("Calculate 10% tip", () => {
    expect(calculateTip(100)).toBe(10);
  });
})