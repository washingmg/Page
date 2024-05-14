function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = formatarNumero(data.getMinutes());

    if(hora >= 0 && hora < 12){
        img.src = 'assets/img/foto-manha.png';
        document.body.style.background = '#e2cd9f';
        msg.innerHTML = `Agora são ${hora} : ${minutos} horas. <br> Bom dia!`;
    
    }else if(hora >= 12 && hora <= 18){
        img.src = 'assets/img/foto-tarde.png';
        document.body.style.background = '#b9846f';
        msg.innerHTML = `Agora são ${hora} : ${minutos} horas. <br> Boa tarde!`;
    
    }else{
        img.src = 'assets/img/foto-noite.png';
        document.body.style.background = '#203F54';
        msg.innerHTML = `Agora são ${hora} : ${minutos} horas. <br> Boa noite!`;
    }
}

function formatarNumero(numero) {
    return numero < 10 ? "0" + numero : numero;
}
