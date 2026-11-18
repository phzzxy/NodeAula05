import express from "express"
import CalcularDobro from "./calculo.js"

const app = express()
const servidor = 3000

// Libera o acesso aos arquivo HTML, CSS e JS dentro da pasta "public

app.use(express.static('public'))


app.listen(servidor, () => {
    console.log(`O servidor ${servidor} está aberto`)
})


app.get('/dobro', (req,res) =>{
    const numeroDoFrontEnd = Number(req.query.valor)
    const resultado = CalcularDobro(numeroDoFrontEnd);
    res.json({
        dobro: resultado,
        numeroEnviado: numeroDoFrontEnd
    })
})