function checkPassword() {
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");

    let strength = 0;

    if(password.length >= 8) strength++;
    if(/[A-Z]/.test(password)) strength++;
    if(/[a-z]/.test(password)) strength++;
    if(/[0-9]/.test(password)) strength++;
    if(/[^A-Za-z0-9]/.test(password)) strength++;

    if(strength <= 2){
        result.innerHTML = "Weak Password";
    }
    else if(strength <= 4){
        result.innerHTML = "Medium Password";
    }
    else{
        result.innerHTML = "Strong Password";
    }
}
