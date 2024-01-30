VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 4,
    speed: 100,
});

var typed = new Typed(".auto-input", {
    strings: ["Saurav Prasai", "a Web developer", "a Software developer"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});

function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var body = "Name: " + name + "<br>Email: " + email + "<br>Message: " + message;

    Email.send({
    Host: "smtp.gmail.com",
    Username: "sauravprasai2020@gmail.com",
    Password: "sazcwrcgtbbrqpkb",
    To: "sauravprasai2020@gmail.com",
    From: email,
    Subject: "Inquiry Email from website",
    Body: body
    }).then(function (message) {
    alert("Email sent successfully");
    });
}

var loader = document.getElementById("preloader");
setTimeout(function () {
    loader.style.display = "none";
}, 2000);



