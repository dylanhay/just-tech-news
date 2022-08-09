const {format_date} = require('../utils/helpers');
const {format_plural} = require('../utils/helpers');


test("format_date() returns a date string", () => {
  const date = new Date("2020-03-20 16:12:03");

  expect(format_date(date)).toBe("3/20/2020");
});

class Animal {
  constructor(word, amount) {
    this.word = word;
    this.amount = amount;
  };
};

const tiger = new Animal(
  "Tiger",
  2,
);

const lion = new Animal(
  "Lion",
  1,
);

test("format_plural() returns a plural word", () => {

  expect(format_plural(tiger.word, tiger.amount)).toBe("Tigers");
  expect(format_plural(lion.word, lion.amount)).toBe("Lion");

});

