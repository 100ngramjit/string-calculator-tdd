function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /[,\n]/;
  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    const delimiterDef = numbers.substring(2, delimiterEnd);
    if (delimiterDef.startsWith("[") && delimiterDef.endsWith("]")) {
      delimiter = delimiterDef.slice(1, -1);
    } else {
      delimiter = delimiterDef;
    }
    numbers = numbers.substring(delimiterEnd + 1);
  }

  const nums = numbers.split(delimiter).map((num) => parseInt(num));
  const negatives = nums.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return nums.filter((num) => num <= 1000).reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
