function add(numbers) {
  if (numbers === "") return 0;
  if (!numbers.includes(",")) return parseInt(numbers);
  return numbers.split(",").reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };
