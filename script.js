function validateform(){
    var fname = document.getElementByid('fname').value.trim();
    var email = document.getElementById('email').value.trim();
    var mensagem = document.getElementById('message').value.trim();

    if(fname === ''){
        alert('preencha o campo nome!');
        return false;
    }
    if(email ===''){
        alert('preencha o campo E-mail!');
        return false;
    }
    if(message ===''){
        alert('preencha o campo Mensagem!');
        return false;
    }


    return true;


}
