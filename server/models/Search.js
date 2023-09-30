const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const searchSchema = new Schema(
  
    {
      university: {
        type: String,
        required: true,
        unique: false,
        trim: true,
      },
      major: {
        type: String,
        unique: false,
        trim: true,
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
      },
      searchedBy: {
        type: String
      },
      searchedAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      }
    }
  );
  
 const Search = model('Search', searchSchema);
  
  module.exports = Search;
  