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


app.get('/login',(req,res)=>{
  let test = []
  admin.firestore().collection('users').get()
        .then(data =>{
            data.forEach(doc=>{
              if(doc.data().userId === req.body.key){
                test.push(doc.data())
              }
            })
        })
        .then(()=>{
          res.json(test)
        })
        .catch(error=>{
          res.json({
            error:error.message
          })
        })
});



app.post('/createResume',(req,res)=>{
    const resume = {
        header:req.body.header,
        skills:req.body.skills,
        education:req.body.education,
        experience:req.body.experience,
    };
        admin.firestore().collection('users').get()
        .then(data =>{
            data.forEach(doc=>{
              if(doc.data().userId === req.body.key){
                admin.firestore().collection('users').doc(doc.id).update(resume);
              }
            });
        })
        .catch(error=>{
          res.json({
            error:error.message
          })
        })

})


app.post('/signup',(req,res)=>{
    admin.auth().createUser({
        email: req.body.email,
        password: req.body.phone,
      })
      .then(function(userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        admin.firestore()
            .collection('users')
            .add({
                email:userRecord.email,
                userId:userRecord.uid
            })
            res.json({message:`User created successfully`});
      })
      .catch(function(error) {
        res.json({
          error:error.message
        })
      });
});


exports.api = functions.https.onRequest(app);

