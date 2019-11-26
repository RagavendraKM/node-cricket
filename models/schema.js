const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const cricketSchema = new Schema({
    id: String,
    city: String,
    date: Date,
    team1: String,
    team2: String,
    toss_winner: String,
    toss_decision: String,
    result: String,
    dl_applied: String,
    winner: String,
    win_by_runs: String,
    win_by_wickets: String,
    player_of_match: String,
    venue: String,
    umpire1: String,
    umpire2: String,
    umpire3: String,
    season: String,
})

module.exports = cricketMatch = mongoose.model("matches", cricketSchema);