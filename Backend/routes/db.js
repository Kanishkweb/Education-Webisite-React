const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Kanishkweb:Kanishk%401968@cluster0.6jajxqh.mongodb.net/Education"
// Connceting mongoose database
async function main() {
    await mongoose.connect(mongoURI, () =>{
      console.log('Hey its working bro /sis..')
    });
}



module.exports = main;