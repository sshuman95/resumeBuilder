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


app.get('/login/:key',(req,res)=>{
  let test = []
  admin.firestore().collection('users').get()
        .then(data =>{
            data.forEach(doc=>{
              if(doc.data().userId === req.params.key){
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



app.post('/saveHeader/:key',(req,res)=>{
        admin.firestore().collection('users').get()
        .then(data =>{
            data.forEach(doc=>{
              if(doc.data().userId === req.params.key){
                admin.firestore().collection('users').doc(doc.id).update({
                    header:req.body.header
                });
              }
            });
        })
        .then(()=>{
          res.json({message:'Header edit successful'})
        })
        .catch(error=>{
          res.json({
            error:error.message
          })
        })

});



app.post('/saveSkills/:key',(req,res)=>{
  admin.firestore().collection('users').get()
  .then(data =>{
      data.forEach(doc=>{
        if(doc.data().userId === req.params.key){
          admin.firestore().collection('users').doc(doc.id).update({
              skills:req.body.skills
          });
        }
      });
  })
  .then(()=>{
    res.json({message:'Skills edit successful'})
  })
  .catch(error=>{
    res.json({
      error:error.message
    })
  })

});




app.post('/saveEducation/:key',(req,res)=>{
  admin.firestore().collection('users').get()
  .then(data =>{
      data.forEach(doc=>{
        if(doc.data().userId === req.params.key){
          admin.firestore().collection('users').doc(doc.id).update({
              education:req.body.education
          });
        }
      });
  })
  .then(()=>{
    res.json({message:'Education edit successful'})
  })
  .catch(error=>{
    res.json({
      error:error.message
    })
  })

});

app.post('/saveExperience/:key',(req,res)=>{
  admin.firestore().collection('users').get()
  .then(data =>{
      data.forEach(doc=>{
        if(doc.data().userId === req.params.key){
          admin.firestore().collection('users').doc(doc.id).update({
              experience:req.body.experience
          });
        }
      });
  })
  .then(()=>{
    res.json({message:'Experience edit successful'})
  })
  .catch(error=>{
    res.json({
      error:error.message
    })
  })

});




app.post('/signup',(req,res)=>{
    admin.auth().createUser({
        email: req.body.email,
        password: req.body.password,
      })
      .then(function(userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        admin.firestore()
            .collection('users')
            .add({
                email:userRecord.email,
                userId:userRecord.uid,
                header:{name:"",email:"",phone:"",address:""},
                skills:[],
                education:[],
                experience:[]
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

