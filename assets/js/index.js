const enviar = require("./mailer")
const url = require("url")
const fs = require("fs")
const http = require("http")
const process = require('process');


http.createServer(function(req,res){
    if(req.url.includes("/")){
        res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"})
        let rfs = fs.readFileSync("index.html","utf-8")
        res.end(rfs)
    }
    // *** trae datos y los muestra por consola
    //** se debe agregar el metodo post en el form */
    //  if(req.method =='POST'){
    //     let dataPost = '';
    //     req.on('data',function(data){
    //         dataPost += data;
    //     });
    //     req.on('end',function(){
    //         let dataObj = dataPost
            
    //         res.end(dataObj)
    //         console.log(dataObj)
    //     })


    //  }

    let{nombre, correo}=url.parse(req.url, true).query;

    if(req.url.startsWith("/mailing")){

        if(nombre !="" && correo !=""){
            enviar(nombre,correo);
            res.end()
        }else{
            res.end()
        }
    }
})
.listen(3001,()=>console.log("server en puerto 3001   PID:" +process.pid))
