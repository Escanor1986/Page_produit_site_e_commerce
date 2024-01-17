const array = new Array(100).fill().map((e, i) => i + 1);
const target = Math.floor(Math.random() * 100);

let numberOfTries = 0;

const binarySearch = (array, target) => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    numberOfTries++;
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (array[midIndex] == target) {
      console.log(`You found the anwser in ${numberOfTries} attempt !`);
      return array[midIndex];
    } else if (array[midIndex] < target) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }
  console.error("The number you're looking for is not in the present array !");
  return -1;
};

console.log(binarySearch(array, target));

// Implémentation en utilisant la récursivité

const recursiveBinarySearch = (array, target, start, end) => {
  if (start > end) {
    return null;
  } else {
    let mid = Math.floor((start + end) / 2);
    numberOfTries++;
    console.log(
      `L'index de départ est le : ${start} \n L'index de fin est le : ${end}`
    );
    if (array[mid] === target) {
      return mid + 1; // car mid retourne l'index et non le nombre à rechercher
    } else if (array[mid] < target) {
      return recursiveBinarySearch(array, target, mid + 1, end);
    } else {
      return recursiveBinarySearch(array, target, start, mid - 1);
    }
  }
};

console.log(recursiveBinarySearch(array, target, 0, array.length - 1));
