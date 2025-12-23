window.tabuada = function() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        digitenum.innerHTML = 'Por favor, digite um número!'
        tab.innerHTML = ''
        
    } else {
        let n = Number(num.value)
        digitenum.innerHTML = ``

        tab.innerHTML = ''
        
        let contador = 1
        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${contador} = ${n * contador}`
            tab.appendChild(item)
            contador++
        }
    }
}
