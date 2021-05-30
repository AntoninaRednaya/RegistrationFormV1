function checkForm() {
    let check = true;
    document.getElementById("errorMessage").innerHTML = "";
    if (document.getElementById("name").value == "") {
      document.getElementById("errorMessage").innerHTML += "Не заполнено имя пользователя<br><br>";
      check = false;
     }
    if (document.getElementById("surname").value == "") {
      document.getElementById("errorMessage").innerHTML += "Не заполнена фамилия пользователя<br><br>";
      check = false;
    }
    if (document.getElementById("email").value == "") {
      document.getElementById("errorMessage").innerHTML += "Не заполнен адрес электронной почты<br><br>";
      check = false;
    }
    if (document.getElementById("password").value.length < 5) {
      document.getElementById("errorMessage").innerHTML += "Слишком короткий пароль<br><br>"
      check = false;
    }  
    else 
      if (document.getElementById("password").value != document.getElementById("repeatPassword").value) {
        document.getElementById("errorMessage").innerHTML += "Пароли не совпадают<br><br>";
        check = false;
      }
    if (check == true) {
      document.getElementById("errorMessage").innerHTML = "";
      alert('Добро пожаловать, ' + document.getElementById("name").value + '!')     }
  }