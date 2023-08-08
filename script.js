const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

let isShow= false;

function error(input, message) {
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
}

function success(input) {
  input.className = "form-control is-valid";
}

const checkEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function checkRequired(inputs) {
  inputs.forEach(function (element) {
    if (element.value === "") {
      error(element, `${element.id} i required`);
    } else {
      success(element);
    }
  });
}

function checkLength(input, min, max) {
  //   var strList = Array.from(input);

  if (input.value.length < min) {
    error(input, `${input.id} en az ${min} karakter olmalıdır`);
  } else if (input.value.length > max) {
    error(input, `${input.id} en fazla ${max} karakter olmalıdır`);
  } else {
    success(input);
  }
}

function checkPassword(input1,input2) {

    if (input1.value !== input2.value) {
        error(input2, 'Parola eşleşmiyor')
    }
}


// let showPassword = document.querySelector('.showP');

// showPassword.addEventListener('click', function() {
//     if (password.value.type === "password") {
//         password.value.type = "text";
//     } else {
//         password.value.type = "password";
//     }
// });

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   console.log(username.value);

  checkRequired([username, email, password, repassword]);
  checkLength(username,7,15);
  checkLength(password,7,15);
  checkPassword(password,repassword);
  if (!checkEmail(email.value)) {
    error(email, "Email bilgisi gerekli");
  } else {
    success(email);
  }
});
