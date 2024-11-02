function getValueAtObject(obj, key) {
  let answer = "error";
  for (let k in obj) {
    if (k == key) {
      answer = obj[key];
    }
  }
  return answer;
}
