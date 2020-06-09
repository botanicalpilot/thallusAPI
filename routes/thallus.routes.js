module.exports = app => {
    const crops = require("../controllers/crop.controller");
    const cors = require('cors')
    var router = require("express").Router();
    const multer = require("multer");
    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, './images');
        }, 
        filename: function(req, file, cb) {
            cb(null, file.originalname);
        }
    });
    const image =  multer({storage: storage});

    app.use(cors())

    // create a new crop
    router.post("/", image.single('cropImage'), crops.create);

    // get all crops by common_name or scientific_name
    router.get("/", crops.findAll);

    // get crop by id
    router.get("/:id", crops.findOne);

    // update crop by id
    router.put("/:id", image.single('cropImage'), crops.update);
    

    // delete crop by id
    router.delete("/:id", crops.delete);

    // delete all crops
    // router.delete("/", crops.deleteAll);

    app.use('/api/crops', router);
};