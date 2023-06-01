function sum(number: number, number2: number) {
  return number + number2;
}

test('basic', () => {

  expect(sum(1,4)).toBe(5);
});