// Without Underscore
function zipList(list1, list2) {
  if (list1.length !== list2.length) {
    throw new Error('Lists must be of equal length');
  }

  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }

  return result;
}

function zipListTheSimpleWay(list1, list2) {
  if (list1.length !== list2.length) {
    throw new Error('Lists must be of equal length');
  }

  return _.flatten(_.zip(list1, list2));
}

// Example usage
const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

console.log(zipList(list1, list2)); // Output: ['a', 1, 'b', 2, 'c', 3]
console.log(zipListTheSimpleWay(list1, list2)); // Output: ['a', 1, 'b', 2, 'c', 3]
