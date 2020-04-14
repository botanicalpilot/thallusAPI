module.exports = mongoose => {
    const Crop = mongoose.model(
        "crop",
        mongoose.Schema(
            {
                // crop name
                common_name: String,
                scientific_name: String,

                // sowing guide
                sow_all_season: Boolean,
                sow_indoor_start: Date,
                sow_indoor_end: Date,
                sow_outdoor_start: Date,
                sow_outdoor_end: Date,
                sow_outdoor_start_2: Date,
                sow_outdoor_end_2: Date,
                
                // start guide
                start_all_season: Boolean,
                start_outdoor_start: Date,
                start_outdoor_end: Date, 
                start_outdoor_start_2: Date,
                start_outdoor_end_2: Date, 
                
            }
        )
    );
    return Crop;
}
