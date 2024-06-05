function register() {
        var user = document.getElementById("uname").value;
        var pass = document.getElementById("upass").value;
        var cpass = document.getElementById("upass1").value;
        var ml=document.getElementById("email").value;
        if (user == "") {
          alert("Enter Your Username");
        }
        if (pass == "") {
          alert("Enter Your Password");
        }
        if(cpass==""){
            alert("Enter Your Confirm Password");
        }
        if(ml==""){
          alert("Enter Your Email");
        }
        if (user && pass && cpass && ml !="") {
          alert("Register Successfull");
        }
}        