const Database = require('../db/config')

module.exports = {
    async create(req, res) {
        const db = await Database()
        const pass = req.body.password
        
        let roomId
        let isRoom = true
        
        while(isRoom == true) {
            /* Gera o ID da sala */ 
            for(i = 0; i < 6; i++) {
                i == 0 ?  roomId = Math.floor(Math.random() * 10).toString() : 
                roomId = roomId + Math.floor(Math.random() * 10).toString()
            }
            
            /* Verificar os Ids e faz um vetor */
            const roomsExistIds = await db.all(`SELECT id FROM rooms`)
            
            /* Verifica se o Id gerado pelo for já está em uso e caso esteja retorna true, caso não esteja retorna false e segue para a inserção no banco de dados */ 
            isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId)
            
            if(isRoom == false) {
                /* Cadastra a sala no banco */
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                    )VALUES(
                        ${parseInt(roomId)},
                        ${pass}
                        )`)
                    }
                    
                }
                
                await db.close()
                
                res.redirect(`/room/${roomId}`)
            },

            async open(req, res) {
                const db = await Database()
                let isNoQuestions 
                const roomId = req.params.room

                const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
                const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)

                if(questions.length == 0) {
                    if(questionsRead.length == 0) {
                        isNoQuestions = true
                    }
                }

                res.render('room', {roomId: roomId, questions:questions, questionsRead:questionsRead, isNoQuestions:isNoQuestions})
            },

            enter(req, res) {
                const roomId = req.body.roomId

                res.redirect(`/room/${roomId}`)
            }
        }
        
        