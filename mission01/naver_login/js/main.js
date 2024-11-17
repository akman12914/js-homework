const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function checkEmail(node) {
  const id = node.value;

  if (!emailReg(id)) {
    node.classList.add("is--invalid");
  } else {
    node.classList.remove("is--invalid");
  }
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function checkPassword(node) {
  const pw = node.value;

  if (!pwReg(pw)) {
    node.classList.add("is--invalid");
  } else {
    node.classList.remove("is--invalid");
  }
}

const loginForm = document.querySelector(".login-form");
const userIdInput = document.getElementById("userEmail");
const passwordInput = document.getElementById("userPassword");
const loginButton = document.querySelector(".btn-login");

loginForm.addEventListener("submit", login);

function login(event) {
  event.preventDefault();

  const inputUserID = userIdInput.value.trim();
  const inputUserPassword = passwordInput.value.trim();

  if (inputUserID === user.id && inputUserPassword === user.pw) {
    window.location.href = "welcome.html";
  }
}
