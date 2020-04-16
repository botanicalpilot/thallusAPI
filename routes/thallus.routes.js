module.exports = app => {
    const crops = require("../controllers/crop.controller");

    var router = require("express").Router();

    // create a new crop
    router.post("/", crops.create);

    // get all crops by common_name or scientific_name
    router.get("/", crops.findAll);

    // get crop by id
    router.get("/:id", crops.findOne);

    // update crop by id
    router.put("/:id", crops.update);

    // delete crop by id
    router.delete("/:id", crops.delete);

    // delete all crops
    router.delete("/", crops.deleteAll);

    app.use('/api/crops', router);
};