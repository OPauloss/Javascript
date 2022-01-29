function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    //var hora = 8
    if (hora >= 6 && hora <= 12){
        msg.innerHTML = `Agora são ${hora}h${minuto}min`
        img.innerHTML = '<img src="imagens/manha.png" alt="Amanhecer">'
        document.body.style.background = '#FEB74B'
    }
    else if (hora > 12 && hora <= 18){
        msg.innerHTML = `Agora são ${hora}h${minuto}min`
        img.innerHTML = '<img src="imagens/tarde.png" alt="Amanhecer">'
        document.body.style.background = '#9F7D4E'
    }
    else{
        msg.innerHTML = `Agora são ${hora}h${minuto}min`
        img.innerHTML = '<img src="imagens/noite.png" alt="Amanhecer">'
        document.body.style.background = '#48474D'
    }
}