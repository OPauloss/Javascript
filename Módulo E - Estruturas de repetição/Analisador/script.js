var lista = []

function adicionar(){
    var txtnum = document.getElementById('txtn')
    var num = Number(txtnum.value)
    if (num < 1 || num > 100){
        alert('Número inválido ou já incluído na lista.')
    }
    else{
        lista.push(num)
        lista.sort()
        var select = document.getElementById('valores')
        select.innerHTML += `<option value="">Valor ${num} adicionado</option>`
        txtnum.value = ''
        txtnum.focus()
    }

}

function finalizar(){
    var res = document.querySelector('div#res')
    res.innerHTML = `<p>Os valores da lista são ${lista}</p>`
    res.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados</p>`
    res.innerHTML += `<p>O menor valor informado foi ${lista[0]}</p>`
    res.innerHTML += `<p>O maior valor informado foi ${lista[lista.length - 1]}</p>`
    res.innerHTML += `<p>A soma dos valores da lista é ${soma}</p>`
}