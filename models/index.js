const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");

// may not need this promise; depreciated in mongoose5
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.crops = require("./crop.model")(mongoose);

module.exports = db;




