function contar(){
    let finicio = document.getElementById('inicio')
    let ffim = document.getElementById('fim')
    let fpasso = document.getElementById('passo')
    let res = document.getElementById('res')
    if (finicio.value.length == 0 || ffim.value.length == 0 || fpasso.value.length == 0){
        res.innerHTML = `<p>Impossível contar</p>`   
    }
    else{
        res.innerHTML = '<p>Contando: '
        let inicio = Number(finicio.value)
        let fim = Number(ffim.value)
        let passo = Number(fpasso.value)
        for (let c = inicio; c <= fim; c += passo){
            res.innerHTML += `${c} >`
        }
         
    }

}