

const mysql = require('mysql2/promise')

export const db = mysql.createPool({
    host: "localHost",
    user: "root",
    password:"root",
    database: "escola"
})
// export faz que essa variavel seja acessada por qualqer arquivo 
// sem o export a variavel so pode ser acessada neste arquivo

module.export = db
