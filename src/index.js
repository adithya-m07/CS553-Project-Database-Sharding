const mysql = require('mysql2')
const express = require('express')
const fs = require('fs')
const xmlParser = require('xml2json')
const dotenv = require('dotenv')

const app = express()

const port = 5000


app.use(express.urlencoded({extended: true}))

app.listen(port, ()=> console.log(`Listening on port ${port}`))

const primary = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'admin',
    password: 'password',
    database: 'primarydb',
    multipleStatements: true
})

const shard0 = mysql.createPool({
    host: 'localhost',
    port: 4000,
    user: 'admin',
    password: 'password',
    database: 'shard0db',
    multipleStatements: true
})

const shard1 = mysql.createPool({
    host: 'localhost',
    port: 4001,
    user: 'admin',
    password: 'password',
    database: 'shard1db',
    multipleStatements: true
})

const shard2 = mysql.createPool({
    host: 'localhost',
    port: 4002,
    user: 'admin',
    password: 'password',
    database: 'shard2db',
    multipleStatements: true
})



app.get('/selectKey', async(req, res) =>{
    // console.log(process.env.PRIMARYDB_HOST, process.env.PRIMARYDB_PORT, process.env.PRIMARYDB_NAME)
    let res_o = Object();
    let time = new Date().getTime();
    if(req.body.mode == "P"){
        primary.execute(req.body.query, function(err, result){
            if(err) throw err;
            res_o.t = new Date().getTime() - time;
            res.send(res_o)
        })
    }
    else{
        let res_o = Object();
        if(req.body.key % 3 == 0){
            shard0.execute(req.body.query, function(err, result){
                if(err) throw err;
                res_o.t = new Date().getTime() - time;
                res.send(res_o)
            })
        }
        else if(req.body.key % 3 == 1){
            shard1.execute(req.body.query, function(err, result){
                if(err) throw err;
                res_o.t = new Date().getTime() - time;
                res.send(res_o)
            })
        }
        else{
            shard2.execute(req.body.query, function(err, result){
                if(err) throw err;
                res_o.t = new Date().getTime() - time;
                res.send(res_o)
            })
        }
    }
        
          
})

app.get('/select', async(req, res) =>{
    let res_o = Object();
    let time = new Date().getTime();
    if(req.body.mode == "P"){
        primary.execute(req.body.query, function(err, result){
            if(err) throw err;
            res_o.t = new Date().getTime() - time;
            res.send(res_o);
        })
    }
    else{
        await Promise.all([
            new Promise((resolve, reject) =>{
                shard0.execute(req.body.query, function(err, result){
                if(err) throw err;
                resolve(new Date().getTime() - time);

                })
            }),
            new Promise((resolve, reject) =>{
            shard1.execute(req.body.query, function(err, result){
                if(err) throw err;
                resolve(new Date().getTime() - time);
                })
            }),
            new Promise((resolve, reject) =>{
            shard2.execute(req.body.query, function(err, result){
                if(err) throw err;
                resolve(new Date().getTime() - time);
            })
        })
        ]).then((values) =>{
            res.send(values)
        })
    }
})

