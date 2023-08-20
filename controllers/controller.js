/* This file will handle all the database connection related stuff */
let collection = require("../models/rocket");
const insertcatintoDB = (req, res) => {
    let cat = req.body;
    collection.insertCat(cat, (err, result) => {
        if (!err) {
            res.json({
                statusCode: 201,
                data: result,
                message: 'success'
            });

        }
    });

}

const getcatfromDB = (req, res) => {
    collection.getAllCats((err, result) => {
        if (!err) {
            res.json({
                statusCode: 200,
                data: result,
                message: 'success'
            });
        }
    });
}

module.exports = {
    insertcatintoDB,
    getcatfromDB
};