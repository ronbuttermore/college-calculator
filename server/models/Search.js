const { Schema, model } = require('mongoose');

const searchSchema = new Schema(
  
    {
      university: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 1,
        maxlength: 200
      },
      major: {
        type: String,
        unique: false,
        trim: true,
        minlength: 1,
        maxlength: 200
      },
      loanAmount: {
        type: Number,
      },
      interestRate: {
        type: Number,
      },
      loanTerm: {
        type: Number,
      },
      annualSalary: {
        type: Number,
      },
      stateTaxPercentage: {
        type: Number,
      }
    }
  );
  
 const Search = model('Search', searchSchema);
  
  module.exports = Search;
  