function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /[,\n]/;
  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterEnd);
    numbers = numbers.substring(delimiterEnd + 1);
  }

  return numbers.split(delimiter).reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };
