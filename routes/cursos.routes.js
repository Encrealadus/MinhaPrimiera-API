
const express = require("express")
const router = express.Router()
const db = require("../DB")



router.get('/', async (req, res) =>{

    const [cursos] = await db.execute('SELECT * FROM curso')
    return res.json(cursos)
})


router.post('/', async (req, res) =>{
    const{nome, descricao, professorID} = req.body
    
    if(! nome || ! descricao || !professorID){
        return res.status(400).json({error: 'Nome, descrição e o ID do professor são obrigatórios'})
    }
    
    const [result] = await db.execute(
        'INSERT INTO curso (nome, descricao, professor_id) VALUES(?, ?, ?)',
        [nome, descricao, professorID]
    )
    
    return res.status(201).json({id:result.insertId, nome, descricao, professorID})
})

router.delete('/:id', async (req, res) =>{
    const id = req.params.id // pega o id da url

    const [result] = await db.execute(
        'DELETE FROM curso WHERE id = ?',
        [id]
    )

    if(result.affectedRows === 0){
        return res.status(404).json({error: 'Curso não encontrado'})
    }

    return res.status(204).end()
})

module.exports = router