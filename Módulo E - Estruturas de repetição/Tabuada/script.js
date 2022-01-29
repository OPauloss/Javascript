function gerar(){
    let txtnum = document.getElementById('txtn')
    let num = Number(txtnum.value)
    let tabuada = document.getElementById('tabuada')
    tabuada.innerHTML = `<h2> Tabuada do ${num}</h2>`
    for (var i = 0; i <= 10; i++){
        tabuada.innerHTML += `<p>${num} x ${i} = ${num * i}</p>`
    }
}