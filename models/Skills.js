var mongoose = require('mongoose');

var SkillSchema = new mongoose.Schema({
    title: String,
    description: String,
});

mongoose.model('Skill', SkillSchema);