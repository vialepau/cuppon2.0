const nodemailer = require("nodemailer")

let template =""

function enviar(subject, to){

    
        template =`<h2>Hola! Gracias por inscribirte</h2>

        <br>
        <h3> Aca te dejamos algunos cupones de descuento</h3>
    
        <ul>
    
            <li>Descuento de 10% en compra de pan en el almacen de la esquina    COD:PANBARATO</li>
    
            <li>Descuento de 15% en compra de Bencina    COD:BENCINACONAGUA</li>
    
            <li>Descuento de 10% en compra de Parafina    COD:INVIERNOCONGUATERO</li>
    
            <li>Descuento de 20% en compra de paltas en el super Acuenta    COD:OROVERDE</li>
    
        </ul>`;
    
        
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "probadocosas@gmail.com",
                pass: "cosasparaprobar5"
            },
        });
        let mailOptions ={
            from:"probadocosas@gmail.com",
            to,
            subject:'Cuppon',
            html:`${template}`,
        };

        transporter.sendMail(mailOptions,(err,data)=>{
            if(err) console.log(err);
            if(data) console.log(data.response);
        })
    
}
module.exports=enviar;