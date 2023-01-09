import { definePrime } from "../../utils/definePrime.js";

describe("tests for definePrime function", () => {
  const simple = 17;
  const complex = 18;

  it("should operate correctly with simple, complex and invalid input", () => {
    expect(definePrime(simple)).toBe(`Число ${simple} - простое число`);
    expect(definePrime(complex)).toBe(`Число ${complex} - составное число`);
    expect(definePrime(1001)).toBe("Данные неверны");
    expect(definePrime(' ')).toBe("Данные неверны");
  });
});
