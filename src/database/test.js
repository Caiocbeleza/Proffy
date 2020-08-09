const Database = require("./db")
const createProffy = require('./createProffy')

Database.then(async(db) => {
    //inserir dados

    proffyValue = {
        name: "Caio Beleza",
        avatar: "https://avatars1.githubusercontent.com/u/37124720?s=460&u=95d8146bb9874a2d03cc9bfb2a8abdceb61394de&v=4",
        whatsapp: "999999999",
        bio: "Instrutor de ciências"
    }

    classValue = {
        subject: 1,
        cost: "20"
        //o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados, após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 720,
            time_to: 1220
        }
    ]

    //chama o createProffy e cria as tabelas
    //await createProffy(db, {proffyValue ,classValue, classScheduleValues})

    //consutar dados inseridos

    //trás todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")

    //consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 8h as 18h
    // time_from(8h) precisa ser antes ou igual ao horário solicitado
    // time_to precisa ser acima
    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    console.log(selectClassesSchedule)
    
    
})