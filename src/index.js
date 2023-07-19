const express=require('express');
const bodyparser=require('body-parser');
const apiroutes=require('./routes/index');
const db=require('./models/index');



const app=express();
const PORT=3001;


const setupAndstartserver= async () => {
    app.listen(PORT,() =>{
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({extended:true}));
        app.use('/api',apiroutes);
        console.log(`server started at ${PORT}`);
    })
}


setupAndstartserver();