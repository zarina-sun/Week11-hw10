// Задание 1
function compareAges(age1, age2) {
  if (age1 > age2) {
    return "Первый человек старше";
  } else if (age1 < age2) {
    return "Второй человек старше";
  } else {
    return "Оба человека одного возраста";
  }
}
console.log(compareAges(30, 25)); 
console.log(compareAges(22, 40)); 
console.log(compareAges(18, 18)); 

// Задание 2
function repeatString(str, n) {
  return str.repeat(n);
}
console.log(repeatString("hello", 3)); 

// Задание 3
function calculateAverage(numbers) {
  if (numbers.length === 0) return 0; 
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}
console.log(calculateAverage([10, 20, 30, 40, 50, 60])); 

// Задание 4
function pickEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}
console.log(pickEvenNumbers([1, 2, 3, 4, 5, 6]).join(', ')); 

