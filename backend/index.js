const app = require("./src/app");
const connectDb = require("./src/config/configDb");


app.listen(process.env.port, (err) => {
    if(err){
        console.log(err);
    }
    console.log(`SERVER RUNNNING ON PORT 8080`);
    connectDb()
})