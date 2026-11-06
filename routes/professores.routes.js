
const express = require("express")
const router = express.Router()//quando criar um arquivo precisa usar o express.router

//router é para quando temos arquivos separados
//App épara quando esta tudo em uma pasta

const db = require("../DB")
// inportamos a pasta db para as rotas



// rotas do professor//
router.get("/professores", async (req, res) => {

    const[professores] =  await db.execute("SELECT*FROM professor")
    return res.json(professores)
})



router.post('/', async (req, res) =>{
    const{nome, especialidade} = req.body
    if(!nome || ! especialidade){
        return res.status(400).json({error: 'Nome e especialidade são obrigatórios'})
    }
    
    if(nome.length < 3){
        return res.status(400).json({error: 'Nome precisa ter mais que 3 caracteres'})
    }
    
    const [result] = await db.execute(
        'INSERT INTO professor (nome, especialidade) VALUES(?, ?)' ,
        [nome, especialidade]
    )
    
    return res.status(201).json({id: result.insertId, nome, especialidade})
})

module.exports = router