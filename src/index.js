require('dotenv').config({path:'./config.env'});
const express = require('express');
const bodyParser = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const port = process.env.PORT || 4005 ;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const productRoute = require('./routes/productRoute');
app.use("/product", productRoute);

//router
app.get("/",(req,res)=>{
    res.send("Hello from index");
    console.log("Hello from index");
});

// app.get("/about/:id", (req,res)=>{
//     // parems = parameter
//     res.send("Unabee at " + req.params.id);

//});

// app.get("/square/:num",(req,res)=>{
//     let id = req.params.num*req.params.num;
//     res.send(`Square of ${req.params.num} = ${req.params.num} = ${id}`);

// });

// app.get("/sum/:num1/:num2", (req,res)=>{     //sum/5/7
//     let sum = (req.params.num1*1) + (req.params.num2*1);
//     res.send(`Square ${sum}`);
// });

// app.get("/contact",(req,res)=>{
//     res.send("6666666666");

// });



app.listen(port,()=>{
    console.log("App is running on " + port);
});
