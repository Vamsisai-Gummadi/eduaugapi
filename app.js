var express=require("express");
var app=express();
const mongo=require("mongodb");
const MongoClient=mongo.MongoClient;
//const mongourl="mongodb://localhost:27017"
const mongourl="mongodb+srv://abc:abc@cluster0.fojed.mongodb.net/mongofirst?retryWrites=true&w=majority"
let db;
//let cat_name="location"

app.get('/',(req,res)=>{
    res.send("welcome to api with express113467")
})
app.get('/location',(req,res)=>{
    db.collection('location').find().toArray((err,result)=>{
        if(err) throw err
        res.send(result);
    })
    
})
app.get('/restaurant',(req,res)=>{
    db.collection('restaurant').find().toArray((err,result)=>{
        if(err) throw err
        res.send(result);
    })
    
})
//restuarnats wrt to city with params
app.get('/restaurant/:cityId',(req,res)=>{
    var cityId=req.params.cityId;

    db.collection('restaurant').find({city:cityId}).toArray((err,result)=>{
        if(err) throw err
        res.send(result);
    })
    
})
//restuarnats wrt to city with queryparams
app.get('/restaurant',(req,res)=>{
    var cityId=req.query.cityId;

    db.collection('restaurant').find({city:cityId}).toArray((err,result)=>{
        if(err) throw err
        res.send(result);
    })
    
})
app.get('/quicksearch',(req,res)=>{
    db.collection('mealtype').find().toArray((err,result)=>{
        if(err) throw err
        res.send(result);
    })
    
})
MongoClient.connect(mongourl,(err,client)=>{
    if(err) console.log("errror while connecting")
    db=client.db('eduaug')
    app.listen(port,()=>console.log(`listening to port number ${port}`))
})
const port=process.env.PORT||8100;
