function validate1() {
    var name = document.getElementById(name).value;
    var name = document.getElementById(password).value;
    if (name == " " || password == " ") {
        alert("Pls fill your detail")
    }
    else {
        document.getElementById("msg").innerHTML = "Welcome" + name;
        document.write("Your name and rollnumber is submitted ")
    }
}