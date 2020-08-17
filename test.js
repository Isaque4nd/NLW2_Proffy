const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    
    proffyValue = {
        name: "Isaque Andrade",
        avatar: "https://avatars1.githubusercontent.com/u/67492995?s=460&u=2ca65dad6a5baa1ab975f043dfb7e4e0006c22a9&v=4",
        whatsapp: "(11) 4002-8922",
        bio: "Sempre procurando saber de onde as coisas se originam. Nada é mais envolvente que uma história bem contada e que desperta a imaginação",
        
    }

    classValue = {
        subject: 7, 
        cost: "20", 
       
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220
        } 
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule 
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    // console.log(selectClassesSchedules)

})

