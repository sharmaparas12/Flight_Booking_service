const express=require('express');
const bodyparser=require('body-parser');
const apiroutes=require('./routes/index');
const {PORT}=require('./config/server_config');
const db=require('./models/index');



const app=express();



const setupAndstartserver= async () => {
    app.listen(PORT,() =>{
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({extended:true}));
        app.use('/api',apiroutes);
        console.log(`server started at ${PORT}`);
        console.log("hi ");
        console.log(process.env.PORT);
        if(process.env.DB_SYNC==1)
        {
            db.sequelize.sync({alter:true});
        }
    })
}


setupAndstartserver();