let username = document.getElementById("username");
let password = document.getElementById("password");
let flagUser = 1;
let flagPass = 1;


function validation() {
  if (username.value == "") {
    document.getElementById("userError").innerHTML = "UserName is empty.";
    flagUser = 0;
  } else if (username.value.length < 6) {
    document.getElementById("userError").innerHTML = "UserName is invalid!";
    flagUser = 0;
  }else if(username.value != 'dipesh'){
    document.getElementById("userError").innerHTML = "UserName not matched!";
    flagUser = 0;
  }
   else {
    document.getElementById("userError").innerHTML = "";
    flagUser = 1;
  }

  if (password.value == "") {
    document.getElementById("passError").innerHTML = "Password is Empty.";
    flagPass = 0;
  }else if(password.value != 'dipesh12'){
    document.getElementById("passError").innerHTML = "Password is invalid.";
    flagPass = 0;
  }
   else {
    document.getElementById("passError").innerHTML = "";
    flagPass = 1;
  }
  if (flagUser && flagPass) {
   
    window.location.href = "dashboard.html";
    console.log('Login Successful');
   
  } 
  return false;
}
