const myArray = () => {
  const array = [];

  const push = (value) => {
    array.push(value);
  };

  const deleteValue = (value) => {
    array.splice(array.indexOf(value), 1);
  };

  return {
    array: () => array,
    push,
    deleteValue,
  };
};

const newArray = myArray();
newArray.push(2);
newArray.push(200);
newArray.push(1);
console.log("new arr is", newArray.array());
newArray.deleteValue(200);
console.log("new arr is", newArray.array());
