
function verificar() {
    let data = new Date();
    let ano_atual = data.getFullYear();
    let ano_input = document.getElementById('nano');
    let resp = document.querySelector('div#res');

    if (ano_input.value.length === 0 || Number(ano_input.value) > ano_atual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        let sex = document.getElementsByName('radsex');
        let idade = ano_atual - Number(ano_input.value);
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')

        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'assets/img/foto-crianca-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'assets/img/foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'assets/img/foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'assets/img/foto-idoso-m.png')
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'assets/img/foto-crianca-f.png')
            } else if (idade , 21) {
                img.setAttribute('src', 'assets/img/foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'assets/img/foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'assets/img/foto-idoso-f.png')
            }
        }
        resp.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resp.appendChild(img)
    }
}
