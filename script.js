function verificar() {
    var ftxt = document.getElementById('txtnome');
    var res = document.getElementById('res');
    var fsex = document.getElementsByName('radsex');
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    var nome = ftxt.value.toLowerCase(); // Converter para letras minúsculas
    var img = document.createElement('img');
img.setAttribute('id', 'foto');
img.classList.add('center-image'); // Adicione a classe center-image à imagem

    

    if (fsex[0].checked) {
        genero = 'Homem';
        if (nome === 'lucas guy') {
            img.setAttribute('src', 'guy.jpeg');
        } else if (nome === 'lucas santos') {
            img.setAttribute('src', 'lucas.jpeg');
        } else if (nome === 'dio') {
            img.setAttribute('src', 'dio.jpeg');
        } else if (nome === 'marllon') {
            img.setAttribute('src', 'marlon.jpeg');
        } else if (nome === 'lohran') {
            img.setAttribute('src', 'lohran.jpeg');
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher';
        if (nome === 'alma gemea lucas guy') {
            img.setAttribute('src', 'estherlucas.jpeg');
        } else if (nome === 'alma gemea lucas santos') {
            img.setAttribute('src', 'lorrany.jpeg');
        } else if (nome === 'alma gemea dio') {
            img.setAttribute('src', 'milaysa.jpeg');
        } else if (nome === 'alma gemea marllon') {
            img.setAttribute('src', 'estermarlon.jpeg');
        } else if (nome === 'alma gemea lohran') {
            img.setAttribute('src', 'namoradalohran.jpeg');
        }
    }

    res.style.textAlign = 'center';
    res.style.borderImageSource = 'center';
    res.innerHTML = `Detectamos ${genero}!`;
    res.appendChild(img);

    var nomeElement = document.createElement('p');
    nomeElement.setAttribute('id', 'nome');
    res.appendChild(nomeElement);
}
