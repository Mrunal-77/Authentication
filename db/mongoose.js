// const mongoose = require("mongoose");
// //In app.js
// mongoose.connect("mongodb://127.0.0.1:27017/auth_demo");
// app.use(require("express-session")({
// secret:"Any normal Word",//decode or encode session
//     resave: false,          
//     saveUninitialized:false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }));

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/auth_demo',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true,
    
}).then(() =>{
    console.log('Connection successful')
}).catch((e) => {
    console.log('No conection')
})