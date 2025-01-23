const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
       type: {
            type: String,
            required: true,
            enum: ['desarrollar', 'generacion de codigo']},
        question:{
            type: String,
            required: true},
        solution: {
            type: String, required:function(){
                return this.type === 'generacion de codigo'}},
        createAt: {type: Date, default: Date.now}
    });
    
    const Test = mongoose.model('Test', testSchema);
    
    module.exports = Test;