var expect = function (val) {
  return {
    toBe: function (val2) {
      if (val === val2) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (val3) {
      if (val !== val3) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(null));

try {
  expect(5).toBe(6); // throws error: throw new Error
} catch {
  console.log(`Error occured due to "throw new Error"`);
}
