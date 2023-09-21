const { Schema, model } = require('mongoose');

const testSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      testnumber: {
        type: Number,
        required: false
      },
      testok: {
        type: Boolean,
        required: false
      },
      savedBy: {
        type: String,
      }
    }
  );
  
  const Test = model('Test', testSchema);
  
  module.exports = Test;
  