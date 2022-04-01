// const express = require("express");
// const bodyParser = require("body-parser");
// const router = express.Router();
// const app = express();

// app.use("/",router);

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

// router.get('/',(req,res)=>{
//     res.sendFile("index.html");
// });

// router.post('/mailing',(req,res)=>{
//     let nombre = req.body.nombre;
//     let correo = req.body.correo;
//     console.log(`${nombre}    ${correo}`)
//     res.end("ok")
// })

// app.listen(3000,()=>{
//     console.log("servidor en puerto 3000")
// })