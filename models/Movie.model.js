const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    description: String,
    path: String
}, {
    timestamps: true
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie