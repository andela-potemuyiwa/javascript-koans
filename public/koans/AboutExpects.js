describe("About Expects", function() {

  // We shall contemplate truth by testing reality, via spec expectations.
  it("should expect true", function() {
    expect(true).toBeTruthy(); //This should be true
  });

  // Sometimes we will ask you to fill in the values.
  it("should have filled in values", function () {
    expect(1 + 1).toEqual(2);
  });

  // Sometimes we will ask you a trick question.
  it("should understand different type behaviors", function () {
    expect('1' + '1').toEqual('11');
  });

  // To understand reality, we must compare our expectations against reality.
  it("should expect equality", function () {
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  // Some ways of asserting equality are better than others.
  it("should assert equality a better way", function () {
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

    // toEqual() compares using type-converting equality.
    expect(actualValue).toEqual(expectedValue);
  });

  // Sometimes you need to be really exact about what you "type."
  it("should assert equality with ===", function () {
    var expectedValue = FILL_ME_IN;
    var actualValue = (1 + 1).toString();

    // toBe() compares using strict equality
    // further reading: http://stackoverflow.com/a/523647/626048
    expect(actualValue).toBe(expectedValue);
  });

  // Sometimes you don't want to be exact about what you "type."
  it("should assert equality with coercion", function () {
    var expectedValue = '2';
    var actualValue = 2;

    expect(actualValue === expectedValue).toBeTruthy();
  });
});