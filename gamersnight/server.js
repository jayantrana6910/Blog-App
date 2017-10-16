'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let pg = require('pg');
const PORT = 3000;

let pool = new pg.Pool ({
    user: 'postgres',
    database: 'Games',
    password: 'jaanaabe',
    host: 'localhost',
    port: 5432,
    max: 10
});

//pool.connect((err, db, done) => {
//    if(err) {
//        return console.log(err);
//    }
//    else {
//        var gameid = 2;
//        var name = 'NFS Mostwanted';
//        var type = 'PC';
//        db.query('SELECT * FROM game', (err, table) => {
//            done();
//            if(err) {
//                return console.log(err);
//            }
//            else {
//                console.log(table.rows[1]);
//            }
//        })
//    }
//})

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(function(request, response, next){
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/api/Games', function(request, response) {
    pool.connect(function(err, db, done) {
        if(err) {
            return response.status(400).send(err)
        }
        else {
            db.query('SELECT * FROM blog ORDER BY date', function(err, table) {
                done();
                if(err) {
                    return response.status(400).send(err)
                }
                else {
                    return response.status(200).send(table.rows)
                }
            })
        }
    })
})

app.listen(PORT, () => console.log('Listening on port: ' + PORT))