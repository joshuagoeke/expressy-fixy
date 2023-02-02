const router = require('express').Router();
const uuid = require('../helpers/uuid')
const utils = require('../helpers/utils')


router.get('/notes', (req, res) => {
    utils.readFromFile('./db/db.json')
    .then(data => res.json(JSON.parse(data)))
})

router.post('/notes', (req, res) => {
    let newNote = {
        title: req.body.title, 
        text: req.body.text,
        id: uuid()
    }
    utils.readAndAppend(newNote, './db/db.json')
    res.json("success!")
})


router.delete(`/notes/:id`, (req, res) => {
    console.log(` ${req.method} note received for ${req.params.id}`);
//     utils.readFromFile('./db/db.json')
//     .then(data => { 
//         const notesData = res.json(JSON.parse(data));
//         console.log(typeof notesData); 
//         notesData.forEach(note => { 
//             if (req.params.id === note.id){
//                 let killIndex =  notesData.indexOf(note);
//                 notesData.splice(killIndex, 1);
//                 utils.writeToFile('./db/db.json', notesData);
//             }
            
//         })
// })   
}
)


module.exports = router