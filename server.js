const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static("angapp"));

app.get("/",(req,res)=>{

});

app.listen(port,()=>{
    console.log("Server Running On Port "+port);
})