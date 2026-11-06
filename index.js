const express = require("express")
const app = express()

        const RotasProfessores = require ("./routes/professores.routes")// estou linkando a rota dos professores no index
        const RotasCursos = require ("./routes/cursos.routes")// estou linkando a rota dos corsos no index
        
app.use(express.json())



        app.use("/professores", RotasProfessores )//aqui estamos usando a rota
        app.use("/cursos", RotasCursos )//aqui estamos usando a rota



app.listen(3000, () => console.log("API RODANDO :3"))


