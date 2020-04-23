const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express();




admin.initializeApp();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
       res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
          next();
});

//Store Functions

app.get('/test',(req,res)=>{
    res.send("Hello")
})


app.post('/createResume',(req,res)=>{
    const resume = {
        header:req.body.header,
        skills:req.body.skills,
        education:req.body.education,
        experience:req.body.experience,
    };

    admin.firestore()
    .collection('test')
    .add(resume)
    .then(doc=>{
        res.json({message:`document ${doc.id} created successfully`});
    })
    .catch(err=>{
        res.status(500).json({
            error:'something went wrong'
        });
        console.error(err)
    })
})

exports.api = functions.https.onRequest(app);

