const mongoose = require('mongoose');

module.exports = () => {

//mongoode.connect :- means callback function

    mongoose.connect(process.env.MONGODB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    .then(() => {
        console.log(`MONGODB CONNECTED SUCCESFULLY`);
    })
    .catch(() => {
        console.log(`MONGODB CONNECTION FALIED`);
        process.exit(1)
    })
}