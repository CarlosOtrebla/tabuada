function gerarTabuada() {
    let numero = document.getElementById('idNumero')
    let tabuada = document.getElementById('idTabuada')
    if(numero.value.lenght == 0) {
        window.alert('Por favor, digite um número!')
    }else {
        let n = Number(numero.value)
        let c = 0
        tabuada.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('Option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tabuada ${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}