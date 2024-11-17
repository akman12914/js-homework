function getValueAtObject(obj, key) {
  let answer = "error";
  for (let k in obj) {
    if (k == key) {
      answer = obj[key];
    }
  }
  return answer;
}

//1. 함수 이름
//2. 함수의 실행부 작성
