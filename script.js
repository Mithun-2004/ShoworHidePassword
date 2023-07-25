let image = document.querySelector('#image');
let password = document.querySelector('#password');

image.addEventListener('click', function(){
    if (password.type=="password"){
        password.type = "text";
        image.src = "eye-open.png";
    }else{
        password.type = "password";
        image.src = "eye-close.png";
    }
})