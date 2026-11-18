const campoNumero = document.getElementById('CampoNumero')
const btnCalcular = document.getElementById('btnCalcular')
const textoResultado = document.getElementById('textoResultado')

btnCalcular.addEventListener('click', async () => {

    const valorDigitado = campoNumero.value
 
    //1 Faz a requisição GET enviando o valor pela Query String
    const reposta = await fetch (`/dobro?valor=${valorDigitado}`)
 
    //2 converter a resposta JSON enviada pelo express com js
    const dados = await reposta.json()
 
    //mostra resultado na tela
    textoResultado.textContent = `O dobro de ${dados.numeroEnviado} é ${dados.dobro}`

})