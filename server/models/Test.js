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
        required: true
      },
      testok: {
        type: Boolean,
        required: true
      }
    }
  );
  
  const Test = model('Test', testSchema);
  
  module.exports = Test;
  