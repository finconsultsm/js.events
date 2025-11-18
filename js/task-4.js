const form = document.querySelector(".login-form")

form.addEventListener("submit", foo);

function foo(submit) {
    submit.preventDefault();

    const emailText = form.elements.email
    const passwordText = form.elements.password

    if (!emailText.value.trim() || !passwordText.value.trim()) {
        alert("All form fields must be filled in")
    } else {
        const result = {
            email: emailText.value.trim(),
            password: passwordText.value.trim()
        };
        console.log(result);
        form.reset();
    }   
}