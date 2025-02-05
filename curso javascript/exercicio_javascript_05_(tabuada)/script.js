function gerarTabuada() {
    let num = document.getElementById('txtnumero') 
    let tabuada = document.getElementById('tabuada')

    if (num.value.length == 0) {
        
        window.alert('Por favor, digite um número!')

    } else {
        let numero = Number(num.value)
        let c = 1
        tabuada.innerHTML = '' //limpa a tabuada antes de gerar uma nova

        while (c <= 10) {
            let item = document.createElement('option') // cria um elamento option que funciona como uma lista
            item.text = `${numero} x ${c} = ${numero*c}` //o que vai aparecer no option/lista
            tabuada.appendChild(item) //adiciona o item na lista
            c++ //garante que o loop vai parar em 10

        }

    }
    
}