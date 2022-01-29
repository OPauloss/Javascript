function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var Iano = document.getElementById('ano')
    var res = document.getElementById('res')
    if (Iano.value.length == 0 || Iano.value >= ano){
        alert('Erro: Verifique os dados e tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(Iano.value)
        var gender = ''
        if (fsex[0].checked){
            gender = 'homem'
        }
        else if (fsex[1].checked){
            gender = 'mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`<p>Detectamos ${gender} com <strong>${idade}</strong> anos.</p>`)
    }

    
}