// const fnameElement = document.getElementById("fname");
// const lnameElement = document.getElementById("lname");
// const emailElement = document.getElementById("email");
// const passwordElement = document.getElementById("password");
// const submit_btn = document.getElementById("submit-btn");

// submit_btn.addEventListener("click", function (event) {
//   event.preventDefault();
//   const fname_value =  fnameElement.value;
//   const lname_value =  lnameElement.value;
//   const email_value = emailElement.value;
//   const password_value = passwordElement.value;

//   console.log(`
//   firstname is ${fname_value}
//   lastname is ${lname_value}
//   The Email is ${email_value}
//   The password is ${password_value}
//   `);
// });

console.log("something");

let nameArray = [
  "Ashish",
  "rohini",
  "ankita",
  "anjali",
  "pruthvi",
  "arun",
  "raj",
  "abc",
  "a",
  "twinkle",
  "sanket",
  "madhave",
  "madhuri",
];

for (let i = 0; i <= 9; i++) {
  let name = nameArray[i];
  let nameLength = name.length;

  if (nameLength % 2 === 0) {
    console.log(name.toUpperCase());
  }
}
