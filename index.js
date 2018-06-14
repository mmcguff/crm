import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './src/routes/crmRoutes'
import { crmModel } from './src/models/crmModel';

const app = express();
const PORT = 3000;



//mongoose connection
mongoose.Promise = global.Promise;
let mongo_location = 'mongodb://localhost/CRMdb';
//let crmModel = require('./src/models/crmModel');

mongoose.connect(mongo_location).catch((err)=>{
    console.log('*** Can Not Connect to Mongo Server:', mongo_location)
})

let db = mongoose.connection;
db.once('open', ()=>{
    console.log('Connected to mongo at '+mongo_location);
})
db.on('error', (error)=>{
    console.log("error", error);
})

//body parser setup
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


routes(app);

app.get('/',(req,res) => 
    res.send(`Node and express server is running on port ${PORT}.`)
);

app.listen(PORT, () =>
    console.log(`Your server is running ${PORT}.`)
);