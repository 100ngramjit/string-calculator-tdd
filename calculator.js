function add(numbers) {
  if (numbers === "") return 0;
  return numbers.split(",").reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };
