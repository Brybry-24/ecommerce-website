function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_b14je8k", "template_jqfam1c", params).then(function(response) {
        swal("Email was sent!");
    }).catch(function(error) {
        swal("Oops... Something went wrong: " + error.text);
    });
}
