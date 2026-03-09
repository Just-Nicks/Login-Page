const local_user = "@admin";
const local_pass = "12345";

document.getElementById("sing_in").onclick = login;

function login() {
    let user = document.getElementById("user").value;
    let passwd = document.getElementById("passwd").value;

    if (user === local_user && passwd === local_pass) {
        console.log("Welcome");
        window.location.href = "success.html"
    } else {
        console.log("Incorrect");
        document.getElementById("alert").classList.add("show");
    }
}