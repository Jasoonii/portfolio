function SendMail() {
    var parameters = {
        from_name : document.getElementById("fullName.value"),
        email_id : document.getElementById("emailID").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_qbigr5r", "template_s0zvq3q", params).then(function (res) {
        alert("Email Sent!");
    })
}