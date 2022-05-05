describe("pow", function () {
  describe("возводит x в степень 3", function () {
    function makeTest(x) {
      let expected = x * x * x;

      it(`${x} в степени 3 будет ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  describe("возводит x в степень 0", function () {
    function makeTest(x) {
      let expected = x ** 0;

      it(`${x} в степени 0 будет ${expected}`, function () {
        assert.equal(pow(x, 0), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  it("для отрицательных n возвращает NaN", function () {
    assert.isNaN(pow(2, -1));
  });

  it("для дробных n возвращает NaN", function () {
    assert.isNaN(pow(2, 1.5));
  });

  it("Возводит x в степень n", function () {
    let x = 5;

    let result = x;
    assert.equal(pow(x, 1), result);

    result *= x;
    assert.equal(pow(x, 2), result);

    result *= x;
    assert.equal(pow(x, 3), result);
  });

  // ... другие тесты. Можно писать и describe, и it блоки.
});
