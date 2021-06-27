const Database = require('./config')

const initDb = {
    async init() {
        const db = await Database()

        /* Criação da tabela rooms */
        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        /* Criação da tabela questions */
        await db.exec(`Create TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`)

        await db.close()
    }
}

initDb.init();