function getNumberAtArray(arr, index) {
  let answer = "Error!";

  if (index >= arr.length || index < 0 || !Array.isArray(arr)) {
    return answer;
  }
  for (i of arr) {
    answer = arr[index];
  }
  return answer;
}
