require('dotenv').config();
const fs = require('fs');
const pg = require('pg');
const url = require('url');

console.log("connecting to aivens....");

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.DB_SSL_CERT,
    },
};

const client = new pg.Client(config);

client.connect(function (err) {
    if (err)
        throw err;
    client.query("SELECT * from maincharactors", [], function (err, result) {
        if (err)
            throw err;
        console.log(result.rows);
        client.end(function (err) {
            if (err)
                throw err;
        });
    });
});
