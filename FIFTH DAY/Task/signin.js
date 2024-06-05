function validate() {
        var user = document.getElementById("uname").value;
        var pass = document.getElementById("upass").value;
        if (user == "") {
          alert("Enter Your Username");
        }
        if (pass == "") {
          alert("Enter Your Password");
        }
        if (user == "admin" && pass == "h1h2h3") {
          alert("Login Successfull");
        }
        if (user != "admin" || pass != "h1h2h3") {
          alert("Invalid Username or Password");
        }
}