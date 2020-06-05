const db = require("../models");
const Crop = db.crops;

// create and save new crop
exports.create = (req, res) => {
    // validate request
    if (!req.body.common_name) {
        res.status(400).send({message: "Common name cannot be empty"});
    } else if (!req.body.scientific_name) {
        res.status(400).send({message: "Scientific name cannot be empty"});
        return;
    }

    // create crop
    const crop = new Crop ({
        common_name: req.body.common_name,
        scientific_name: req.body.scientific_name,
        sow_all_season: req.body.sow_all_season,
        sow_indoor_start: req.body.sow_indoor_start, 
        sow_indoor_end: req.body.sow_indoor_end, 
        sow_outdoor_start: req.body.sow_outdoor_start,
        sow_outdoor_end: req.body.sow_outdoor_end,
        sow_outdoor_start_2: req.body.sow_outdoor_start_2, 
        sow_outdoor_end_2: req.body.sow_outdoor_end_2,
        start_all_season: req.body.start_all_season,
        start_outdoor_start: req.body.start_outdoor_start,
        start_outdoor_end: req.body.start_outdoor_end, 
        start_outdoor_start_2: req.body.start_outdoor_start_2,
        start_outdoor_end_2: req.body.start_outdoor_end_2,
        photo_ref: req.body.photo_ref
    });

    crop
        .save(crop)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "An error occurred while creating crop"
            })
        })
};

// retrieve all crops from the db by common name
exports.findAll = (req, res) => {
    const common_name = req.query.common_name;
    const scientific_name = req.query.scientific_name;
    
    var condition = common_name ? { common_name: { $regex: new RegExp(common_name), $options: "i"} } : {} || scientific_name ? { scientific_name: { $regex: new RegExp(scientific_name), $options: "i"} } : {};

    Crop.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "An error occurred while retrieving crops"
            });
        });
};

// Find crop by id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Crop.findById(id)
        .then(data => {
            if(!data)
                res.status(404).send({message: "No crops found with id: " + id});
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving crop with id: " + id});
        });
};

// update crop by id
exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty"
        });
    }

    const id = req.params.id;

    Crop.findByIdAndUpdate(id, req.body, {useFindAndModify: false })
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: `Cannot update tutorial with id: ${id}. Crop may have not been found`
                });
            } else res.send({ message: `Crop with ${id} was updated`})
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating crop with id: ${id}`
            });
        });
};

// delete crop by id
exports.delete = (req, res) => {
    const id = req.params.id;

    Crop.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.state(400).send({
                    message: `Cannot delete crop with id:${id}. Crop may not have been found`
                });
            } else {
                res.send({
                    message: `Crop with id: ${id} was deleted`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete crop with id: ${id}`
            });
        });
};

exports.deleteAll = (req, res) => {
    Crop.deleteMany({})
    .then(data => {
        res.send({
            message: `${data.deletedCount} Crops were deleted`
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
              err.message || "Some error occurred in the process of deleting crops"
        });
    });
};



