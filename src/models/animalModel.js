var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var animalSchema = new Schema({
    age_upon_intake: String,
    animal_id: String,
    animal_type: String,
    breed: String,
    color: String,
    datetime: Date,
    datetime2: Date,
    found_location: String,
    intake_condition: String,
    intake_type: String,
    name: String,
    sex_upon_intake: String
});